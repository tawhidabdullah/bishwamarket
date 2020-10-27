import React, { lazy, Suspense, Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// import layout
import Layout from "./layout";

// import global styles
import GlobalStyles from "./global.styles";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import home page on initial rendering
import Home from "./pages/Home";

// lazy load other components
const Category = lazy(() => import("./pages/Category"));
const Search = lazy(() => import("./pages/Search"));
const SignIn = lazy(() => import("./pages/SignIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const ForgotPassword = lazy(() => import("./pages/forgotPassword"));
const Checkout = lazy(() => import("./pages/Checkout"));
const Profile = lazy(() => import("./pages/Profile"));
const Collection = lazy(() => import("./pages/Collection"));
const WishlistPage = lazy(() => import("./pages/Wishlist"));
const OrderHistory = lazy(() => import("./pages/OrderHistory"));
const OrderSuccess = lazy(() => import("./pages/OrderSuccess"));

const App = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Suspense fallback="Loading...">
          <Layout>
            <Switch>
              <Route exact path={"/"} component={Home} />
              <Route exact path={"/te"} component={Category} />
              <Route exact path={"/Search"} component={Search} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route exact path="/forgot-password" component={ForgotPassword} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/collection" component={Collection} />
              <Route exact path="/wishlist" component={WishlistPage} />
              <Route exact path="/order-history" component={OrderHistory} />
              <Route exact path="/order-success" component={OrderSuccess} />
            </Switch>
          </Layout>
          <GlobalStyles />
        </Suspense>
      </Fragment>
    </BrowserRouter>
  );
};

export default App;
