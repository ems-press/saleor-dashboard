import StatusChip from "@saleor/components/StatusChip";
import { OrderDetailsFragmentFragment } from "@saleor/graphql";
import { transformOrderStatus } from "@saleor/misc";
import React from "react";
import { useIntl } from "react-intl";

interface OrderStatusChipProps {
  order?: OrderDetailsFragmentFragment;
}

const OrderStatusChip: React.FC<OrderStatusChipProps> = ({ order }) => {
  const intl = useIntl();

  if (!order) {
    return null;
  }

  const { localized, status } = transformOrderStatus(order.status, intl);

  return <StatusChip size="md" status={status} label={localized} />;
};

export default OrderStatusChip;
