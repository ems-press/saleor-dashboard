import { gql } from "@apollo/client";

export const productTypeDeleteMutation = gql`
  mutation ProductTypeDelete($id: ID!) {
    productTypeDelete(id: $id) {
      errors {
        field
        message
      }
      productType {
        id
      }
    }
  }
`;

export const productTypeBulkDeleteMutation = gql`
  mutation ProductTypeBulkDelete($ids: [ID]!) {
    productTypeBulkDelete(ids: $ids) {
      errors {
        field
        message
      }
    }
  }
`;

export const productTypeUpdateMutation = gql`
  mutation ProductTypeUpdate($id: ID!, $input: ProductTypeInput!) {
    productTypeUpdate(id: $id, input: $input) {
      errors {
        field
        message
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;

export const assignProductAttributeMutation = gql`
  mutation AssignProductAttribute(
    $id: ID!
    $operations: [ProductAttributeAssignInput!]!
  ) {
    productAttributeAssign(productTypeId: $id, operations: $operations) {
      errors {
        field
        message
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;

export const unassignProductAttributeMutation = gql`
  mutation UnassignProductAttribute($id: ID!, $ids: [ID]!) {
    productAttributeUnassign(productTypeId: $id, attributeIds: $ids) {
      errors {
        field
        message
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;

export const productTypeCreateMutation = gql`
  mutation ProductTypeCreate($input: ProductTypeInput!) {
    productTypeCreate(input: $input) {
      errors {
        field
        message
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;

export const productTypeAttributeReorder = gql`
  mutation ProductTypeAttributeReorder(
    $move: ReorderInput!
    $productTypeId: ID!
    $type: ProductAttributeType!
  ) {
    productTypeReorderAttributes(
      moves: [$move]
      productTypeId: $productTypeId
      type: $type
    ) {
      errors {
        field
        message
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;

export const productAttributeAssignmentUpdate = gql`
  mutation ProductAttributeAssignmentUpdate(
    $operations: [ProductAttributeAssignmentUpdateInput]!
    $productTypeId: ID!
  ) {
    productAttributeAssignmentUpdate(
      operations: $operations
      productTypeId: $productTypeId
    ) {
      errors {
        field
        message
        attributes
      }
      productType {
        ...ProductTypeDetailsFragment
      }
    }
  }
`;
