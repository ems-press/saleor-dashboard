import { gql } from "@apollo/client";

export const menuList = gql`
  query MenuList(
    $first: Int
    $after: String
    $last: Int
    $before: String
    $sort: MenuSortingInput
  ) {
    menus(
      first: $first
      after: $after
      before: $before
      last: $last
      sortBy: $sort
    ) {
      edges {
        node {
          ...MenuFragment
        }
      }
      pageInfo {
        ...PageInfoFragment
      }
    }
  }
`;

export const menuDetails = gql`
  query MenuDetails($id: ID!) {
    menu(id: $id) {
      ...MenuDetailsFragment
    }
  }
`;
