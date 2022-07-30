import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Buscador.css";

function Buscador(props) {
  const [busquedaText, setBusquedaText] = useState("");
  const [messageSize, setMessageSize] = useState(false);
  const [messageRequired, setMessageRequired] = useState(false);

  const onBusquedaChange = (evento) => {
    setBusquedaText(evento.target.value);
  };

  const onBuscarClick = () => {
    setMessageSize(true);
    setMessageRequired(true);
    if (busquedaText.length > 0) {
      setMessageRequired(false);
    }
    if (busquedaText.length > 2) {
      props.onBuscar(busquedaText);
      setMessageSize(false);
      setMessageRequired(false);
    }
  };

  const onBuscarKey = (evento) => {
    if (evento.keyCode === 13) {
      evento.preventDefault();
      setMessageRequired(false);
      if (busquedaText.length < 1) {
        setMessageRequired(true);
      }
      setMessageSize(true);
      if (busquedaText.length > 2) {
        props.onBuscar(busquedaText);
        setMessageSize(false);
        setMessageRequired(false);
      }
    }
  };

  return (
    <>
      <Form className=" container-buscador" role="search">
        <Form.Control
          className="me-0"
          type="input"
          placeholder="Buscar..."
          value={busquedaText}
          aria-label="Search"
          onChange={onBusquedaChange}
          onKeyDown={onBuscarKey}
        />
        <Button
          variant="btn btn-primary"
          id="boton-buscar"
          onClick={onBuscarClick}
        >
          Buscar
        </Button>
        {messageRequired && (
          <div className="message-container">
            <span>- Ingrese término de busqueda requerido.</span>
          </div>
        )}
        {messageSize && (
          <div className="message-container">
            <span>- Ingrese como mínimo 3 carácteres.</span>
          </div>
        )}
      </Form>
    </>
  );
}

export default Buscador;
