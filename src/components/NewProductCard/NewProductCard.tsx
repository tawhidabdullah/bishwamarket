// import redux ops
import { globalOperations } from "../../state/ducks/globalState";
import { productOperations } from "../../state/ducks/Item";
import React, { useState, useEffect, useLayoutEffect } from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";
import Select from "react-select";
import { cartOperations } from "../../state/ducks/cart";

// import config for image url
import config from "../../config.json";

// import hooks
import { useHandleFetch } from "../../hooks";
// import image from "../../../assets/media/1.jpg";

const NewProductCard = ({
  product,
  addProduct,
  toggleQuickviewDrawer,
  addToCart,
  isAuthenticated,
  removeFromCart,
  customStyle,
  cartItems,
}) => {
  const {
    name,
    regularPrice,
    cover,
    url,
    id,
    offerPrice,
    availableStock,
    pricing,
    price,
    offer,
    inStock,
    attribute,
  } = product;
  const history = useHistory();
  const alert = useAlert();
  const dispatch = useDispatch();
  const handleAddToDrawer = () => {
    addProduct(product);
    // toggleQuickviewDrawer();
    history.push(product.url);
  };

  const [selectedVariation, setSelectedVariation] = useState({});
  const [modifiedPrice, setModifiedPrice] = useState("");
  const [selectedVariationId, setSelectedVariationId] = useState("");
  // this hook add to item to cart
  const [addToCartState, handleAddtoCartPost] = useHandleFetch({}, "addToCart");

  const handleAddToCart = async (item) => {
    if (!item.inStock) {
      alert.error(`${item.name} is out of stock`);
      return;
    }

    const cartItem = {
      product: item._id,
      variation: item.defaultVariation,
      name: item.name,
      quantity: 1,
      cover: item.image,
      price: item.price,
      url: item.url,
    };

    addToCart(cartItem);
    alert.success("Product added to cart");

    if (isAuthenticated) {
      const addToCartRes: any = await handleAddtoCartPost({
        body: {
          items: [cartItem],
        },
      });

      if (addToCartRes && Object.keys(addToCartRes).length === 0) {
        removeFromCart(cartItem);
        alert.error("Something went wrong");
      }
    }
  };

  const addToDrawer = (url) => {
    dispatch(productOperations.addProduct(product));
    // dispatch(globalOperations.toggleQuickviewDrawer());
    history.push(url);
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
    setSelectedVariationId(value.value);
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
    <NewProductCardContainer>
      <ImageContainer onClick={handleAddToDrawer}>
        <img className="img-fluid" src={cover} alt="" />
      </ImageContainer>
      <CardInfoContainer>
        <h3 onClick={handleAddToDrawer}>{name}</h3>
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
                <Select
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
                />
              </div>
            )}
          </>
        )}
        <p>৳{modifiedPrice || price}</p>
        {parseFloat(offer) > 0 && <p>Offer: {offer}</p>}
      </CardInfoContainer>
    </NewProductCardContainer>
  );
};

const mapDispatchToProps = {
  toggleQuickviewDrawer: globalOperations.toggleQuickviewDrawer,
  addProduct: productOperations.addProduct,
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
  changeQuantity: cartOperations.changeQuantity,
};

const mapStateToProps = (state) => ({
  openQuicviewDrawer: state.globalState.openQuickviewDrawer,
  isAuthenticated: state.session.isAuthenticated,
  cartItems: state.cart,
  wishList: state.wishList,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProductCard);

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

const NewProductCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #f2f2f2;
  padding: 10px 5px 10px 0;
  background-color: #f2f2f2;
`;

const CardInfoContainer = styled.div`
  flex-grow: 1;
  font-size: 13px;
  padding-left: 25px;
  font-family: PT Sans, sans-serif;

  h3 {
    /* font-weight: 600; */
    font-size: 14px;
    cursor: pointer;
  }

  & p {
    margin-bottom: 0;
    margin-top: 14px;
    font-weight: 700;
    font-size: 15px;
    color: #744ba0;
  }

  @media screen and (max-width: 768px) {
    flex-grow: unset;
    /* font-size: 11px; */
    padding-left: 15px;

    & h3,
    p {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const ImageContainer = styled.div`
  border: 1px solid #ddd;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  width: 45%;
  /* height: fit-content; */
  height: 100%;
  margin: 0 auto;
  align-self: flex-start;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    width: 70%;
  }

  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;
