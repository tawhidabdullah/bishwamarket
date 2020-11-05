//@ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

// import  redux operations
import { cartOperations } from "../../../state/ducks/cart";
import { globalOperations } from "../../../state/ducks/globalState";
import { productOperations } from "../../../state/ducks/Item";
// import { wishListOperations } from "../../../state/ducks/wishList";

// caching utilities
// import { checkIfItemExistsInCartItemById } from "../../../utils";

// hooks for fetching cart info
import { useHandleFetch } from "../../../hooks";

const ProductsByCategory = ({
  toggleQuickviewDrawer,
  addToCart,
  removeFromCart,
  addProduct,
  customStyles,
  item,
  session,
  // addToWishlist,
}) => {
  const alert = useAlert();
  // destructuring properties of product
  const { _id, name, cover, url, pricing, price, inStock } = item;

  // state for selecting product variation
  // const [selectedVariation, setSelectedVariation] = useState({});
  const [selectedVariationId, setSelectedVariationId] = useState("");

  // this hook send POST request to server to add item to cart
  const [addToCartState, handleAddtoCartFetch] = useHandleFetch(
    [],
    "addtoCart"
  );

  // this hook send POST request to server to add item to wishlist
  const [addWishlistState, handleAddWishlistFetch] = useHandleFetch(
    [],
    "addWishlist"
  );

  // const handleSelectVariation = (value) => setSelectedVariationId(value.value);

  // add to cart handler
  const handleAddToCart = async () => {
    if (!inStock) {
      alert.error("Out of stock");
      return;
    }
    const cartItem = {
      product: _id,
      variation: selectedVariationId
        ? selectedVariationId
        : pricing && pricing[0] && pricing[0]._id,
      name,
      quantity: 1,
      cover,
      price,
      url,
    };

    addToCart && addToCart(cartItem);

    
    alert.success("Product added to the cart");

    if (session.isAuthenticated) {
      const addToCartRes = await handleAddtoCartFetch({
        body: {
          items: [cartItem],
        },
      });

      if (addToCartRes && Object.keys(addToCartRes).length === 0) {
        removeFromCart(cartItem);
        alert.error("Something went wrong!");
      }
    }
    // if (checkIfItemExistsInCartItemById(cartItems, productToAdd)) {

    // }
  };

  const handleAddItemToWishlist = async (productId) => {
    if (session.isAuthenticated) {
      const res = await handleAddWishlistFetch({
        body: {},
      });
      console.log("wishlist res", res);
      alert.success("Item added to wishlist");
    } else {
      alert.error("Please login to add item to wishlist");
    }
  };

  const productDetail=()=>{
   
     addProduct(item);
     toggleQuickviewDrawer();
  }
  return (
    <ProductBox customStyles={customStyles}>
      <ProductImgbox>
        <ProductFront>
          <img src={item.cover} className="img-fluid " alt="product" />
        </ProductFront>
        <ProductBack>
          <img src={item.cover} className="img-fluid " alt="product" />
        </ProductBack>
      </ProductImgbox>
      <ProductIconContainer customStyles={customStyles}>
        <ProductIcon
          title="Add Item to Cart"
          onClick={() => handleAddToCart()}
          customStyles={customStyles}
        >
          <i className="fa fa-shopping-bag"></i>
        </ProductIcon>
        <ProductIcon
          title="Add Item to wishlist"
          onClick={() => handleAddItemToWishlist(_id)}
          customStyles={customStyles}
        >
          <i className="fa fa-heart-o"></i>
        </ProductIcon>

        <ProductIcon
          onClick={productDetail}
          customStyles={customStyles}
        >
          <i className="fa fa-search"></i>
        </ProductIcon>

        <ProductIcon customStyles={customStyles}>
          <i className="fa fa-exchange"></i>
        </ProductIcon>
      </ProductIconContainer>
      <ProductDetail customStyles={customStyles}>
        <DetailLeft customStyles={customStyles}>
          {/* <Rating>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
          </Rating> */}
          <PriceTitel>{item && item.name ? item.name : " "}</PriceTitel>
        </DetailLeft>
        <DetailRight>
          <CheckPrice>
            $ {item && item.regularPrice ? item.regularPrice : " "}
          </CheckPrice>
          <Price>${item && item.price ? item.price : ""}</Price>
        </DetailRight>
      </ProductDetail>
      <NewLevel customStyles={customStyles}>
        <div>new</div>
      </NewLevel>
      <OnSale customStyles={customStyles}>on sale</OnSale>
    </ProductBox>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  wishList: state.wishList,
  session: state.session,
});

const mapDispatchToProps = {
  toggleCartDrawer: globalOperations.toggleCartDrawer,
  toggleQuickviewDrawer: globalOperations.toggleQuickviewDrawer,
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
  addProduct: productOperations.addProduct,

  // addToWishlist: wishListOperations.addToWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);

const ProductIconContainer = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.customStyles
      ? props.customStyles.containerDirection
        ? props.customStyles.containerDirection
        : "column "
      : "column"};
  visibility: hidden;
  position: absolute;
  top: ${(props) =>
    props.customStyles
      ? props.customStyles.containertop
        ? props.customStyles.containertop
        : "22%"
      : "22%"};
  right: ${(props) =>
    props.customStyles
      ? props.customStyles.containerright
        ? props.customStyles.containerright
        : "0%"
      : "0%"};
  transition: all 0.5s ease;
  transform: ${(props) =>
    props.customStyles
      ? props.customStyles.containerTransform
        ? props.customStyles.containerTransform
        : "translateX(100%)"
      : "translateX(100%)"};

  z-index: 20;

  @media only screen and (max-width: 730px) and (min-width: 630px) {
    top: ${(props) =>
      props.customStyles
        ? props.customStyles.containertop
          ? props.customStyles.containertop
          : "12%"
        : "12%"};
    right: ${(props) =>
      props.customStyles
        ? props.customStyles.containerright
          ? "0%"
          : "0%"
        : "0%"};
  }
