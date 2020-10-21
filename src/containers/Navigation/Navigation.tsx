import React, { useState } from "react";
import styled from "styled-components";

// import navbar components
import { MainNav } from "../../components/Navigation/MainNav";
import { TopNav } from "../../components/Navigation/TopNav";
import { SearchNav } from "../../components/Navigation/SearchNav";

// dummy data
const languageList = ["English", "Hindi", "Spanish", "Marathi"];
const currencyList = ["Inr", "USD", "Eur"];

const Navigation = ({
  openSigninDrawer,
  openWishListDrawer,
  openCartDrawer,
  openNavDrawer,
  openCategoryDrawer,
}) => {
  // state for toggling language dropdown
  const [toggleLingual, setToggleLingual] = useState(false);

  // state for toggling currency dropdown
  const [toggleCurrency, setToggleCurrency] = useState(false);

  // state for toggling category dropdown
  const [toggleCategory, setToggleCategory] = useState(true);

  // state for toggling GiftBox dropdown
  const [toggleGiftBox, setToggleGiftBox] = useState(false);

  return (
    <NavigationContainer>
      <TopNav
        toggleLingual={toggleLingual}
        setToggleLingual={setToggleLingual}
        languageList={languageList}
        currencyList={currencyList}
        toggleCurrency={toggleCurrency}
        setToggleCurrency={setToggleCurrency}
        toggleCategory={toggleCategory}
      />
      <MainNav
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListDrawer}
        openCartDrawer={openCartDrawer}
        openNavDrawer={openNavDrawer}
        openCategoryDrawer={openCategoryDrawer}
      />
      <SearchNav
        setToggleCategory={setToggleCategory}
        toggleCategory={toggleCategory}
        setToggleGiftBox={setToggleGiftBox}
        toggleGiftBox={toggleGiftBox}
      />
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Navigation;
