import { FC } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"

import { Container, Row } from "react-bootstrap"
import "./RegistrationPage.css"


const RegistrationPage: FC = () => {
    const { register} = useAuth()
    const navigate = useNavigate()

    const handleRegistration = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const flag = await register(formData)
        if (flag) {
            navigate("/login")
        }
    }
    return (
        <Container>
            <Row>
                {<Breadcrumbs pages={[ { link: `/login/`, title: "вход" } ]} />}
            </Row>
            <Row>
        
            <form onSubmit={ handleRegistration } className={"mainContainer"}>
        <div className={"titleContainer"}>

            <div>Зарегистрироваться</div>

        </div>
        <div className={"inputContainer"}>
            <input
                name = 'username'
                placeholder="Введите имя пользователя"
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                name = 'email'
                placeholder="Введите эл. почту"
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
            type="password"
            name="password"
                placeholder="Введите пароль"
                className={"inputBox"} />
        </div>
        <br />
        
        <div className={"inputContainer"}>
            <input
                value = "Зарегестрироваться"
                className={"inputButton"}
                type="submit"/>
        </div>
    </form>
            </Row>
        </Container>
    )
}

export default RegistrationPage;