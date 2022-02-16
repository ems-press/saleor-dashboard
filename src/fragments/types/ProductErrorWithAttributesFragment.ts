/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ProductErrorCode } from "@saleor/graphql";

// ====================================================
// GraphQL fragment: ProductErrorWithAttributesFragment
// ====================================================

export interface ProductErrorWithAttributesFragment {
  __typename: "ProductError";
  code: ProductErrorCode;
  field: string | null;
  attributes: string[] | null;
}
