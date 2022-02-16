import { gql } from "@apollo/client";

export const updateTaxSettings = gql`
  mutation UpdateTaxSettings($input: ShopSettingsInput!) {
    shopSettingsUpdate(input: $input) {
      errors {
        field
        message
      }
      shop {
        ...ShopTaxesFragment
      }
    }
  }
`;

export const fetchTaxes = gql`
  mutation FetchTaxes {
    shopFetchTaxRates {
      errors {
        field
        message
      }
      shop {
        countries {
          ...CountryFragment
        }
      }
    }
  }
`;
