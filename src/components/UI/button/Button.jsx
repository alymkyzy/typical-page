import React from 'react'
import styled from 'styled-components'

const Button = ({ title, color, disabled, onClick }) => {
  return (
    <StyleButton
    color={color}
    disabled={disabled}
    onClick={onClick}
    >
        {title}
    </StyleButton>
  )
}

export default Button

const StyleButton = styled.button`
    border: none;
    cursor: pointer;

    padding: 10px 50px;
    border-radius: 30px;
    box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

    font: inherit;
    font-size: 20px;
    color: #FFF;

    background-color: ${(props) => props.color ? '#800B7A' : '#C009B4'};

    :disabled {
      background-color: gray;
    }
`;