import React from "react";
import styled from "styled-components";
import { connect, useDispatch } from "react-redux";
import html_parser from "html-react-parser";
import { useAlert } from "react-alert";

// import redux ops
import { cartOperations } from "../../state/ducks/cart";
import { productOperations } from "../../state/ducks/Item";
import { globalOperations } from "../../state/ducks/globalState";

// hooks for add to cart
import { useHandleFetch } from "../../hooks";

const HotdealItem = ({
  offerProduct,
  addToCart,
  removeFromCart,
  isAuthenticated,
}) => {
  const alert = useAlert();
  const dispatch = useDispatch();

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

  function renderPrice(regularPrice: any = 0, offerPrice: any = 0, priceType) {
    switch (priceType) {
      case "regular":
        return regularPrice || null;
      case "offer":
        if (offerPrice) {
          console.log("shitoff");
        }
        return parseInt(offerPrice) || null;
      case "price":
        if (
          offerPrice &&
          offerPrice != 0 &&
          parseInt(offerPrice) < parseInt(regularPrice)
        ) {
          return offerPrice;
        } else {
          return regularPrice;
        }
      default:
        return regularPrice || null;
    }
  }

  const addToDrawer = () => {
    dispatch(productOperations.addProduct(offerProduct));
    dispatch(globalOperations.toggleQuickviewDrawer());
  };

  return (
    <HotDealContainer>
      <HotContainer>
        <div
          onClick={addToDrawer}
          style={{
            padding: "10px",
            border: "1px solid #ddd",
            background: "#fff",
            cursor: "pointer",
          }}
          className="right-slick-img"
        >
          <img src={offerProduct.image} />
        </div>
        <HotdealCenter>
          <div>
            <Text
              onClick={addToDrawer}
              style={{
                cursor: "pointer",
              }}
            >
              {offerProduct.name}
            </Text>
            <PriceBox>
              {html_parser(
                `${
                  offerProduct.description.length > 100
                    ? offerProduct.description.substring(0, 100) + "...."
                    : offerProduct.description
                }` || ""
              )}

              {/* <Price>
                <span>Regular Price: ৳ {offerProduct.price}</span> <br />
                <span>Offer Price: ৳ {offerProduct.offerPrice}</span>
              </Price> */}

              <Price>
                {renderPrice(
                  offerProduct.regularPrice,
                  offerProduct.offerPrice,
                  "offer"
                ) ? (
                  <p>
                    ৳{offerProduct.offerPrice}{" "}
                    <del>৳{offerProduct.regularPrice}</del>
                  </p>
                ) : (
                  <p
                    style={{
                      color: "#ffa600",
                      fontWeight: 700,
                    }}
                  >
                    ৳
                    {renderPrice(
                      offerProduct.regularPrice,
                      offerProduct.offerPrice,
                      "price"
                    )}
                  </p>
                )}
              </Price>
            </PriceBox>
            {/* <p
              onClick={() => handleAddToCart(offerProduct)}
              style={{
                margin: "0 10px",
                width: "fit-content",
                cursor: "pointer",
              }}
              title="Add to Cart"
            >
              <span>
                <i className="fa fa-shopping-bag" />
              </span>
            </p> */}
          </div>
        </HotdealCenter>
      </HotContainer>
    </HotDealContainer>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

const mapDispatchToProps = {
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(HotdealItem);

const HotDealContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  /* padding: 30px; */
  margin-top: 20px;

  @media only screen and (max-width: 580px) {
    width: 90%;
  }
`;

const HotDeal = styled.div`
  margin-bottom: 25px;

  & h5 {
    font-size: 18px;
    text-transform: uppercase;
    color: #444;
  }
  @media only screen and (max-width: 580px) {
    text-align: center;
  }
`;
const HotContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
    justify-items: center;
    align-items: center;
  }
`;

const HotdealCenter = styled.div`
  display: flex;

  align-items: start;
  justify-content: start;
  height: 100%;
  margin: 0 30px;
  width: 100%;

  @media only screen and (max-width: 580px) {
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

const HotRating = styled.div`
  line-height: 1;
  margin: 20px 10px;
  color: #ffa800;
`;
const Timer = styled.div`
  & p {
    line-height: 1.6;
    margin: 20px 10px;
    letter-spacing: 0.05em;
    font-weight: 600;
  }

  & span {
    display: inline-grid;
    background-color: transparent;
    text-align: center;
    font-weight: 700;
    color: #000;
    margin: 0 4px;
    min-width: -webkit-fit-content;
    min-width: -moz-fit-content;
    min-width: fit-content;
    font-size: calc(18px + (24 - 18) * ((100vw - 320px) / (1920 - 320)));
    padding: 0;
  }
  & h5 {
    color: #444;
    text-transform: capitalize;
    letter-spacing: 0.05em;

    font-weight: 700;
    margin-bottom: 0;
    font-size: 16px;
  }
`;
const PriceBox = styled.div`
  line-height: 1.6;
  margin: 20px 10px;
  letter-spacing: 0.05em;
  font-size: 14px;
`;

const Price = styled.div`
  p {
    font-size: 20px;
  }
  & p del {
    color: #ff6000;
    font-size: 12px;
  }

  & span {
    font-size: 16px;
    color: #5a514b !important;
    font-weight: 700;
    margin-right: 10px;
    line-height: 1;
  }
`;

const Text = styled.div`
  color: #444;
  text-transform: capitalize;
  letter-spacing: 0.05em;
  font-weight: bold;
  margin: 0 10px;
`;

const HotsideImage = styled.div`
  display: flex;
  flex-direction: column;
  overflow: auto;

  & p {
    width: 100%;
    background-color: red;
  }
`;
