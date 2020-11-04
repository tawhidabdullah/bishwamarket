//@ts-nocheck
import React, { Fragment, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import backdrop element
import { BackDrop } from "../../elements/Backdrop";
import { DrawerButton } from "../../common/Button/DrawerButton";

// import dummy image
import wishListImage from "../../../assets/wishListDrawerImage.jpg";

// import toggle drawer action
import { globalOperations } from "../../../state/ducks/globalState";

// import wishlist ops
import { wishListOperations } from "../../../state/ducks/wishList";

// import hooks for fetching wishlist data
import { useHandleFetch } from "../../../hooks";

const WishListDrawer = ({
  open,
  toggleWishlistDrawer,
  addWishlist,
  wishList,
}) => {
  // this hook send GET request to get wishlist
  const [getWishlistState, handleWishlist] = useHandleFetch({}, "getWishlist");

  useEffect(() => {
    const fetchWishlist = async () => {
      const getWishlistRes = await handleWishlist();
      // console.log(getWishlistRes);
    };

    fetchWishlist();
  }, []);

  return (
    <Fragment>
      <BackDrop show={open} clicked={() => toggleWishlistDrawer()} />
      <WishListDrawerContainer show={open}>
        <DrawerHeader>
          <HeaderText>MY WISHLIST</HeaderText>
          <HeaderText onClick={() => toggleWishlistDrawer()}>
            <i className="fa fa-times"></i>
          </HeaderText>
        </DrawerHeader>

        <hr />
        <DrawerItemContainer>
          <DrawerItem>
            <span>
              <img src={wishListImage} alt="wish list image" />
            </span>

            <WishListText>
              <span>Item name</span>
              <span>Size</span>
              <span>$Price</span>
            </WishListText>

            <span>
              <i className="fa fa-trash"></i>
            </span>
          </DrawerItem>

          <DrawerItem>
            <span>
              <img src={wishListImage} alt="wish list image" />
            </span>

            <WishListText>
              <span>Item name</span>
              <span>Size</span>
              <span>$Price</span>
            </WishListText>

            <span>
              <i className="fa fa-trash"></i>
            </span>
          </DrawerItem>

          <DrawerItem>
            <span>
              <img src={wishListImage} alt="wish list image" />
            </span>

            <WishListText>
              <span>Item name</span>
              <span>Size</span>
              <span>$Price</span>
            </WishListText>

            <span>
              <i className="fa fa-trash"></i>
            </span>
          </DrawerItem>
          <hr />
          <SubTotalContainer>
            <span>Subtotal</span>
            <span>$220</span>
          </SubTotalContainer>
          <hr />
          <DrawerButton
            wrapperStyle={{}}
            customStyle={{ "font-weight": "bold" }}
          >
            View Wishlist
          </DrawerButton>
        </DrawerItemContainer>
      </WishListDrawerContainer>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  wishList: state.wishList,
});

const mapDispatchToProps = {
  toggleWishlistDrawer: globalOperations.toggleWishlistDrawer,
  addWishlist: wishListOperations.addWishlist,
};

export default connect(mapStateToProps, mapDispatchToProps)(WishListDrawer);

const WishListDrawerContainer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 70%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  right: 0;
  top: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.6s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};

  @media (max-width: 500px) {
    width: 80%;
    max-width: 80%;
  }
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderText = styled.span`
  font-size: 18px;
  padding: 15px 10px;
  font-weight: bold;
  font-family: Roboto, sans-serif;
  letter-spacing: 0.8px;

  :last-child {
    cursor: pointer;
  }
`;

const DrawerItemContainer = styled.div`
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: column;
`;

const DrawerItem = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  & span {
    cursor: pointer;
  }

  & span:nth-child(2) {
    font-weight: bold;
  }
`;

const WishListText = styled.span`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding: 15px;
`;

const SubTotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 5px;
  font-size: 14px;
  font-weight: bold;
  color: #999999;
`;
