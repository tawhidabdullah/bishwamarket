// import hooks
import { useHandleFetch } from '../../hooks';

// TODO: 
// * add all the outgoing state types

// * NOTES: 
// For the checkout page to work properly it's nee some state/value first => 
// THEY ARE:
// * cartItems,totalPrice,

const CheckoutPage = ({children}) => {
    // TODO: for checkDetails
    // * cartItems, totalPrice, deliveryInfo, deliveryCharge

    // TODO: for checkout form
    // * handleCheckout, handle cityList and country list, handle delivery area/charge, auto-fill forms with with persisted customer data. 
    
    // hooks for sending checkout data
    const [checkoutState, handleCheckoutStateFetch] = useHandleFetch({},"checkout");

    const getConsumerProps = () => {
        return {
            checkoutState,
            checkout: handleCheckoutStateFetch
        }
    }; 

    return children(getConsumerProps());
}; 

export default CheckoutPage;    