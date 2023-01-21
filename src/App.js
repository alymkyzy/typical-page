import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from "./components/header/Header";
import Login from './components/login/Login';
import Users from './components/users/Users';
import Timer from './components/timer/Timer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUsers, setShowUsers] = useState(false);
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    const result = localStorage.getItem("SAVE");
    setIsLoggedIn(Boolean(result));
  }, [])

  const loginHandler = ( ) => {
    setIsLoggedIn((prevState) => !prevState);
    localStorage.setItem("SAVE", JSON.stringify(isLoggedIn));
  }

  const logoutHandler = () => {
    setIsLoggedIn((prevState) => !prevState);
    localStorage.clear();
  }

  useEffect(() => {
    const result = localStorage.getItem("USER");
    setShowUsers(Boolean(result));
  }, [])

  const handlerUsers = () => {
    setShowUsers(true);
    setShowTimer(false);
    localStorage.setItem("USER", JSON.stringify(showUsers));
    localStorage.removeItem("TIME");
  }

  useEffect(() => {
    const result = localStorage.getItem("TIME");
    setShowTimer(Boolean(result));
  }, [])

  const handlerTimer = () => {
    setShowTimer(true);
    setShowUsers(false);
    localStorage.setItem("TIME", JSON.stringify(showTimer));
    localStorage.removeItem("USER");
  }

  return (
    <>
      <Header isLoggedIn={isLoggedIn} onLogout={logoutHandler} showTimer={handlerTimer} showUsers={handlerUsers}/>

      <StyledMain>
        <StyledContainer>
          {!isLoggedIn && <Login onLogin={loginHandler} />}
          {isLoggedIn && !showUsers && !showTimer && <Users onLogout={logoutHandler} />}
          {isLoggedIn && showUsers && <Users/>}
          {isLoggedIn && showTimer && <Timer />}
        </StyledContainer>
      </StyledMain>
    </>
  );
}

export default App;

const StyledMain =  styled.main`
    max-width: 1000px;
    margin: 0 auto;
    padding: 30px 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const StyledContainer = styled.div`
  width: 600px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  padding: 30px;
  border-radius: 10px;
  text-align: center;
`;