import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// import pages 
import Home from './pages/Home' 

// import layout 
import Layout from './layout' 

// import global styles
import GlobalStyles from './global.styles';


const App = () => {

  return (
    <BrowserRouter>
      <React.Fragment>
        <Layout>
          <Switch>
            <Route exact path={'/'}  component={Home}  />
          </Switch>
        </Layout>
        <GlobalStyles />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;







