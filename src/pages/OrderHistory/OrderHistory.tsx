import React, {useEffect} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {useAlert} from 'react-alert'

// import header element
import { PageHeader } from "../../components/common/PageHeader";

// import wishlist container
import { OrderHistory } from "../../containers/OrderHistory";

const OrderHistoryPage = ({isAuthenticated}) => {

  const history = useHistory();
  const alert = useAlert();
  
  useEffect(() => {
    if(!isAuthenticated) {
      alert.error("Unauthorized access");
      history.push('/');
    }
  }, [isAuthenticated])
  return (
    <section>
      <PageHeader>ORDER-HISTORY</PageHeader>
      <OrderHistory />
    </section>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.session.isAuthenticated,
})

export default connect(mapStateToProps)(OrderHistoryPage);
