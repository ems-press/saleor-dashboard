import { MenuDetailsFragmentFragment } from "@saleor/graphql";

import { TreeOperation } from "../MenuItems";

export function findNode(
  tree: MenuDetailsFragmentFragment["items"],
  id: string
): number[] {
  const foundNodeIndex = tree.findIndex(node => node.id === id);
  if (tree.length === 0) {
    return [null];
  }
  if (foundNodeIndex !== -1) {
    return [foundNodeIndex];
  }
  const nodeMap = tree.map((node, nodeIndex) => [
    nodeIndex,
    ...findNode(node.children, id)
  ]);
  return nodeMap.find(path => path[path.length - 1] !== null) || [null];
}

export function getNode(
  tree: MenuDetailsFragmentFragment["items"],
  path: number[]
): MenuDetailsFragmentFragment["items"][0] {
  if (path.length === 1) {
    return tree[path[0]];
  }
  return getNode([...tree[path[0]].children], path.slice(1));
}

function removeNode(
  tree: MenuDetailsFragmentFragment["items"],
  path: number[]
): MenuDetailsFragmentFragment["items"] {
  const removeIndex = path[0];

  if (path.length === 1) {
    return [...tree.slice(0, removeIndex), ...tree.slice(removeIndex + 1)];
  }

  const newTree = [...tree];
  newTree[removeIndex] = {
    ...tree[path[0]],
    children: removeNode(tree[path[0]].children, path.slice(1))
  };

  return newTree;
}

function insertNode(
  tree: MenuDetailsFragmentFragment["items"],
  path: number[],
  node: MenuDetailsFragmentFragment["items"][0],
  position: number
): MenuDetailsFragmentFragment["items"] {
  if (path.length === 0) {
    return [...tree.slice(0, position), node, ...tree.slice(position)];
  }

  if (path[0] in tree) {
    tree[path[0]].children = insertNode(
      tree[path[0]].children,
      path.slice(1),
      node,
      position
    );
  }
  return tree;
}

function removeNodeAndChildren(
  tree: MenuDetailsFragmentFragment["items"],
  operation: TreeOperation
): MenuDetailsFragmentFragment["items"] {
  const sourcePath = findNode(tree, operation.id);
  const node = getNode(tree, sourcePath);

  if (node.children) {
    const treeAfterChildrenRemoval = node.children.reduce(
      (acc, child) =>
        removeNodeAndChildren(acc, {
          id: child.id,
          type: "remove"
        }),
      tree
    );

    return removeNode(treeAfterChildrenRemoval, sourcePath);
  }

  return removeNode(tree, sourcePath);
}

function permuteNode(
  tree: MenuDetailsFragmentFragment["items"],
  permutation: TreeOperation
): MenuDetailsFragmentFragment["items"] {
  const sourcePath = findNode(tree, permutation.id);
  const node = getNode(tree, sourcePath);

  const treeAfterRemoval = removeNode(tree, sourcePath);

  const targetPath = permutation.parentId
    ? findNode(treeAfterRemoval, permutation.parentId)
    : [];

  const treeAfterInsertion = insertNode(
    treeAfterRemoval,
    targetPath,
    node,
    permutation.sortOrder
  );

  return treeAfterInsertion;
}

function executeOperation(
  tree: MenuDetailsFragmentFragment["items"],
  operation: TreeOperation
): MenuDetailsFragmentFragment["items"] {
  return operation.type === "move"
    ? permuteNode(tree, operation)
    : removeNodeAndChildren(tree, operation);
}

export function computeTree(
  tree: MenuDetailsFragmentFragment["items"],
  operations: TreeOperation[]
) {
  const newTree = operations.reduce(
    (acc, operation) => executeOperation(acc, operation),
    // FIXME: 😡
    JSON.parse(JSON.stringify(tree))
  );
  return newTree;
}
