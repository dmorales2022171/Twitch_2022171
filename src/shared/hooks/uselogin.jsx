import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { login as loginRequest} from "../../services/api"
import toast from "react-hot-toast"


export const uselogin = () => {
    const [isLoading, setIsLoading] = useState(false)
    
    const navigate = useNavigate()

    const login = async (email, password) => {
        setIsLoading(true)

        const response = await loginRequest({
            email,
            password
        })

        setIsLoading(false)
        if(response.error){
            return toast.error(
                response.e?.response?.data || 'ocurrio un erro al iniciar sesion'
            )
        }

        const {userDetails} = response.data

        localStorage.setItem('user', JSON.stringify(userDetails))

        navigate('/')

    }
  return {
    login,
    isLoading
  }
}

