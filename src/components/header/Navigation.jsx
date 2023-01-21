import React from 'react'
import styled from 'styled-components'
import Button from '../UI/button/Button'

const Navigation = ({ onLogout, showUsers, showTimer }) => {
  return (
    <StyledNavigation>
      <Button
      title={"Users"}
      onClick={showUsers}
      />
      <Button
      title={"Timer"}
      onClick={showTimer}
      />
      <Button
      onClick={onLogout}
      title={"Logout"}
      />
    </StyledNavigation>
  )
}

export default Navigation

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;