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
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgotPassword = lazy(() => import("./pages/forgotPassword"));
const Checkout = lazy(() => import("./pages/Checkout"));
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
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/checkout" component={Checkout} />
            </Switch>
          {/* </Layout> */}
          <GlobalStyles />
        </Suspense>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
