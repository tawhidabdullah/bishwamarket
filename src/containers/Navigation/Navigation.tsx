import React, { useState, useEffect } from "react";
import styled from "styled-components";

// import navbar components
import { MainNav } from "../../components/Navigation/MainNav";
import { TopNav } from "../../components/Navigation/TopNav";
import { SearchNav } from "../../components/Navigation/SearchNav";

import { useQueryFetch, useHandleFetch } from "../../hooks";

// import lib
import { useLocation, useParams } from "react-router";

// dummy data
const languageList = ["English", "Hindi", "Spanish", "Marathi"];
const currencyList = ["Inr", "USD", "Eur"];

const Navigation = ({}) => {
  // state for toggling language dropdown
  const [toggleLingual, setToggleLingual] = useState(false);

  // state for toggling currency dropdown
  const [toggleCurrency, setToggleCurrency] = useState(false);

  // state for toggling category dropdown
  const [toggleCategory, setToggleCategory] = useState(true);

  // state for toggling GiftBox dropdown
  const [toggleGiftBox, setToggleGiftBox] = useState(false);

  // import hooks

  const params = useParams();
  const location = useLocation();

   const categoryListState = useQueryFetch("categoryList");
   const [categoryListData, setCategoryListData] = useState([]);

useEffect(() => {
  if (categoryListState.isSuccess && categoryListState.data) {
    setCategoryListData(categoryListState.data);
  }
}, [categoryListState.isSuccess]);





 

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
      <MainNav />

      {categoryListState.isSuccess &&
        categoryListState.data &&
        Object.keys(categoryListState).length > 0 && (
          <SearchNav
            setToggleCategory={setToggleCategory}
            toggleCategory={toggleCategory}
            setToggleGiftBox={setToggleGiftBox}
            toggleGiftBox={toggleGiftBox}
            //@ts-ignore
            categoryListData={categoryListData}
          />
        )}
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Navigation;
