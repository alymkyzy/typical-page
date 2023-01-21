import React from 'react'
import styled from 'styled-components'
import Navigation from './Navigation'

const Header = ({ isLoggedIn, onLogout, showTimer, showUsers }) => {
  return (
    <StyledHeader>
      <Container>

        <HeaderTitle>A Typical Page</HeaderTitle>
        
        {isLoggedIn && <Navigation onLogout={onLogout} showTimer={showTimer} showUsers={showUsers}/>}

      </Container>
    </StyledHeader>
  )
}

export default Header

const StyledHeader = styled.header`
  width: 100%;
  background-color: #800B7A;
`;

const Container = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 25px 0;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderTitle = styled.h1`
  font-size: 30px;
  color: #FFF;
`;