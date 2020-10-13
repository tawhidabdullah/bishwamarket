import React from "react";
import styled from "styled-components";

// import common components
import { ItemText } from "../../common/ItemText";
import { SingleDropDown } from "../../common/Dropdown/SingleDropdown";

const RightNav = (props) => {
  return (
    <RightContainer>
      <ItemText
        customStyles={{
          position: "relative",
          "margin-right": "25px",
          "font-weight": "bold",
        }}
        setToggle={props.setToggleLingual}
        isToggle={props.toggleLingual}
        isIcon={true}
      >
        English{" "}
        {props.toggleLingual && (
          <SingleDropDown
            customeStyles={{
              position: "absolute",
              "margin-top": "15px",
              "max-height": "50px",
            }}
            listItem={props.languageList}
          />
        )}
      </ItemText>

      <ItemText
        customStyles={{
          position: "relative",
          "margin-right": "25px",
          "font-weight": "bold",
        }}
        setToggle={props.setToggleCurrency}
        isToggle={props.toggleCurrency}
        isIcon={true}
      >
        USD{" "}
        {props.toggleCurrency && (
          <SingleDropDown
            customeStyles={{
              position: "absolute",
              "margin-top": "15px",
              "max-height": "50px",
            }}
            listItem={props.currencyList}
          />
        )}
      </ItemText>
    </RightContainer>
  );
};

export default RightNav;

const RightContainer = styled.div`
  margin-left: auto;
  display: flex;
  align-items: center;

  @media screen and (max-width: 578px) {
    display: none;
  }
`;

// const Icon = styled.i`
//   padding-left: 10px;
// `;
