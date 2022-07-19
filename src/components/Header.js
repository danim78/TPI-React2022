import logo from "../logo.png";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import Buscador from "./general/buscador";

function Header(props) {
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
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <Buscador onBuscar={props.onBuscar}/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
