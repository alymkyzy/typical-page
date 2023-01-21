import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';

const Timer = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((sec) => sec + 1);
    }, 1000);
    return () => clearInterval(intervalRef.current);
  }, [])

  const cancelInterval = () => {
    if (count === 60) {
      clearInterval(intervalRef.current);
    }
  };

  cancelInterval();

  return (
    <>
    <Time>Timer: {count}</Time>
    </>
  )
}

export default Timer;

const Time = styled.h2`
  text-align: center;
  font-weight: 600;
  font-size: 50px;
  padding: 50px;
`;