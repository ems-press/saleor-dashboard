/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: MenuUpdate
// ====================================================

export interface MenuUpdate_menuUpdate_errors {
  __typename: "Error";
  field: string | null;
  message: string | null;
}

export interface MenuUpdate_menuUpdate {
  __typename: "MenuUpdate";
  errors: MenuUpdate_menuUpdate_errors[] | null;
}

export interface MenuUpdate {
  menuUpdate: MenuUpdate_menuUpdate | null;
}

export interface MenuUpdateVariables {
  id: string;
  name?: string | null;
}
