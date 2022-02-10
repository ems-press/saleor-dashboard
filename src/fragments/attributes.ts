import { gql } from "@apollo/client";

export const attributeValueFragment = gql`
  fragment AttributeValueFragment on AttributeValue {
    id
    name
    slug
    file {
      ...FileFragment
    }
    reference
    richText
    boolean
    date
    dateTime
    value
  }
`;

export const attributeFragment = gql`
  fragment AttributeFragment on Attribute {
    id
    name
    slug
    type
    visibleInStorefront
    filterableInDashboard
    filterableInStorefront
    unit
    inputType
  }
`;

export const attributeDetailsFragment = gql`
  fragment AttributeDetailsFragment on Attribute {
    ...AttributeFragment
    ...MetadataFragment
    availableInGrid
    inputType
    entityType
    unit
    storefrontSearchPosition
    valueRequired
  }
`;

export const attributeValueListFragment = gql`
  fragment AttributeValueListFragment on AttributeValueCountableConnection {
    pageInfo {
      ...PageInfoFragment
    }
    edges {
      cursor
      node {
        ...AttributeValueFragment
      }
    }
  }
`;

export const availableAttributeFragment = gql`
  fragment AvailableAttributeFragment on Attribute {
    id
    name
    slug
  }
`;
