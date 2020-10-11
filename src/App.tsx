import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// import pages 
import Home from './pages/Home' 


// import layout 
import Layout from './layout' 
import Category from './pages/Category';


const App = () => {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout>
          <Switch>
            <Route exact path={'/'}  component={Home}  />
            <Route exact path={'/te'} component={Category} />
          </Switch>
        </Layout>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;







