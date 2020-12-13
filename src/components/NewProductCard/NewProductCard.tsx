import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
// import redux ops
import { globalOperations } from "../../state/ducks/globalState";
import { productOperations } from "../../state/ducks/Item";

const NewProductCard = ({ product, addProduct, toggleQuickviewDrawer }) => {
  const history = useHistory();
  const handleAddToDrawer = () => {
    addProduct(product);
    // toggleQuickviewDrawer();
    history.push(product.url);
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
      </CardInfoContainer>
    </NewProductCardContainer>
  );
};

const mapDispatchToProps = {
  toggleQuickviewDrawer: globalOperations.toggleQuickviewDrawer,
  addProduct: productOperations.addProduct,
};

const mapStateToProps = (state) => ({
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
