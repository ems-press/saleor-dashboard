/* eslint-disable sort-keys */
import {
  PageTypeDetailsFragmentFragment,
  PageTypeFragmentFragment
} from "@saleor/graphql";
import {
  AttributeInputTypeEnum,
  AttributeTypeEnum
} from "@saleor/types/globalTypes";

export const pageTypes: PageTypeFragmentFragment[] = [
  {
    id: "UGFnZVR5cGU6MQ==",
    name: "Blog",
    hasPages: true,
    __typename: "PageType"
  },
  {
    id: "UGFnZVR5cGU6Mw==",
    name: "Landing Page",
    hasPages: true,
    __typename: "PageType"
  },
  {
    id: "UGFnZVR5cGU6Mg==",
    name: "Marketing Page",
    hasPages: false,
    __typename: "PageType"
  }
];

export const pageType: PageTypeDetailsFragmentFragment = {
  id: "UGFnZVR5cGU6MQ==",
  __typename: "PageType",
  metadata: [
    {
      __typename: "MetadataItem",
      key: "integration.id",
      value: "100023123"
    }
  ],
  name: "Blog",
  hasPages: true,
  attributes: [
    {
      __typename: "Attribute" as "Attribute",
      id: "UHJvZHVjdEF0dHJpYnV0ZTo5",
      name: "Author",
      slug: "author",
      visibleInStorefront: true,
      filterableInDashboard: true,
      filterableInStorefront: true,
      type: AttributeTypeEnum.PAGE_TYPE,
      inputType: AttributeInputTypeEnum.DROPDOWN,
      unit: null
    },
    {
      __typename: "Attribute" as "Attribute",
      id: "UHJvZHVjdEF0dHJpYnV0ZToxMQ==",
      name: "Language",
      slug: "language",
      visibleInStorefront: true,
      filterableInDashboard: true,
      filterableInStorefront: true,
      type: AttributeTypeEnum.PAGE_TYPE,
      inputType: AttributeInputTypeEnum.DROPDOWN,
      unit: null
    },
    {
      __typename: "Attribute" as "Attribute",
      id: "UHJvZHVjdEF0dHJpYnV0ZTo5",
      name: "Author",
      slug: "author",
      visibleInStorefront: true,
      filterableInDashboard: true,
      filterableInStorefront: true,
      type: AttributeTypeEnum.PAGE_TYPE,
      inputType: AttributeInputTypeEnum.DROPDOWN,
      unit: null
    }
  ],
  privateMetadata: []
};
