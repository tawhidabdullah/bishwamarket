import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import pages
import Home from "./pages/Home";

// import layout
import Layout from "./layout";
import Category from "./pages/Category";

// import global styles
import GlobalStyles from "./global.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        {/* <Layout> */}
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/te"} component={Category} />
          </Switch>
        {/* </Layout> */}
        <GlobalStyles />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
