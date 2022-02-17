import { gql } from "@apollo/client";

export const attributeErrorFragment = gql`
  fragment AttributeError on AttributeError {
    code
    field
  }
`;

export const productErrorFragment = gql`
  fragment ProductError on ProductError {
    code
    field
  }
`;

export const productErrorWithAttributesFragment = gql`
  fragment ProductErrorWithAttributes on ProductError {
    ...ProductError
    attributes
  }
`;

export const productChannelListingErrorFragment = gql`
  fragment ProductChannelListingError on ProductChannelListingError {
    code
    field
    message
    channels
  }
`;

export const collectionChannelListingErrorFragment = gql`
  fragment CollectionChannelListingError on CollectionChannelListingError {
    code
    field
    message
    channels
  }
`;

export const accountErrorFragment = gql`
  fragment AccountError on AccountError {
    code
    field
    addressType
  }
`;

export const discountErrorFragment = gql`
  fragment DiscountError on DiscountError {
    code
    field
    channels
  }
`;

export const menuErrorFragment = gql`
  fragment MenuError on MenuError {
    code
    field
  }
`;

export const orderErrorFragment = gql`
  fragment OrderError on OrderError {
    code
    field
    addressType
  }
`;

export const orderSettingsErrorFragment = gql`
  fragment OrderSettingsError on OrderSettingsError {
    code
    field
  }
`;

export const pageErrorFragment = gql`
  fragment PageError on PageError {
    code
    field
  }
`;

export const pageErrorWithAttributesFragment = gql`
  fragment PageErrorWithAttributes on PageError {
    ...PageError
    attributes
  }
`;

export const permissionGroupErrorFragment = gql`
  fragment PermissionGroupError on PermissionGroupError {
    code
    field
  }
`;

export const bulkProductErrorFragment = gql`
  fragment BulkProductError on BulkProductError {
    field
    code
    index
    channels
  }
`;
export const bulkStockErrorFragment = gql`
  fragment BulkStockError on BulkStockError {
    code
    field
    index
  }
`;
export const stockErrorFragment = gql`
  fragment StockError on StockError {
    code
    field
  }
`;

export const shippingChannelsErrorFragment = gql`
  fragment ShippingChannelsError on ShippingError {
    code
    field
    channels
  }
`;

export const shippingErrorFragment = gql`
  fragment ShippingError on ShippingError {
    code
    field
  }
`;

export const shopErrorFragment = gql`
  fragment ShopError on ShopError {
    code
    field
  }
`;

export const staffErrorFragment = gql`
  fragment StaffError on StaffError {
    code
    field
  }
`;

export const warehouseErrorFragment = gql`
  fragment WarehouseError on WarehouseError {
    code
    field
  }
`;

export const webhookErrorFragment = gql`
  fragment WebhookError on WebhookError {
    code
    field
  }
`;

export const invoiceErrorFragment = gql`
  fragment InvoiceError on InvoiceError {
    code
    field
  }
`;

export const appErrorFragment = gql`
  fragment AppError on AppError {
    field
    message
    code
    permissions
  }
`;

export const exportErrorFragment = gql`
  fragment ExportError on ExportError {
    code
    field
  }
`;

export const pluginErrorFragment = gql`
  fragment PluginError on PluginError {
    code
    field
  }
`;

export const metadataErrorFragment = gql`
  fragment MetadataError on MetadataError {
    code
    field
  }
`;

export const collectionsErrorFragment = gql`
  fragment CollectionError on CollectionError {
    code
    field
  }
`;

export const uploadErrorFragment = gql`
  fragment UploadError on UploadError {
    code
    field
  }
`;

export const giftCardErrorFragment = gql`
  fragment GiftCardError on GiftCardError {
    code
    field
  }
`;

export const giftCardSettingsErrorFragment = gql`
  fragment GiftCardSettingsError on GiftCardSettingsError {
    code
    field
  }
`;
