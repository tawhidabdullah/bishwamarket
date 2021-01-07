import React, { useEffect, useState, useLayoutEffect } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { withAlert } from "react-alert";
import { cartOperations } from "../../state/ducks/cart";
import Select from "react-select";

import {
  numberWithCommas,
  checkIfItemExistsInCartItemById,
  getCartKeyFromCartItems,
  checkIfTheWishListExistsInArrayById,
} from "../../utils";
import { useHandleFetch } from "../../hooks";

// import states
import { sessionOperations } from "../../state/ducks/session";
import { lingualOperations } from "../../state/ducks/lingual";

// import lib
import { connect } from "react-redux";

interface Props {
  product: any;
  AddCartContent?: () => void;
  history: any;
  addToCart?: (object) => void;
  alert?: any;
  cartItems?: any;
  removeFromCart?: (object) => void;
  wishList: any;
  addToWishList: (object) => void;
  removeFromWishList: (object) => void;
  session: any;
  changeQuantity: any;
  lingual?: any;
}

const ProductCard = ({
  product,
  history,
  alert,
  cartItems,
  addToCart,
  removeFromCart,
  wishList,
  addToWishList,
  removeFromWishList,
  session,
  changeQuantity,
  lingual,
}: Props) => {
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
    inStock,
    attribute,
  } = product;

  const [addToCartState, handleAddtoCartFetch] = useHandleFetch(
    [],
    "addtoCart"
  );

  const [removeFromCartState, handleRemoveFromCartFetch] = useHandleFetch(
    [],
    "removeFromCart"
  );

  const [updateCartItemState, handleUpdateCartItemFetch] = useHandleFetch(
    [],
    "updateCartItem"
  );

  const [addWishlistState, handleAddWishlistFetch] = useHandleFetch(
    [],
    "addWishlist"
  );

  const [
    removeFromWishlistState,
    handleRemoveFromWishlistFetch,
  ] = useHandleFetch([], "removeFromWishlist");

  const [selectedVariation, setSelectedVariation] = useState({});
  const [modifiedPrice, setModifiedPrice] = useState("");
  const [selectedVariationId, setSelectedVariationId] = useState("");

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

  const handleOnClickAddToCart = async () => {
    if (session.isAuthenticated) {
      if (
        checkIfItemExistsInCartItemById(cartItems, {
          product: id,
          variation: selectedVariationId || pricing[0]._id,
        })
      ) {
        // const removeFromCartRes = await handleRemoveFromCartFetch({
        //   body: {
        //     product: id,
        //     variation: selectedVariationId || pricing[0]._id
        //   }
        // });
        // // @ts-ignore
        // if (removeFromCartRes) {
        //   removeFromCart && removeFromCart({
        //     product,
        //     variation: selectedVariationId || pricing[0]._id
        //   });
        //   alert.success('Product Has Been Removed From the Cart');
        // }
      } else {
        const addToCartRes = await handleAddtoCartFetch({
          body: {
            items: [
              {
                product: id,
                quantity: 1,
                variation: selectedVariationId || pricing[0]._id,
              },
            ],
          },
        });

        // @ts-ignore
        if (addToCartRes && addToCartRes.type === "single") {
          const cartItem = {
            quantity: addToCartRes["data"]["quantity"],
            product: addToCartRes["data"]["product"],
            variation: addToCartRes["data"]["variation"],
            name: addToCartRes["data"]["name"],
            cover: cover,
            price: addToCartRes["data"]["price"],
            totalPrice: addToCartRes["data"]["totalPrice"],
            url: url,
            attribute,
          };
          addToCart && addToCart(cartItem);
          if (lingual.isBangla) {
            alert.success("প্রোডাক্ট ব্যাগে যোগ করা হয়েছে");
          } else {
            alert.success("Product Added To The Cart");
          }
        }
      }
    } else {
      const cartItem = {
        quantity: 1,
        product: id,
        variation: selectedVariationId
          ? selectedVariationId
          : pricing && pricing[0] && pricing[0]._id,
        name: name,
        cover: cover,
        price: modifiedPrice || price,
        totalPrice: parseInt(modifiedPrice) || parseInt(price) * 1,
        url: url,
        attribute,
      };
      addToCart && addToCart(cartItem);
      if (lingual.isBangla) {
        alert.success("প্রোডাক্ট ব্যাগে যোগ করা হয়েছে");
      } else {
        alert.success("Product Added To The Cart");
      }
    }
  };

  useEffect(() => {
    if (
      addWishlistState["error"]["isError"] &&
      Object.keys(addWishlistState["error"]["error"]).length > 0
    ) {
      alert.error("Signin to use wishlist");
    }
  }, [addWishlistState]);

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
      marginTop: "-15px",
      marginLeft: "-2px",
      height: "25px",
      minHeight: "25px",
      fontSize: "12px",
      color: "#303a3f",
      ...dot(data.color),
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

  const handleChangeQuantity = async (value) => {
    if (value === "minus") {
      if (quantity === 1) {
        const cartItem = {
          quantity: quantity,
          product: id,
          variation: selectedVariationId
            ? selectedVariationId
            : pricing && pricing[0] && pricing[0]._id,
          name: name,
          cover: cover,
          price: modifiedPrice || price,
          totalPrice: parseInt(modifiedPrice) || parseInt(price) * 1,
          url: url,
        };

        alert.success("Product Has Been Removed From the Cart");
        removeFromCart && removeFromCart(cartItem);

        return;
      }

      const newQuantity = quantity - 1;
      setQuantity(newQuantity);

      // @ts-ignore
      return changeQuantity(
        {
          product: id,
          variation: selectedVariationId
            ? selectedVariationId
            : pricing[0] && pricing[0]._id,
        },
        newQuantity
      );
    } else {
      const variationId = selectedVariationId || (pricing[0] && pricing[0]._id);
      const variation = getVariationbySelectedId(pricing, variationId);
      if (
        variation?.maximumPurchaseLimit &&
        quantity >= variation?.maximumPurchaseLimit
      ) {
        alert.info("Max purchase limit exceeded");
        return;
      }

      const newQuantity = quantity + 1;
      setQuantity(newQuantity);
      // @ts-ignore
      return changeQuantity(
        {
          product: id,
          variation: selectedVariationId
            ? selectedVariationId
            : pricing[0] && pricing[0]._id,
        },
        newQuantity
      );
    }
  };

  const location = useLocation();

  return (
    // <div className='product-card'>
    <div className="productCard">
      <div
        className="product-top"
        onClick={() => {
          if (url) {
            history.push({
              pathname: url,
              // This is the trick! This link sets
              // the `background` in location state.
              state: { background: location },
            });
          }
        }}
      >
        <img src={cover} alt="" loading="lazy" />

        {/* {parseInt(availableStock) === 0 && <div className='product-top-outofstockBatch'>
          <span>
            Out of
            Stock
          </span>
        </div>} */}
      </div>

      <div className="product-bottom">
        <div
          style={{
            height: "55px",
          }}
        >
          <h2
            onClick={() => {
              if (url) {
                history.push({
                  pathname: url,
                  // This is the trick! This link sets
                  // the `background` in location state.
                  state: { background: location },
                });
              }
            }}
            className="product-bottom-title"
          >
            {name}
          </h2>

          {pricingOptions &&
            pricingOptions.length < 2 &&
            pricingOptions.length > 0 && (
              <>
                <div className="product-bottom-select-one">
                  <span>
                    {convertAttributeValuesToStringValue(
                      pricing && pricing[0] && pricing[0].attribute
                    )}
                  </span>
                </div>
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
        </div>

        {/* 
        <div className='product-bottom-attributes'>
          <span>
            1KG
          </span>
          <span>
            500G
          </span>
        </div> */}

        <div className="product-bottom-price-and-cartActions">
          {/* {parseInt(offerPrice) ? <>
            <h2 className='product-bottom-price'>

              ৳{regularPrice}
            </h2>
            <h2 className='product-bottom-offerPrice'>
              ৳{offerPrice}
            </h2>
          </> : <h2 className='product-bottom-offerPrice'>

              ৳{regularPrice}
            </h2>} */}

          <h2 className="product-bottom-offerPrice">৳ &nbsp; {regularPrice}</h2>

          {!checkIfItemExistsInCartItemById(cartItems, {
            product: id,
            variation: selectedVariationId
              ? selectedVariationId
              : pricing && pricing[0] && pricing[0]._id,
          }) ? (
            <span
              className={
                inStock
                  ? "product-bottom-price-and-cartActions-cart-btn pbpc-100"
                  : "product-bottom-price-and-cartActions-cart-btn product-bottom-price-and-cartActions-cart-btn-disabled pbpc-100"
              }
              onClick={inStock ? handleOnClickAddToCart : () => null}
            >
              {!addToCartState.isLoading && !removeFromCartState.isLoading && (
                <>
                  {(checkIfItemExistsInCartItemById(cartItems, {
                    product: id,
                    variation: selectedVariationId
                      ? selectedVariationId
                      : pricing && pricing[0] && pricing[0]._id,
                  }) && (
                    <>
                      <i className="fa fa-shopping-cart"></i>
                      {lingual.isBangla ? "যোগ হয়েছে" : "Added"}
                    </>
                  )) || (
                    <>
                      {inStock ? (
                        <>
                          <i className="fa fa-cart-plus"></i>
                          {lingual.isBangla ? "যোগ করুন" : "Add to Cart"}
                        </>
                      ) : (
                        <>
                          <i className="fa fa-info-circle"></i>
                          {lingual.isBangla ? "ফুরিয়ে গেছে" : `Unavailable`}
                        </>
                      )}
                    </>
                  )}
                </>
              )}

              {addToCartState.isLoading
                ? lingual.isBangla
                  ? "যোগ হচ্ছে..."
                  : "Adding..."
                : ""}
              {removeFromCartState.isLoading
                ? lingual.isBangla
                  ? "রিমুভ হচ্ছে..."
                  : "Removing..."
                : ""}
            </span>
          ) : (
            <>
              <div className="product-bottom-quantityCounter">
                <span
                  onClick={() => {
                    handleChangeQuantity("minus");
                  }}
                >
                  <i className="fa fa-minus"></i>
                </span>

                <input
                  // onChange={(e) => setQuantityValue(e.target.value)}
                  type="text"
                  disabled
                  value={getCartItemQuantity({
                    product: id,
                    variation: selectedVariationId
                      ? selectedVariationId
                      : pricing && pricing[0] && pricing[0]._id,
                  })}
                  title="Quantity"
                  className="product-bottom-quantityCounter-input"
                  size={3}
                />
                <span
                  onClick={() => {
                    handleChangeQuantity("plus");
                  }}
                >
                  <i className="fa fa-plus"></i>
                </span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  wishList: state.wishList,
  session: state.session,
  lingual: state.lingual,
});

const mapDispatchToProps = {
  removeFromCart: cartOperations.removeFromCart,
  addToCart: cartOperations.addToCart,
  changeQuantity: cartOperations.changeQuantity,
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(withRouter(withAlert()(ProductCard)));

/*

here is the pricing array,

  take all the values of different attributes THEN separate them by comma
    and there value will be variation id.


    const pricing = [
      {
        price: 15,
        attribute: {
          "color":['black'],
          "level":['top']
        }
      },
       {
        price: 15,
        attribute: {
          "color":['black'],
          "level":['top']
        }
      }
    ]


    const convertAttributeValuesToStringValue = (attribute) => {
      const value = [];

      if(Object.values(attribute) > 0 ){
        let attributeValues = Object.values(attribute);
        attributeValues.forEach(attributeValue => {
          value.push(attributeValue[0])
        })

        return value.join(',');

      }
      return false;

    };



    const getPricingOptions = (pricing) => {
      const pricingOptions = [];
      pricing.forEarch(pricingItem => {

        if(convertAttributeValuesToStringValue(pricingItem.attribute)){
           let pricingOption = {
          value: pricingItem.id,
          label: `${convertAttributeValuesToStringValue(pricingItem.attribute) || ''}`
        }
        pricingOptions.push()
        }

      })
    };

    getPricingOptions(pricing);


    const getPriceByVariationId = (id) => {
      const priceItem = pricing.find(pricingItem => pricingItem.id === id);
      if(priceItem && priceItem.price.regular){
        return priceItem.price.offer
         && parseInt(priceItem.price.offer)
         ? priceItem.price.offer : priceItem.price.regular
      }
      else return false;
    }

*/
