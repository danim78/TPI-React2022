import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Buscador.css";

function Buscador(props) {
  const [busquedaText, setBusquedaText] = useState("");

  const onBusquedaChange = (evento) => {
    setBusquedaText(evento.target.value);
  };

  const onBuscarClick = () => {
    if (busquedaText.length > 3) {
      props.onBuscar(busquedaText);
    }
  };

  const onBuscarKey = (evento) => {
    if (busquedaText.length > 2) {
      if (evento.keyCode === 13) {
        evento.preventDefault();
        props.onBuscar(busquedaText);
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="mt-5 mb-4">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              value={busquedaText}
              className="me-2"
              aria-label="Search"
              onChange={onBusquedaChange}
              onKeyDown={onBuscarKey}
            />
            <Button variant="btn btn-primary" id="boton-buscar" onClick={onBuscarClick}>
              Buscar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Buscador;
