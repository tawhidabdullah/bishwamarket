import React from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import styled from "styled-components";

// import hooks
import { useHandleFetch } from "../../hooks";

// import redux ops
import { cartOperations } from "../../state/ducks/cart";
import { globalOperations } from "../../state/ducks/globalState";
import { productOperations } from "../../state/ducks/Item";

const NewProductCard = ({
  product,
  addToCart,
  isAuthenticated,
  removeFromCart,
  addProduct,
  toggleQuickviewDrawer,
  openQuickviewDrawer,
}) => {
  const alert = useAlert();

  // this hook add to item to cart
  const [addToCartState, handleAddtoCartPost] = useHandleFetch({}, "addToCart");

  //TODO this all addToCart should go into a hook
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
      cover: item.cover,
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

  const handleAddToDrawer = () => {
    addProduct(product);
    toggleQuickviewDrawer();
  };

  return (
    <NewProductCardContainer>
      <ImageContainer onClick={handleAddToDrawer}>
        <img className="img-fluid" src={product.cover} alt="" />
      </ImageContainer>
      <CardInfoContainer>
        <h3 onClick={handleAddToDrawer}>{product.name}</h3>
        <p>৳{product.price}</p>
        {parseFloat(product.offer) > 0 && <p>Offer: {product.offer}</p>}
        {/* <ShoppingBag>
          <span onClick={() => handleAddToCart(product)} title="Add to Cart">
            <i className="fa fa-shopping-bag" />
          </span>
          <span onClick={handleAddToDrawer} title="View details">
            <i className="fa fa-eye" />
          </span>
          <QuickViewDrawer open={openQuickviewDrawer} />
        </ShoppingBag> */}
      </CardInfoContainer>
    </NewProductCardContainer>
  );
};

const mapDispatchToProps = {
  addToCart: cartOperations.addToCart,
  removeFromCart: cartOperations.removeFromCart,
  toggleQuickviewDrawer: globalOperations.toggleQuickviewDrawer,
  addProduct: productOperations.addProduct,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.session.isAuthenticated,
  openQuicviewDrawer: state.globalState.openQuickviewDrawer,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewProductCard);

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

  h3 {
    /* font-weight: 600; */
    font-size: 16px;
    cursor: pointer;
  }

  & p {
    margin-bottom: 0;
    margin-top: 15px;
    font-weight: 700;
    font-size: 15px;
    color: #ffa800;
  }

  @media screen and (max-width: 768px) {
    flex-grow: unset;
    font-size: 11px;
    padding-left: 15px;
  }

  @media screen and (max-width: 400px) {
    font-size: 13px;
  }
`;

const ImageContainer = styled.div`
  height: 100%;
  background: #fff;
  height: -webkit-fit-content;
  height: -moz-fit-content;
  height: 110px;
  width: 100px;
  padding-left: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media screen and (max-width: 768px) {
    width: 35%;
  }

  @media screen and (max-width: 600px) {
    width: 45%;
  }
`;

const ShoppingBag = styled.p`
  border: 1px solid #eee;
  padding: 5px;
  width: fit-content;
  cursor: pointer;

  & span {
    margin-right: 10px;
  }
`;
