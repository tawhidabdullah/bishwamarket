import React from 'react';
import styled from 'styled-components'

// import navbar components
import {MainNav} from '../../components/Navigation/MainNav';
import {TopNav} from '../../components/Navigation/TopNav';
import {SearchNav} from '../../components/Navigation/SearchNav';

const Navigation  = () => {
  return(
    <NavigationContainer>
      <TopNav />
      <MainNav />
      <SearchNav />
    </NavigationContainer>
  )
}

const NavigationContainer = styled.div`
  display: flex;
  flex-direction: column;
  
`

export default Navigation;