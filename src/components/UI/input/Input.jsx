import React from 'react'
import styled from 'styled-components'

const Input = ({ labelName, type, value, onChange }) => {
  return (
    <FormContainer>
        <Label htmlFor={type}>{ labelName }</Label>

        <InputStyle
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        />
    </FormContainer>
  )
}

export default Input

const FormContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 17px;
`;

const Label = styled.label`
    color: #464646;
    font-weight: 600;
    font-size: 18px;

`;

const InputStyle = styled.input`
    border: 1px solid #ccc;
    border-radius: 10px;
    padding: 8px 10px;
    width: 400px;

    color: #383838;
    font-size: 18px;

    &:focus {
        outline: none;
        background: #D6E4F9;
    }
`;