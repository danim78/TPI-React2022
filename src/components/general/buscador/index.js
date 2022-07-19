import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

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

  return (
    <>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Buscar..."
          value={busquedaText}
          className="me-2"
          aria-label="Search"
          onChange={onBusquedaChange}
        />
        <Button variant="btn btn-primary" onClick={onBuscarClick}>
          Buscar
        </Button>
      </Form>
    </>
  );
}

export default Buscador;
