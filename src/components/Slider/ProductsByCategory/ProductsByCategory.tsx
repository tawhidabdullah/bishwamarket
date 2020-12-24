//@ts-nocheck
import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

// import  redux operations
import { cartOperations } from "../../../state/ducks/cart";
import { globalOperations } from "../../../state/ducks/globalState";
import { productOperations } from "../../../state/ducks/Item";
// import { wishListOperations } from "../../../state/ducks/wishList";

// caching utilities
// import { checkIfItemExistsInCartItemById } from "../../../utils";

// hooks for fetching cart info
import { useHandleFetch } from "../../../hooks";

// import redux ops
import Select from "react-select";

// import config for image url
import config from "../../../config.json";

const ProductsByCategory = ({
  toggleQuickviewDrawer,
  addToCart,
  removeFromCart,
  addProduct,
  customStyles,
  product,
  session,
  // addToWishlist,
  item, //actually product
  isAuthenticated,
  customStyle,
  cartItems,
}) => {
  const alert = useAlert();

  const history = useHistory();
  // destructuring properties of product
  const {
    _id,
    name,
    cover,
    url,
    pricing,
    price,
    inStock,
    regularPrice,
    id,
    offerPrice,
    availableStock,
    offer,
    offerTaka,
    attribute,
  } = item;

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
      price: modifiedPrice || price,
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
  };

  const handleAddItemToWishlist = async (productId) => {
    if (session.isAuthenticated) {
      const res = await handleAddWishlistFetch({
        body: {},
      });

      alert.success("Item added to wishlist");
    } else {
      alert.error("Please login to add item to wishlist");
    }
  };

  const productDetail = () => {
    // addProduct(item);
    // toggleQuickviewDrawer();
    history.push(item.url);
  };

  const dispatch = useDispatch();
  const handleAddToDrawer = () => {
    addProduct(product);
    // toggleQuickviewDrawer();
    history.push(product.url);
  };

  const [selectedVariation, setSelectedVariation] = useState({});
  const [modifiedPrice, setModifiedPrice] = useState("");
  // this hook add to item to cart

  const addToDrawer = (url) => {
    dispatch(productOperations.addProduct(product));
    // dispatch(globalOperations.toggleQuickviewDrawer());
    history.push(url);
  };

  const [AttributeId, setAttributeId] = useState("");

  const determineItemStyle = (i) => {
    let itemStyle = "variation";
    const isItemSelected = AttributeId === i;
    if (isItemSelected) {
      itemStyle += " varActive";
    }
    return itemStyle;
  };

  const dot = (color = "#111b3d") => ({
    alignItems: "center",
    display: "flex",

    ":before": {
      backgroundColor: color,
      borderRadius: 6,
      content: '" "',
      display: "block",
      marginRight: 8,
      // height: 10,
      // width: 10,
    },
  });

  const colourStyles = {
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: "0 !important",
      position: "absolute",
      top: "5%",
      right: "3%",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      border: "1px solid rgb(241, 241, 241)",
      height: "25px",
      minHeight: "25px",
      borderRadius: "6px",
      fontSize: "12px",
    }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "#fefe0071;";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? color
          : isFocused
          ? "rgb(247, 247, 247)"
          : "rgb(247, 247, 247)",
        color: isDisabled
          ? "#333"
          : isSelected
          ? "#333"
          : isFocused
          ? "#303a3f"
          : "#303a3f",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled && (isSelected ? color : "#303a3f"),
        },
      };
    },
    input: (styles) => ({
      ...styles,
      height: "15px",
      minHeight: "15px",
      marginBottom: "3rem",
      marginLeft: "-3px",
      fontSize: "12px",
      color: "#303a3f",
      ...dot(),
    }),
    placeholder: (styles) => ({
      ...styles,
      height: "25px",
      top: "23%",
      minHeight: "25px",
      fontSize: "12px",
      color: "#303a3f",
      ...dot(),
    }),
    singleValue: (styles, { data }) => ({
      ...styles,
      //   marginTop: "-15px",
      marginLeft: "-2px",
      height: "25px",
      minHeight: "25px",
      fontSize: "12px",
      color: "#303a3f",
      ...dot(data.color),
    }),
    indicatorSeparator: (styles, { data }) => ({
      ...styles,
      //   marginTop: "-15px",
      backgroundColor: "transparent !important",
      //   ...dot(data.color),
    }),
  };

  const convertAttributeValuesToStringValue = (attribute) => {
    const value = [];

    let attributeValues = attribute && Object.values(attribute);
    if (attributeValues && attributeValues.length > 0) {
      attributeValues.forEach((attributeValue) => {
        // @ts-ignore
        value.push(attributeValue);
      });

      return value.join(",");
    }
  };

  const getPricingOptions = (pricing) => {
    if (pricing && pricing.length > 0) {
      const pricingOptions = [];

      pricing.forEach((pricingItem) => {
        if (
          pricingItem.attribute &&
          Object.values(pricingItem.attribute).length > 0 &&
          pricingItem._id
        ) {
          let pricingOption = {
            value: pricingItem._id,
            label: `${
              convertAttributeValuesToStringValue(pricingItem.attribute) || ""
            }`,
          };
          // @ts-ignore
          pricingOptions.push(pricingOption);
        }
      });

      return pricingOptions;
    } else return false;
  };

  const pricingOptions = getPricingOptions(pricing) || [];

  const handleSelectVariation = (value) => {
    setSelectedVariationId(value);
  };

  useEffect(() => {
    const getPriceByVariationId = (id) => {
      const priceItem = pricing.find((pricingItem) => pricingItem._id === id);

      if (priceItem && priceItem.price.regular) {
        return priceItem.price.offer && parseInt(priceItem.price.offer)
          ? priceItem.price.offer
          : priceItem.price.regular;
      } else return false;
    };

    if (selectedVariationId) {
      const price = getPriceByVariationId(selectedVariationId);
      setModifiedPrice(price);
    }
  }, [selectedVariationId]);

  const getCartItemQuantity = (givenCartItem) => {
    const item = cartItems.find(
      (cartItem) =>
        cartItem.product === givenCartItem.product &&
        cartItem.variation === givenCartItem.variation
    );

    return item ? item.quantity : 1;
  };

  const [quantity, setQuantity] = useState(
    getCartItemQuantity({
      product: id,
      variation: selectedVariationId
        ? selectedVariationId
        : pricing && pricing[0] && pricing[0]._id && pricing[0]._id,
    })
  );

  const getVariationbySelectedId = (pricing, variationId) => {
    if (variationId && pricing.length > 0) {
      return pricing.find((variation) => variation._id === variationId);
    }
    return {};
  };

  const [windowWidth, setWindowWidth] = useState(0);

  const getWindowWidth = () => {
    return Math.max(
      document.documentElement.clientWidth,
      window.innerWidth || 0
    );
  };

  useLayoutEffect(() => {
    setWindowWidth(getWindowWidth());
  }, []);

  const onResize = () => {
    window.requestAnimationFrame(() => {
      setWindowWidth(getWindowWidth());
    });
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", onResize);

    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <ProductBox customStyles={customStyles}>
      <ProductImgbox>
        <ProductFront>
          <img src={cover} className="img-fluid " alt="product" />
        </ProductFront>
        <ProductBack>
          <img src={cover} className="img-fluid " alt="product" />
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
        {/* <ProductIcon
          title="Add Item to wishlist"
          onClick={() => handleAddItemToWishlist(_id)}
          customStyles={customStyles}
        >
          <i className="fa fa-heart-o"></i>
        </ProductIcon> */}

        <ProductIcon onClick={productDetail} customStyles={customStyles}>
          <i className="fa fa-eye"></i>
        </ProductIcon>

        {/* <ProductIcon customStyles={customStyles}>
          <i className="fa fa-exchange"></i>
        </ProductIcon> */}
      </ProductIconContainer>
      <ProductDetail customStyles={customStyles}>
        <DetailLeft customStyles={customStyles}>
          <PriceTitel>{name || " "}</PriceTitel>
        </DetailLeft>
        <DetailRight>
          {/* <CheckPrice>
            &#2547;&nbsp; {item && item.regularPrice ? item.regularPrice : " "}
          </CheckPrice> */}
          <Price>৳ {modifiedPrice || price}</Price>
        </DetailRight>
      </ProductDetail>
      {/* <NewLevel customStyles={customStyles}>
        <div>new</div>
      </NewLevel> */}
      {offerTaka !== 0 && <OnSale customStyles={customStyles}>on sale</OnSale>}
      {pricingOptions &&
        pricingOptions.length < 2 &&
        pricingOptions.length > 0 && (
          <>
            <SingleAttribute className="product-bottom-select-one">
              <span>
                {convertAttributeValuesToStringValue(
                  pricing && pricing[0] && pricing[0].attribute
                )}
              </span>
            </SingleAttribute>
          </>
        )}

      {pricingOptions && pricingOptions.length > 1 && (
        <>
          {convertAttributeValuesToStringValue(
            pricing && pricing[0] && pricing[0].attribute
          ) && (
            <div
              style={{
                minWidth: windowWidth > 450 ? "50%" : "60%",
                width: windowWidth > 450 ? "85%" : "85%",
                marginBottom: "15px",
              }}
            >
              {/* <Select
                isSearchable={false}
                styles={colourStyles}
                onChange={(value) => handleSelectVariation(value)}
                defaultValue={{
                  value: pricing[0]._id,
                  label: convertAttributeValuesToStringValue(
                    pricing && pricing[0] && pricing[0].attribute
                  ),
                }}
                // value={selectedCountryValue}
                // @ts-ignore
                options={pricingOptions.map((country) => ({
                  value: country["value"],
                  label: country["label"],
                }))}
              /> */}
              <MultipleAttribute>
                {pricingOptions.map((variation, idx) => {
                  return (
                    <span
                      className={determineItemStyle(idx)}
                      id={`id-${idx}`}
                      key={idx}
                      onClick={() => {
                        setAttributeId(idx);
                        handleSelectVariation(variation["value"]);
                      }}
                    >
                      {variation.label}
                    </span>
                  );
                })}
              </MultipleAttribute>
            </div>
          )}
        </>
      )}
    </ProductBox>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  wishList: state.wishList,
  session: state.session,
  openQuicviewDrawer: state.globalState.openQuickviewDrawer,
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  toggleCartDrawer: globalOperations.toggleCartDrawer,
  toggleQuickviewDrawer: globalOperations.toggleQuickviewDrawer,
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
  addProduct: productOperations.addProduct,
  changeQuantity: cartOperations.changeQuantity,

  // addToWishlist: wishListOperations.addToWishList,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsByCategory);

const MultipleAttribute = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .variation {
    background: #fff;
    cursor: pointer;
    padding: 5px;
    margin-right: 1rem;
  }
  .varActive {
    /* background-color: red; */
    border: 2px solid grey;
  }
`;

const SingleAttribute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-width: 50%;
  // margin-bottom: 15px;
  background-color: rgb(255, 255, 255);
  border: 1px solid hsl(0, 0%, 90%);
  text-align: center;
  min-height: 25px;
  height: 25px;
  border-radius: 5px;
  padding: 1px 3px;
  margin: 10px auto;

  @media screen and (max-width: 450px) {
    width: 100%;
    min-width: 50%;
  }

  span {
    font-size: 12px;
  }
`;

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

  width: 100%;

  flex-wrap: wrap;
  padding: 10px 0 10px 10px;
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

  @media screen and (max-width: 580px) {
    width: 100%;
    background-color: #fff;
    padding: 20px;
  }
`;

const ProductBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 10px 0px;
  max-width: 230px;

  position: relative;
  overflow: hidden;
  /* background-color: #fff; */
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

  @media screen and (max-width: 578px) {
    max-width: none;
    margin: unset;
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
    height: 316px;
    /* width: 220px; */
    object-fit: cover;

    @media only screen and (max-width: 730px) and (min-width: 600px) {
      height: 260px;
      width: 170px;
    }

    @media only screen and (max-width: 580px) and (min-width: 401px) {
      width: 150px;
      height: 200px;
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
  background-color: #5c2c90;
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
    border-top: 60px solid #5c2c90;
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

  @media only screen and (max-width: 578px) {
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

  @media screen and (max-width: 580px) {
    display: flex;
    justify-content: start;
    width: 100%;
  }
`;
const Rating = styled.div`
  & i {
    color: #5c2c90;
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
  color: #5c2c90;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));
  font-weight: 700;
`;

const PriceTitel = styled.div`
  text-transform: capitalize;
  color: #777;
  font-size: calc(12px + (14 - 12) * ((100vw - 320px) / (1920 - 320)));

  @media screen and (max-width: 580px) {
    font-size: 16px;
    font-weight: 500;
  }
`;
