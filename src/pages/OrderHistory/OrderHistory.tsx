import React from "react";
import styled from "styled-components";

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import wishlist container
import { OrderHistory } from "../../containers/OrderHistory";

const OrderHistoryPage = () => {
  return (
    <section>
      <PageHeader>ORDER-HISTORY</PageHeader>
      <OrderHistory />
    </section>
  );
};

export default OrderHistoryPage;
