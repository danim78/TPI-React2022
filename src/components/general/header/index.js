import logo from "../../../logo.png";
import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./Header.css"

function Header() {
  const [titulo, setTitulo] = useState("Buscador de noticias");

  return (
    <header>
      <Navbar bg="dark" variant="dark" id="page-top" >
        <Container text-align="center">
          <Navbar.Brand href="/">
            <img
              alt="logo"
              src={logo}
              width="115rem"
              height="32rem"
              className="d-inline-block align-bottom"
            />{" "}
            {titulo}
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
