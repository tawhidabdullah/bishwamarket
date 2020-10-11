import React from 'react';
import { BrowserRouter, Route, Switch, useLocation } from 'react-router-dom';


// import pages 
import Home from './pages/Home' 

// import layout 
import Layout from './layout' 



const RouteSwitch = () => {

  return (
  <>
    <Switch>c
      <Route exact path={'/'}  component={Home}  />
    </Switch>
    </>
  )
}



const App = () => {

  let routes = (
    <RouteSwitch />
  );

  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout>
          {routes}
        </Layout>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;







