import { useState } from "react"
import {Logo} from './Logo'
import {Input} from './Input'
import {
    emailValidationMessage,
    passwordValidationMessage,
    passwordConfirmationMessage,
    usernameValidationMessage,
    validateUsername,
    validateEmail,
    validatePassword,
    validatePasswordConfir,
} from '../shared/validators'
import { useRegister } from "../shared/hooks"


export const Register = ({switchAuthHandler}) => {
    const {register, isLoading} = useRegister()

    const [formState, setformState] = useState({
        email:{
            value: "",
            isValid: false,
            showError: false
        },
        password: {
            value: "",
            isValid: false,
            showError: false
        },
        passwordConfir:{
          value: "",
          isValid: false,
          showError: false
        },
        username:{
          value: "",
          isValid: false,
          showError: false          
        }

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
            case 'username':
                isValid = validateUsername(value)
                break;                 
            case 'password':
                isValid = validatePassword(value)
                break;
            case 'passwordConfir':
                isValid = validatePasswordConfir(formState.passwordConfir.value,value)
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

    const handleRegister = (event) => {
        event.preventDefault()
        register(formState.email.value, formState.password.value, formState.username.value)
    }

    const isSubmitButtonDisabled = 
    isLoading || 
    !formState.password.isValid || 
    !formState.email.isValid ||
    !formState.username.isValid ||
    !formState.passwordConfir.isValid


    return(
        <div className="register-container">
            <Logo text={'Register Kinal Cast'}/>
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
                    field='username'
                    label='Username'
                    value={formState.username.value}
                    onChangeHandler={handleInputValueChange}
                    type='text'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMenssage={formState.username.showError}
                    validationMessage={usernameValidationMessage}
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
                <Input
                    field='passwordConfir'
                    label='Password Confirmation'
                    value={formState.passwordConfir.value}
                    onChangeHandler={handleInputValueChange}
                    type='password'
                    onBlurHandler={handleInputValidationOnBlur}
                    showErrorMenssage={formState.passwordConfir.showError}
                    validationMessage={passwordConfirmationMessage}
                />
                <button onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                    Register
                </button>
            </from>
            <span onClick={switchAuthHandler} className="auth-form-switch-label">
                Ya tienes una cuenta? Inicia sesion aca!
            </span>
        </div>
    )
}

