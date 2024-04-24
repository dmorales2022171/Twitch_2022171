import { useState } from "react"
import {Logo} from './Logo'
import {Input} from './Input'
import {
    emailValidationMessage,
    passwordValidationMessage,
    validateEmail,
    validatePassword
} from '../shared/validators'
import { uselogin } from "../shared/hooks/uselogin"


export const Login = ({switchAuthHandler}) => {
    const {login, isLoading} = uselogin()

    const [formState, setformState] = useState({
        email:{
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false
        },

    })


    const handleInputValueChange = (value, field) => {
        setformState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch(field){
            case 'email':
                isValid = validateEmail(value)
                break;
            case 'password':
                isValid = validatePassword(value)
                break;
            default:
                break;    
        }

        setformState((prevState) => ({
            ...prevState,
            [field]:{
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleLogin = (event) => {
        event.preventDefault()
        login(formState.email.value, formState.password.value)
    }

    const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.email.isValid


    return(
        <div className="login-container">
            <Logo text={'Login Kinal Cast'}/>
            <from className="auth-form">
                <Input
                    field='email'
                    label='Email'
                    value={formState.email.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMenssage={formState.email.showError}
                    validationMessage={emailValidationMessage}
                />
                <Input
                    field='password'
                    label='Password'
                    value={formState.password.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMenssage={formState.password.showError}
                    validationMessage={passwordValidationMessage}
                />
                <button onClick={handleLogin} disabled={isSubmitButtonDisabled}>
                    Log in
                </button>
            </from>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Aun no tiene una cuenta? Registrate!
            </span>
        </div>
    )
}

