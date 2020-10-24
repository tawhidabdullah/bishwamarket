import React, { useState, lazy, Suspense } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import layout
import Layout from "./layout";

// import global styles
import GlobalStyles from "./global.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import pages
import Home from "./pages/Home";
const Category = lazy(() => import("./pages/Category"));
const Search = lazy(() => import("./pages/Search"));
const SignIn = lazy(() => import("./pages/SignIn"));
// import Category from "./pages/Category";
// import Search from "./pages/Search";
// import { SignIn } from "./pages/Signin";

const App = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Suspense fallback="Loading...">
          {/* <Layout> */}
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/te"} component={Category} />
              <Route exact path={"/Search"} component={Search} />
              <Route exact path="/signin" component={SignIn} />
            </Switch>
          {/* </Layout> */}
          <GlobalStyles />
        </Suspense>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
