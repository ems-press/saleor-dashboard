import { gql } from "@apollo/client";

export const updateProductTranslations = gql`
  mutation UpdateProductTranslations(
    $id: ID!
    $input: TranslationInput!
    $language: LanguageCodeEnum!
  ) {
    productTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      product {
        id
        name
        description
        seoDescription
        seoTitle
        translation(languageCode: $language) {
          id
          description
          language {
            code
            language
          }
          name
          seoDescription
          seoTitle
        }
      }
    }
  }
`;

export const updateProductVariantTranslations = gql`
  mutation UpdateProductVariantTranslations(
    $id: ID!
    $input: NameTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    productVariantTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      productVariant {
        id
        name
        translation(languageCode: $language) {
          id
          name
          language {
            code
            language
          }
        }
      }
    }
  }
`;

export const updateCategoryTranslations = gql`
  mutation UpdateCategoryTranslations(
    $id: ID!
    $input: TranslationInput!
    $language: LanguageCodeEnum!
  ) {
    categoryTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      category {
        id
        name
        description
        seoDescription
        seoTitle
        translation(languageCode: $language) {
          id
          description
          language {
            language
          }
          name
          seoDescription
          seoTitle
        }
      }
    }
  }
`;

export const updateCollectionTranslations = gql`
  mutation UpdateCollectionTranslations(
    $id: ID!
    $input: TranslationInput!
    $language: LanguageCodeEnum!
  ) {
    collectionTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      collection {
        id
        name
        description
        seoDescription
        seoTitle
        translation(languageCode: $language) {
          id
          description
          language {
            language
          }
          name
          seoDescription
          seoTitle
        }
      }
    }
  }
`;

export const updatePageTranslations = gql`
  mutation UpdatePageTranslations(
    $id: ID!
    $input: PageTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    pageTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      page {
        ...PageTranslation
      }
    }
  }
`;

export const updateVoucherTranslations = gql`
  mutation UpdateVoucherTranslations(
    $id: ID!
    $input: NameTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    voucherTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      voucher {
        id
        name
        translation(languageCode: $language) {
          id
          language {
            code
            language
          }
          name
        }
      }
    }
  }
`;

export const updateSaleTranslations = gql`
  mutation UpdateSaleTranslations(
    $id: ID!
    $input: NameTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    saleTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      sale {
        id
        name
        translation(languageCode: $language) {
          id
          language {
            code
            language
          }
          name
        }
      }
    }
  }
`;

export const updateAttributeTranslations = gql`
  mutation UpdateAttributeTranslations(
    $id: ID!
    $input: NameTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    attributeTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      attribute {
        id
        name
        translation(languageCode: $language) {
          id
          name
        }
      }
    }
  }
`;

export const updateAttributeValueTranslations = gql`
  mutation UpdateAttributeValueTranslations(
    $id: ID!
    $input: AttributeValueTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    attributeValueTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      attributeValue {
        id
        name
        richText
        translation(languageCode: $language) {
          id
          name
          richText
        }
      }
    }
  }
`;

export const updateShippingMethodTranslations = gql`
  mutation UpdateShippingMethodTranslations(
    $id: ID!
    $input: ShippingPriceTranslationInput!
    $language: LanguageCodeEnum!
  ) {
    shippingPriceTranslate(id: $id, input: $input, languageCode: $language) {
      errors {
        field
        message
      }
      shippingMethod {
        id
        name
        description
        translation(languageCode: $language) {
          id
          language {
            language
          }
          name
          description
        }
      }
    }
  }
`;
