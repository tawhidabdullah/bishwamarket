import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { useAlert } from "react-alert";

// import config for image url
import config from "../../../config.json";

// import hooks
import { useHandleFetch } from "../../../hooks";
import image from "../../../assets/media/1.jpg";

// import redux ops
import { cartOperations } from "../../../state/ducks/cart";

const MediaBanner = ({
  product,
  addToCart,
  isAuthenticated,
  removeFromCart,
}) => {
  const alert = useAlert();

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

  return (
    <MediaBannercontainer>
      {product &&
        product.map((item, idx) => (
          <MediaBannerBox key={idx}>
            <Media>
              <img
                src={product.image}
                className="img-fluid  "
                alt="popular products"
              />
              <MediaBody>
                <MediaContent>
                  <div>
                    <ProductNameLabel>{item.name}</ProductNameLabel>
                    <h6>৳ {item.price}</h6>
                    <ShoppingBag onClick={() => handleAddToCart(item)}>
                      <span>
                        <i title="Add to Cart" className="fa fa-shopping-bag" />
                      </span>
                    </ShoppingBag>
                  </div>
                </MediaContent>
              </MediaBody>
            </Media>
          </MediaBannerBox>
        ))}

      {/* <MediaBannerBox>
        <div className="media-view">
          <h5>View More</h5>
        </div>
      </MediaBannerBox> */}
    </MediaBannercontainer>
  );
};

const mapDispatchToProps = {
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
});

export default connect(mapStateToProps, mapDispatchToProps)(MediaBanner);

const ShoppingBag = styled.p`
  & span i {
    color: black;
  }

  padding: 10px;
  margin: 10px 0;
  font-size: 16px;
`;

const ProductNameLabel = styled.p`
  font-family: Raleway, sans-serif;
  font-size: 14px;
  margin-bottom: 0;
  cursor: pointer;
`;

const MediaBannercontainer = styled.div`
  background-color: #f2f2f2;
`;
const MediaBannerBox = styled.div`
  margin-bottom: 20px;

  & h5 {
    font-size: 16px;
    color: #444;
    text-transform: uppercase;
    line-height: 1;
    letter-spacing: 0.5px;
  }
`;

const Media = styled.div`
  display: flex;
  cursor: pointer;

  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
`;

const MediaBody = styled.div`
  flex: 1;
`;
const MediaContent = styled.div`
  margin-left: 15px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  /* height: 100px; */

  & h6 {
    color: #ff6000;
    cursor: pointer;
    font-weight: 700;
    margin-top: 3px;
    font-size: 14px;
    margin-bottom: 0;
  }
`;
