import { useState } from 'react'
import { Navbar, Container, } from 'react-bootstrap'

function Header(props){
    const [titulo, setTitulo] = useState('Buscador de noticias')

    return(
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="#home">
                <img
                alt=""
                src="src/components/logoRSN.png"
                width="150"
                height="50"
                className="d-inline-block"
                />{' '}
            Buscador de noticias
            </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default Header