import React, { useEffect, useState } from 'react'
import Button from '../UI/button/Button'
import Input from '../UI/input/Input'

const Login = ( {onLogin} ) => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [emailIsValid, setEmailIsValid] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState('');
    const [passwordIsValid, setPasswordIsValid] = useState(false);
    const [formIsValid, setFormIsValid] = useState(false);

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
        setEmailIsValid(enteredEmail.includes('@'))
    }

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
        setPasswordIsValid(enteredPassword.trim().length >= 6)
    }

    useEffect(() => {
        setFormIsValid(emailIsValid && passwordIsValid);
    }, [emailIsValid, passwordIsValid])

  return (
    <form>
        <Input
        type={"email"}
        labelName={"E-Mail"}
        value={enteredEmail}
        onChange={emailChangeHandler}
        />
        <Input
        type={"password"}
        labelName={"Password"}
        value={enteredPassword}
        onChange={passwordChangeHandler}
        />

        <Button
        title={"Login"}
        color={"success"}
        disabled={!formIsValid}
        onClick={onLogin}
        />
    </form>
  )
}

export default Login;


