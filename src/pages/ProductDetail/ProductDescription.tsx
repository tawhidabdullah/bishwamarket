import React, { useEffect, useState, useRef } from "react";
import detailsImg from "../../assets/detailImg.png";
// import StarRating from "../../components/StarRating";
import plus from "../../assets/plus.svg";
import minus from "../../assets/minus.svg";
import op from "../../assets/op.jpg";
import { Carousel } from "react-responsive-carousel";
import { withAlert } from "react-alert";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import Select from "react-select";
// import ImageGallery from 'react-image-gallery';
import ImageGallery from "../../components/ImageGallery";
import ReactImageZoom from "react-image-zoom";
import ReactHtmlParser from "html-react-parser";

// import responsive carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "react-multi-carousel/lib/styles.css";

// import hooks
import { useHandleFetch } from "../../hooks";

// import state
import { cartOperations } from "../../state/ducks/cart";

// import utils
import {
  checkIfItemExistsInCartItemById,
  getCartKeyFromCartItems,
  checkIfTheWishListExistsInArrayById,
  numberWithCommas,
} from "../../utils";

const ProductDescription = ({
  productDetail,
  addToCart,
  cartItems,
  alert,
  removeFromCart,
  session,
  changeQuantity,
  lingual,
}) => {
  const [addToCartState, handleAddtoCartFetch] = useHandleFetch(
    [],
    "addtoCart"
  );

  const [removeFromCartState, handleRemoveFromCartFetch] = useHandleFetch(
    [],
    "removeFromCart"
  );

  const [addWishlistState, handleAddWishlistFetch] = useHandleFetch(
    [],
    "addWishlist"
  );

  const [updateCartItemState, handleUpdateCartItemFetch] = useHandleFetch(
    [],
    "updateCartItem"
  );

  const history = useHistory();
  const id = productDetail.id;
  const pricing = productDetail.pricing;
  const price = productDetail.price;
  const name = productDetail.name;
  const cover = productDetail.cover;
  const url = productDetail.url;
  const attribute = productDetail.attribute;

  const [selectedVariation, setSelectedVariation] = useState({});
  const [modifiedPrice, setModifiedPrice] = useState("");
  const [selectedVariationId, setSelectedVariationId] = useState("");

  const getVariationbySelectedId = (pricing, variationId) => {
    if (variationId && pricing.length > 0) {
      return pricing.find((variation) => variation._id === variationId);
    }
    return {};
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

  // const colourStyles = {
  //     control: styles => ({
  //         ...styles,
  //         backgroundColor: '#222',
  //         border: '1px solid lightgrey',
  //         height: '35px',
  //         minHeight: '35px',
  //         borderRadius: '6px',
  //         fontSize: '12px'
  //     }),

  //     option: (styles, { data, isDisabled, isFocused, isSelected }) => {
  //         const color = '#fff';
  //         return {
  //             ...styles,
  //             backgroundColor: isDisabled
  //                 ? null
  //                 : isSelected
  //                     ? color
  //                     : isFocused
  //                         ? 'rgb(247, 247, 247)'
  //                         : 'rgb(247, 247, 247)',
  //             color: isDisabled
  //                 ? '#333'
  //                 : isSelected
  //                     ? '#333'
  //                     : isFocused
  //                         ? '#303a3f'
  //                         : '#303a3f',
  //             cursor: isDisabled ? 'not-allowed' : 'default',

  //             ':active': {
  //                 ...styles[':active'],
  //                 backgroundColor: !isDisabled && (isSelected ? color : '#303a3f'),
  //             },
  //         };
  //     },
  //     input: styles => ({
  //         ...styles, height: '35px',
  //         minHeight: '35px', fontSize: '12px', color: '#fff', ...dot()
  //     }),
  //     placeholder: styles => ({
  //         ...styles, height: '35px',
  //         top: '23%',
  //         minHeight: '35px', fontSize: '12px', color: '#fff', ...dot()
  //     }),
  //     singleValue: (styles, { data }) => ({
  //         ...styles, marginTop: '-11px', marginLeft: '-2px', height: '35px',
  //         minHeight: '35px', fontSize: '12px', color: '#fff', ...dot(data.color)
  //     }),
  // };

  const colourStyles = {
    dropdownIndicator: (styles) => ({
      ...styles,
      padding: "0 !important",
      position: "absolute",
      top: "25%",
      right: "3%",
    }),
    control: (styles) => ({
      ...styles,
      backgroundColor: "#fff",
      border: "1px solid lightgray",
      height: "45px",
      minHeight: "45px",
      borderRadius: "3px",
      outline: "none",
    }),
    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = "#A4A4A4";
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? "#fff"
          : isFocused
          ? color
          : "#f7f7f7",
        color: isDisabled
          ? "#333"
          : isSelected
          ? color
          : isFocused
          ? "#100846"
          : "#A4A4A4",
        cursor: isDisabled ? "not-allowed" : "default",

        ":active": {
          ...styles[":active"],
          backgroundColor: !isDisabled && (isSelected ? color : "#100846"),
        },
      };
    },
    menu: (provided, state) => ({
      ...provided,
      width: "fit-content",
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      padding: 10,
      fontSize: "14px",
    }),
    input: (styles) => ({
      ...styles,
      color: "#A4A4A4",
      marginBottom: "1rem",
      fontSize: "14px",
    }),
    placeholder: (styles) => ({ ...styles, color: "#A4A4A4" }),
    singleValue: (styles, { data }) => ({
      ...styles,
      // marginTop: "-12px",
      marginLeft: "8px",
      fontSize: "13px",
      color: "#A4A4A4",
    }),
    indicatorSeparator: (styles, { data }) => ({
      ...styles,
      //   marginTop: "-15px",
      backgroundColor: "transparent !important",
      //   ...dot(data.color),
    }),
  };

  const getCartItemQuantity = (givenCartItem) => {
    const item = cartItems.find(
      (cartItem) =>
        cartItem.product === givenCartItem.product &&
        cartItem.variation === givenCartItem.variation
    );

    if (item) {
      return item.quantity;
    } else return 1;
  };

  const images =
    productDetail.image && productDetail.image.length > 0
      ? productDetail.image.map((item) => {
          return {
            original: item.large,
            thumbnail: item.small,
            small: item.small,
          };
        })
      : [];

  const [quantity, setQuantity] = useState(
    getCartItemQuantity({
      product: id,
      variation: selectedVariationId || pricing[0]._id,
    })
  );

  const handleOnClickAddToCart = async () => {
    if (session.isAuthenticated) {
      if (
        checkIfItemExistsInCartItemById(cartItems, {
          product: id,
          variation: selectedVariationId || pricing[0]._id,
        })
      ) {
        const removeFromCartRes = await handleRemoveFromCartFetch({
          body: {
            product: id,
            variation: selectedVariationId || pricing[0]._id,
          },
        });

        // @ts-ignore
        if (removeFromCartRes) {
          removeFromCart &&
            removeFromCart({
              product: id,
              variation: selectedVariationId || pricing[0]._id,
            });

          // if (lingual.isBangla) {
          //   alert.success("প্রোডাক্ট ব্যাগে থেকে বাদ দেয়া হয়েছে");
          // } else {
          //   alert.success("Product Has Been Removed From the Cart");
          // }
          alert.success("Product Has Been Removed From the Cart");
        }
      } else {
        const addToCartRes = await handleAddtoCartFetch({
          body: {
            items: [
              {
                product: id,
                quantity: quantity,
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
            price: addToCartRes["data"]["price"],
            totalPrice: addToCartRes["data"]["totalPrice"],
            url: url,
            cover: cover,
            attribute,
          };
          addToCart && addToCart(cartItem);
          // if (lingual.isBangla) {
          //   alert.success("প্রোডাক্ট ব্যাগে যোগ করা হয়েছে");
          // } else {
          //   alert.success("Product Added To The Cart");
          // }

          alert.success("Product Added To The Cart");
        }
      }
    } else {
      if (
        checkIfItemExistsInCartItemById(cartItems, {
          product: id,
          variation: selectedVariationId || pricing[0]._id,
        })
      ) {
        removeFromCart &&
          removeFromCart({
            product: id,
            variation: selectedVariationId || pricing[0]._id,
          });

        // if (lingual.isBangla) {
        //   alert.success("প্রোডাক্ট ব্যাগে থেকে বাদ দেয়া হয়েছে");
        // } else {
        //   alert.success("Product Has Been Removed From the Cart");
        // }
        alert.success("Product Has Been Removed From the Cart");
      } else {
        const cartItem = {
          quantity: quantity,
          product: id,
          variation: selectedVariationId || pricing[0]._id,
          name: name,
          url: url,
          cover: cover,
          price: modifiedPrice || price,
          totalPrice: parseInt(modifiedPrice) || parseInt(price) * 1,
          attribute,
        };
        addToCart && addToCart(cartItem);
        // if (lingual.isBangla) {
        //   alert.success("প্রোডাক্ট ব্যাগে যোগ করা হয়েছে");
        // } else {
        //   alert.success("Product Added To The Cart");
        // }
        alert.success("Product Added To The Cart");
      }
    }
  };

  const convertAttributeValuesToStringValue = (attribute) => {
    if (!attribute || !(Object.values(attribute)?.length > 0)) {
      return "";
    }

    const value = [];
    let attributeValues = Object.values(attribute);

    if (attributeValues && attributeValues.length > 0) {
      attributeValues.forEach((attributeValue) => {
        // @ts-ignore
        value.push(attributeValue);
      });

      return value.join(",");
    } else {
      return "";
    }
  };

  const getPricingOptions = (pricing) => {
    if (pricing.length > 0) {
      const pricingOptions = [];

      pricing.forEach((pricingItem) => {
        if (
          pricingItem?.attribute &&
          Object.values(pricingItem?.attribute).length > 0 &&
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
    setQuantity(1);
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

  const handleChangeQuantity = async (value) => {
    if (session.isAuthenticated) {
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

          const removeFromCartRes = await handleRemoveFromCartFetch({
            body: {
              product: id,
              variation: selectedVariationId || pricing[0]._id,
            },
          });

          // @ts-ignore
          if (removeFromCartRes) {
            removeFromCart &&
              removeFromCart({
                product: id,
                variation: selectedVariationId || pricing[0]._id,
              });
            alert.success("Product Has Been Removed From the Cart");
            removeFromCart && removeFromCart(cartItem);
            return;
          }
          return;
        }

        const myQuantity = getCartItemQuantity({
          product: id,
          variation: selectedVariationId || pricing[0]._id,
        });

        const newQuantity = myQuantity - 1;
        setQuantity(newQuantity);

        changeQuantity(
          {
            product: id,
            variation: selectedVariationId || pricing[0]._id,
          },
          newQuantity
        );

        const updateCartItemRes = await handleUpdateCartItemFetch({
          body: {
            product: id,
            variation: selectedVariationId || pricing[0]._id,
            quantity: newQuantity,
          },
        });
      } else {
        const variationId =
          selectedVariationId || (pricing[0] && pricing[0]._id);
        const variation = getVariationbySelectedId(pricing, variationId);
        if (
          variation?.maximumPurchaseLimit &&
          quantity >= variation?.maximumPurchaseLimit
        ) {
          alert.info("Max purchase limit exceeded");
          return;
        }

        const myQuantity = getCartItemQuantity({
          product: id,
          variation: selectedVariationId || pricing[0]._id,
        });

        const newQuantity = myQuantity + 1;
        setQuantity(newQuantity);

        changeQuantity(
          {
            product: id,
            variation: selectedVariationId || pricing[0]._id,
          },
          newQuantity
        );

        const updateCartItemRes = await handleUpdateCartItemFetch({
          body: {
            product: id,
            variation: selectedVariationId || pricing[0]._id,
            quantity: newQuantity,
          },
        });
      }
    } else {
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
            variation: selectedVariationId || pricing[0]._id,
          },
          newQuantity
        );
      } else {
        const variationId =
          selectedVariationId || (pricing[0] && pricing[0]._id);
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
            variation: selectedVariationId || pricing[0]._id,
          },
          newQuantity
        );
      }
    }
  };

  const getTotalProductDetailPrice = (price) => {
    if (!price) return "";
    return parseInt(price) * parseInt(quantity);
  };

  const inputEl = useRef(null);

  return (
    <div className="productDescriptionContainer">
      <div
        ref={inputEl}
        className="productDescriptionContainer____imageContainer"
      >
        {productDetail.image && !productDetail.image[0] && (
          <>
            {console.log(productDetail.cover, "cover")}

            {/* <img src={productDetail.cover} alt=""/> */}
            <ReactImageZoom img={productDetail.cover} zoomPosition="original" />
          </>
        )}

        {productDetail.image && productDetail.image.length > 0 ? (
          <>
            <div className="productimg-wrapp d-flex">
              <ImageGallery imgCntr={inputEl} images={images} />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>

      <div className="productDescriptionContainer__detailsContainer">
        <div className="productDescriptionContainer__detailsContainer__wrapper">
          <h4 className="title">{productDetail.name}</h4>

          <h4 className="mainPrice">
            {"Price: "} ৳ &nbsp;
            {numberWithCommas(modifiedPrice) || numberWithCommas(price)}
            {/* {productDetail.regularPrice} */}
          </h4>

          {/* {productDetail.category && productDetail.category.length > 0 && (
            <p className="subtitle">
              {lingual.isBangla ? "ক্যাটেগরি: " : "Category: "}
              {productDetail.category.map((cat) => {
                return (
                  <>
                    <span
                      onClick={() =>
                        cat.url &&
                        history.push(`/e/${cat.url.replace("/category/", "")}`)
                      }
                    >
                      {cat.name},
                    </span>
                  </>
                );
              })}
            </p>
          )} */}

          {/* {productDetail.tags && productDetail.tags.length > 0 && (
            <p className="subtitle">
              {lingual.isBangla ? "ট্যাগস: " : "Tags: "}
              {productDetail.tags.map((tag) => {
                return (
                  <>
                    <span>{tag.name},</span>
                  </>
                );
              })}
            </p>
          )} */}

          {convertAttributeValuesToStringValue(pricing[0].attribute) && (
            <>
              <div className="quantity">
                {/* <span className='label'>
                  {lingual.isBangla ? 'ওজন: ' : 'Weight: '}
                </span> */}
                {convertAttributeValuesToStringValue(pricing[0].attribute) && (
                  <div
                    style={{
                      width: "123px",
                      // marginLeft: '7px',
                    }}
                  >
                    <Select
                      isSearchable={false}
                      styles={colourStyles}
                      onChange={(value) => handleSelectVariation(value)}
                      defaultValue={{
                        value: pricing[0]._id,
                        label: convertAttributeValuesToStringValue(
                          pricing[0].attribute
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
              </div>
            </>
          )}

          <div className="quantity">
            {/* <span className='label'>{lingual.isBangla ? 'একক' : 'Unit:'}</span>
            &nbsp; &nbsp; */}
            <div className="unit-border">
              <span
                onClick={() => {
                  if (
                    checkIfItemExistsInCartItemById(cartItems, {
                      product: id,
                      variation: selectedVariationId || pricing[0]._id,
                    })
                  ) {
                    handleChangeQuantity("minus");
                  } else {
                    if (quantity === 1) {
                    } else {
                      setQuantity(quantity - 1);
                    }
                  }
                }}
                className="plus"
              >
                -
              </span>
              &nbsp; &nbsp;
              <span className="digit">
                {checkIfItemExistsInCartItemById(cartItems, {
                  product: id,
                  variation: selectedVariationId || pricing[0]._id,
                })
                  ? getCartItemQuantity({
                      product: id,
                      variation: selectedVariationId || pricing[0]._id,
                    })
                  : quantity}
              </span>
              &nbsp; &nbsp;
              <span
                onClick={() => {
                  if (
                    checkIfItemExistsInCartItemById(cartItems, {
                      product: id,
                      variation: selectedVariationId || pricing[0]._id,
                    })
                  ) {
                    handleChangeQuantity("plus");
                  } else {
                    setQuantity(quantity + 1);
                  }
                }}
                className="plus"
              >
                +
              </span>
            </div>
          </div>

          <div className="quantity">
            <span className="label">{"Total Price: "}</span>
            &nbsp; &nbsp;
            <span
              style={{
                fontWeight: 600,
              }}
            >
              ৳ &nbsp;{getTotalProductDetailPrice(modifiedPrice || price)}
              {/* ৳ */}
              {/* &nbsp;{productDetail.regularPrice} */}
            </span>
          </div>

          <div className="buttons">
            {productDetail.inStock ? (
              <>
                {/* <div
                  className="buy"
                  onClick={() => {
                    if (
                      checkIfItemExistsInCartItemById(cartItems, {
                        product: id,
                        variation: selectedVariationId || pricing[0]._id,
                      })
                    ) {
                      history.push("/billing");
                    } else {
                      handleOnClickAddToCart();
                      history.push("/billing");
                    }
                  }}
                >
                  {lingual.isBangla ? " এখনি কিনুন" : " Buy now"}
                </div> */}
                <div onClick={handleOnClickAddToCart} className="cart">
                  {!addToCartState.isLoading && !removeFromCartState.isLoading && (
                    <>
                      {(checkIfItemExistsInCartItemById(cartItems, {
                        product: id,
                        variation: selectedVariationId || pricing[0]._id,
                      }) && <>{"Added"}</>) || <>{" Add to Cart"}</>}
                    </>
                  )}

                  {addToCartState.isLoading ? "Adding..." : ""}
                  {removeFromCartState.isLoading ? "Removing..." : ""}
                </div>
              </>
            ) : (
              <>
                <div
                  className="alertText"
                  style={{
                    cursor: "pointer",
                  }}
                >
                  <i className="fa fa-exclamation-circle"></i>
                  <h3>{`Unavailable`}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {productDetail.description && (
        <div>
          <div>
            <h2
              style={{
                fontSize: "15px",
                fontWeight: 600,
                marginTop: "20px",
                marginBottom: "15px",
              }}
            >
              Description
            </h2>
            <p className="description">
              {ReactHtmlParser(productDetail.description || "")}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartItems: state.cart,
  session: state.session,
});

const mapDispatchToProps = {
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
  changeQuantity: cartOperations.changeQuantity,
};

// @ts-ignore
export default connect(
  mapStateToProps,
  mapDispatchToProps
  // @ts-ignore
)(withAlert()(ProductDescription));
