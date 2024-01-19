import { FC, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs"
import Loader from '../../components/Loader/Loader.tsx';

import { Container, Row } from "react-bootstrap"
import "./LoginPage.css"


const LoginPage: FC = () => {
    const [ loading, setLoading ] = useState<boolean> (true)
    const { login, auth } = useAuth()
    const navigate = useNavigate()

    const handleLogin = async (e: any) => {
        e.preventDefault()
        const formData = new FormData(e.target as HTMLFormElement)
        const flag = await login(formData)
        if (flag) {
            navigate("/records")
        }
    }

    const handleAuth  = async () => {
        const flag = await auth()
        if (flag) {
            navigate("/records")
        }
    }

    useEffect(() => {
        handleAuth().then(() => {
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, []);

    return (
        <> {loading ? <Loader /> :
        <Container>
            <Row>
                {<Breadcrumbs pages={[ { link: `/login/`, title: "вход" } ]} />}
            </Row>
            <Row>
        
            <form onSubmit={ handleLogin } className={"mainContainer"}>
        <div className={"titleContainer"}>

            <div>Войти</div>

        </div>
        <div className="registerContainer">
            <div>Или</div>
            <div>Зарегестрироваться</div>
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
            type="password"
            name="password"
                placeholder="Введите пароль"
                className={"inputBox"} />
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value = "Войти"
                className={"inputButton"}
                type="submit"/>
        </div>
    </form>
            </Row>
        </Container>
        }</>
    )
}

export default LoginPage;