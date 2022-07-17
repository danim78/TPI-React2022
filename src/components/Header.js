import { useState } from 'react'
import { Navbar, Container, } from 'react-bootstrap'
import logo from '../logoRSN.png';

function Header(){
    const [titulo, setTitulo] = useState('Buscador de noticias')

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src={logo}
                width="150"
                height="50"
                className="d-inline-block align-"
                />{titulo}
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header