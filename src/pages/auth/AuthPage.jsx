import { useState } from "react";
import { Login } from "../../components/Login";
import { Register } from "../../components/Register";
import './authPage.css'

export const AuthPage = () => {
  const [isLogin, setIslogin] = useState(true)

  const hadlerAuthPageToggle = () => {
    setIslogin((prev) => !prev)
  }

  return (
    <div className="auth-container">
      {
        isLogin ? (
          <Login switchAuthHandler={hadlerAuthPageToggle}/>
        ):(
          <Register switchAuthHandler={hadlerAuthPageToggle}/>
        )
      }
      
      </div>
  );
}

