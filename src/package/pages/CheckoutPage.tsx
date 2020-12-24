import { useState, useEffect } from "react";
// import hooks
import { useHandleFetch } from "../../hooks";

// TODO:
// * add all the outgoing state types

// * NOTES:
// For the checkout page to work properly it's nee some state/value first =>
// THEY ARE:
// * cartItems,totalPrice,

const CheckoutPage = ({ children }) => {
  // TODO: for checkDetails
  // * cartItems, totalPrice, deliveryInfo, deliveryCharge

  // TODO: for checkout form
  // * handleCheckout, handle cityList and country list, handle delivery area/charge, auto-fill forms with with persisted customer data.

  // * states
  const [cityList, setCityList] = useState([]);

  // hooks for sending checkout data
  const [checkoutState, handleCheckoutStateFetch] = useHandleFetch(
    {},
    "checkout"
  );

  // hooks for getting delivery city list
  const [, handleCityListFetch] = useHandleFetch([], "cityList");

  console.log({ cityList });

  // this effect triggers cityList fetching whenever this component mounts
  useEffect(() => {
    const fetchCityList = async () => {
      const res: any = await handleCityListFetch({
        urlOptions: {
          placeHolders: {
            country: "Bangladesh",
          },
        },
      });
      setCityList(res);
    };

    fetchCityList();
  }, []);

  const getConsumerProps = () => {
    return {
      checkoutState,
      checkout: handleCheckoutStateFetch,
      cityList,
    };
  };

  return children(getConsumerProps());
};

export default CheckoutPage;

/*



checkout page state => 
    1. on load
    2. update
    3. success/redirect
    4. error


*/
