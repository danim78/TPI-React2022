import logo from "../../../logo.png";
import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";

function Header() {
  const [titulo, setTitulo] = useState("Buscador de noticias");

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
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
  );
}

export default Header;
