import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"


const LogoutPage: FC = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()
    const  main = async () =>{
    const flag = await logout()
    navigate("/records")
    }
    main()
    return ('')}
export default LogoutPage