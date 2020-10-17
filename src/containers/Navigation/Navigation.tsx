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
}) => {
  // state for toggling language dropdown
  const [toggleLingual, setToggleLingual] = useState(false);

  // state for toggling currency dropdown
  const [toggleCurrency, setToggleCurrency] = useState(false);

  return (
    <NavigationContainer>
      <TopNav
        toggleLingual={toggleLingual}
        setToggleLingual={setToggleLingual}
        languageList={languageList}
        currencyList={currencyList}
        toggleCurrency={toggleCurrency}
        setToggleCurrency={setToggleCurrency}
      />
      <MainNav
        openSigninDrawer={openSigninDrawer}
        openWishListDrawer={openWishListDrawer}
        openCartDrawer={openCartDrawer}
      />
       <SearchNav /> 
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Navigation;
