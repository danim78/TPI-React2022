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
  
  // const onBuscarKey = (evento) => {
  //   if (evento.keyCode === 13) {
  //     if (busquedaText.length > 3) {
  //       console.log(busquedaText)
  //       props.onBuscar(busquedaText);
  //     }
  //   }
  // };

  return (
    <>
      <div className="container">
        <div className="mb-3 mt-5">
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar..."
              value={busquedaText}
              className="me-2"
              aria-label="Search"
              onChange={onBusquedaChange}
              // onKeyDown={onBuscarKey}
            />
            <Button variant="btn btn-primary" onClick={onBuscarClick}>
              Buscar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Buscador;
