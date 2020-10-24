import React, { Fragment } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

// import backdrop element
// import { BackDrop } from "../../elements/Backdrop";

// import form component
// import { InputField } from "../../common/InputField";
// import { DrawerButton } from "../../common/Button/DrawerButton";

// import dummy data
import { categoryList } from "./dummyData";

// import toggle drawer action
import { toggleCategoryDrawer } from "../../../redux/global/global.actions";

// dummy data

const CategoryDrawer = ({ open, toggleCategoryDrawer }) => {
  return (
    <Fragment>
      {/* <BackDrop show={open} clicked={handleClose} /> */}
      <CategoryDrawerContainer show={open}>
        <DrawerHeader>
          <HeaderText onClick={() => toggleCategoryDrawer()}>
            Back <i className="fa fa-angle-right"></i>
          </HeaderText>
        </DrawerHeader>

        <DrawerMenuContainer>
          {categoryList.map((category, idx) => (
            <DrawerMenuItem key={idx}>{category}</DrawerMenuItem>
          ))}
        </DrawerMenuContainer>
      </CategoryDrawerContainer>
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCategoryDrawer: () => dispatch(toggleCategoryDrawer()),
});

export default connect(null, mapDispatchToProps)(CategoryDrawer);

const CategoryDrawerContainer = styled.div`
  position: fixed;
  width: 20rem;
  max-width: 70%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 2000000;
  background-color: white;
  box-sizing: border-box;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
`;

const DrawerHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  border-bottom: 1px solid #ddd;
  font-family: PT-Sans, sans-serif;
`;

const HeaderText = styled.span`
  font-size: 18px;
  padding: 15px 10px;
  font-weight: bold;
  letter-spacing: 0.8px;

  :last-child {
    cursor: pointer;
  }
`;

const DrawerMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* align-items: center; */
`;
const DrawerMenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-family: PT Sans, sans-serif;
  padding: 10px 15px;
  font-weight: bold;
  color: #777;

  & span:last-child {
    margin-right: 20px;
    font-size: 11px;
    font-weight: normal;
  }
`;

const Text = styled.p`
  color: #ff6000;
  font-size: 14px;
  padding: 5px 0;
  ${(props) => props.customStyles};
`;
