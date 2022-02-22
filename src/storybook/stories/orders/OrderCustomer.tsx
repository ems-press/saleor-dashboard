import { storiesOf } from "@storybook/react";
import React from "react";

import OrderCustomerComponent, {
  OrderCustomerProps
} from "../../../orders/components/OrderCustomer";
import { clients, order as orderFixture } from "../../../orders/fixtures";
import Decorator from "../../Decorator";
import { ComponentWithMockContext } from "../customers/ComponentWithMockContext";

const order = orderFixture("");

const props: Omit<OrderCustomerProps, "classes"> = {
  canEditAddresses: false,
  canEditCustomer: true,
  fetchUsers: () => undefined,
  onBillingAddressEdit: undefined,
  onCustomerEdit: undefined,
  onProfileView: () => undefined,
  onShippingAddressEdit: undefined,
  order,
  users: clients
};

const OrderCustomer = props => {
  const customPermissions = props?.customPermissions;

  return (
    <ComponentWithMockContext customPermissions={customPermissions}>
      <OrderCustomerComponent {...props} />
    </ComponentWithMockContext>
  );
};

storiesOf("Orders / OrderCustomer", module)
  .addDecorator(Decorator)
  .add("default", () => <OrderCustomer {...props} />)
  .add("loading", () => <OrderCustomer {...props} order={undefined} />)
  .add("with different addresses", () => (
    <OrderCustomer
      {...props}
      order={{
        ...order,
        shippingAddress: { ...order.shippingAddress, id: "a2" }
      }}
    />
  ))
  .add("editable", () => (
    <OrderCustomer {...props} canEditAddresses={true} canEditCustomer={true} />
  ))
  .add("no user permissions", () => (
    <OrderCustomer {...props} customPermissions={[]} />
  ));
