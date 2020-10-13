import React,{useState} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// import pages 
import Home from './pages/Home' 

// import navigation container
import {Navigation} from './containers/Navigation'

// import layout 
import Layout from './layout' 
import Category from './pages/Category';

// import global styles
import GlobalStyles from './global.styles';


const App = () => {

const [shopByCategory, setShopByCategory] = useState(true);

  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout>
          <Navigation />
          <Switch>
            <Route exact path={"/"}>
              <Home />
            </Route>
            <Route exact path={"/te"} component={Category} />
          </Switch>
        </Layout>
        <GlobalStyles />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;







