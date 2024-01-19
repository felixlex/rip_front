import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { FC } from 'react'
import { useAuth } from '../../hooks/useAuth';

const My_Navbar_Without_Cart: FC = () => {
  const { is_authenticated, username,is_moderator } = useAuth()
   return(
      <Navbar expand="lg">
        <Container id = '1'>
          <Navbar.Brand href="/records" style={{color:"white"}}>Животные-рекордсмены</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {!is_authenticated && <Nav.Link href="/records" style={{color:"white"}}>Домой</Nav.Link>}
              {!is_authenticated && <Nav.Link href="/register" style={{color:"white"}}>Зарегистрироваться</Nav.Link>}
              {!is_authenticated && <Nav.Link href="/login" style={{color:"white"}}>Вход</Nav.Link>}
  
              {(is_authenticated && !is_moderator) && <Nav.Link href="/records" style={{color:"white"}}>Домой</Nav.Link>}
              {(is_authenticated && !is_moderator) && <Nav.Link href="/animals" style={{color:"white"}}>Мои заказы</Nav.Link>}
              {(is_authenticated && !is_moderator) && <Nav.Link href="/logout" style={{color:"white"}}>Выйти</Nav.Link>}
              {(is_authenticated && !is_moderator) && <Nav.Link style={{color:"white"}}>{username}</Nav.Link>}

              {(is_authenticated && is_moderator) && <Nav.Link href="/records" style={{color:"white"}}>Домой</Nav.Link>}
              {(is_authenticated && is_moderator) && <Nav.Link href="/table_view" style={{color:"white"}}>Администрирование рекордов</Nav.Link>}
              {(is_authenticated && is_moderator) && <Nav.Link href="/animals" style={{color:"white"}}>Все заказы</Nav.Link>}
              {(is_authenticated && is_moderator) && <Nav.Link href="/logout" style={{color:"white"}}>Выйти</Nav.Link>}
              {(is_authenticated && is_moderator) && <Nav.Link style={{color:"white"}}>{username}</Nav.Link>}

  
  
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)}


export default My_Navbar_Without_Cart
