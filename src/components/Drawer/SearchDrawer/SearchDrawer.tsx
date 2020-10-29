import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

// import toggle action
import { toggleSearchDrawer } from "../../../state/ducks/globalState/actions";

const SearchDrawer = ({ open, toggleSearchDrawer }) => {
  return (
    <SearchDrawerContainer show={open}>
      <CloseButtonContainer>
        <CloseButton onClick={() => toggleSearchDrawer()}>&#10005;</CloseButton>
      </CloseButtonContainer>

      <SearchBoxContainer>
        <InputField type="text" placeholder="Search a product" />
        <SearchIcon>
          <i className="fa fa-search"></i>
        </SearchIcon>
      </SearchBoxContainer>
    </SearchDrawerContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleSearchDrawer: () => dispatch(toggleSearchDrawer()),
});

export default connect(null, mapDispatchToProps)(SearchDrawer);

const SearchDrawerContainer = styled.div`
  z-index: 2000000;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-out;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(-100%)")};
`;

const CloseButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CloseButton = styled.span`
  font-size: 22px;
  padding: 30px 50px 0 0;
  margin-left: auto;
`;

const SearchBoxContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -10%;
`;

const InputField = styled.input`
  width: 95%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding-bottom: 20px;
  outline: none;
  font-weight: 500;
  font-size: 18px;
  letter-spacing: 1px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: black;
    font-size: 18px;
    font-weight: 500;
  }
`;

const SearchIcon = styled.span`
  /* margin-right: 20px; */
`;