`;

const ProductBack = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  transition: all 0.5s ease;

  transform: translateX(-100%);
`;

const ProductDetail = styled.div`
  display: flex;
  justify-content: ${(props) =>
    props.customStyles
      ? props.customStyles.containerDirection
        ? "start"
        : "space-around"
      : "space-around"};
  flex-direction: ${(props) =>
    props.customStyles
      ? props.customStyles.containerDirection
        ? "column"
        : "row"
      : "row"};

  width: 220px;

  flex-wrap: wrap;
  padding-bottom: 10px;
  padding-top: 10px;
  padding-left: 10px;
  background-color: ${(props) =>
    props.customStyles
      ? props.customStyles.productBackgroundColor
        ? props.customStyles.productBackgroundColor
        : "#f2f2f2"
      : "#f2f2f2"};

  padding-left: ${(props) =>
    props.customStyles
      ? props.customStyles.containerright
        ? "10px"
        : "0px"
      : "0px"};

  @media only screen and (max-width: 580px) {
    flex-direction: column;
    justify-content: start;
  }

  @media only screen and (max-width: 730px) and (min-width: 600px) {
    width: ${(props) =>
      props.customStyles.productBackgroundColor ? "100%" : "170px"};
  }

  @media only screen and (max-width: 580px) and (min-width: 401px) {
    width: ${(props) =>
      props.customStyles.productBackgroundColor ? "100%" : "180px"};
  }
  @media only screen and (max-width: 400px) and (min-width: 350px) {
    width: ${(props) =>
      props.customStyles.productBackgroundColor ? "100%" : "170px"};
  }
  @media only screen and (max-width: 350px) {
    width: ${(props) =>
      props.customStyles.productBackgroundColor ? "100%" : "150px"};
  }
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px;

  position: relative;
  overflow: hidden;
  background-color: #fff;
  width: 100%;

  &:hover ${ProductIconContainer} {
    transform: translateX(0%);
    visibility: visible;
  }

  &:hover ${ProductBack} {
    transform: translateX(0%);
  }

  &:hover ${ProductDetail} {
    visibility: ${(props) =>
      props.customStyles
        ? props.customStyles.ProductDetailVisibility
          ? "hidden"
          : "visible"
        : "visible"};
  }
`;

const ProductIcon = styled.span`
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 15px;
  color: #777;
  cursor: pointer;
  @media only screen and (max-width: 630px) and (min-width: 500px) {
    padding: 10px;
  }

  @media only screen and (max-width: 500px) and (min-width: 400px) {
    padding: ${(props) =>
      props.customStyles
        ? props.customStyles.page
          ? "15px"
          : "10px"
        : "10px"};
  }
  @media only screen and (max-width: 400px) {
    padding: ${(props) =>
      props.customStyles ? (props.customStyles.page ? "15px" : "6px") : "6px"};
  }
`;

const ProductImgbox = styled.div`
  position: relative;
  overflow: hidden;
  background-color: #fff;

  img {
    height: 300px;
    width: 220px;
    object-fit: fill;

    @media only screen and (max-width: 730px) and (min-width: 600px) {
      height: 260px;
      width: 170px;
    }

    @media only screen and (max-width: 580px) and (min-width: 401px) {
      width: 180px;
      height: 260px;
    }
    @media only screen and (max-width: 400px) and (min-width: 350px) {
      width: 170px;
      height: 210px;
    }
    @media only screen and (max-width: 350px) {
      width: 150px;
      height: 210px;
    }
  }
`;
const ProductFront = styled.div`
  left: 0;
  top: 0;

  transition: all 0.5s ease;
`;

const OnSale = styled.div`
  background-color: #ffa800;
  color: #fff;
  text-transform: uppercase;
  position: absolute;
  top: 0;
  right: 0;
  padding: 0 6px;
  font-size: calc(10px + (12 - 10) * ((100vw - 320px) / (1920 - 320)));
  visibility: ${(props) =>
    props.customStyles ? props.customStyles.Levelvisibility : ""};
`;

const NewLevel = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px;
  font-weight: 600;
  letter-spacing: 1px;
  visibility: ${(props) =>
    props.customStyles ? props.customStyles.Levelvisibility : ""};

  &::before {
    width: 0;
    height: 0;
    border-top: 60px solid #ff6000;
    border-right: 60px solid transparent;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
  }

  & div {
    text-transform: uppercase;

    transform: rotate(-45deg);

    width: fit-content;
    font-size: calc(10px + (14 - 10) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 3px;
    color: #fff;
  }
`;

const DetailLeft = styled.div`
  width: ${(props) =>
    props.customStyles
      ? props.customStyles.containertop
        ? "100%"
        : "60%"
      : "60%"};
  @media only screen and (max-width: 580px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    width: 100%;
  }
`;
const DetailRight = styled.div`
  width: ${(props) =>
    props.customStyles
      ? props.customStyles.containertop
        ? "100%"
        : "40%"
      : "40%"};
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));

  @media only screen and (max-width: 580px) {
    display: flex;
    justify-content: start;
    width: 100%;
  }
`;
const Rating = styled.div`
  & i {
    color: #ffa800;
    font-size: calc(11px + (14 - 11) * ((100vw - 320px) / (1920 - 320)));
  }
`;

const CheckPrice = styled.div`
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
  @media only screen and (max-width: 580px) {
    margin-right: 10px;
  }
`;

const Price = styled.div`
  color: #ffa800;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 700;
`;

const PriceTitel = styled.div`
  text-transform: capitalize;
  color: #777;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
`;
