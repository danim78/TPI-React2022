import logo from "../logoRSN.png";
import { useState } from "react";
import { Navbar, Container, Button, Form, Nav } from "react-bootstrap";

function Header(props) {
  const [titulo, setTitulo] = useState("Buscador de noticias");
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container text-align="center">
        <Navbar.Brand href="home">
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
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              value={busqueda}
              className="me-2"
              aria-label="Search"
              onChange={handleChange}
            />
            <Button variant="btn btn-primary">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
