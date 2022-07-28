import React from "react";
import Header from "../header";
import Footer from "../footer";
import Alert from "react-bootstrap/Alert";
import "./Error404.css";

function Error404() {
  return (
    <>
      <Header />
      <div className="container-body">
        <Alert variant="danger">
          <Alert.Heading>Error 404: Página no encontrada!</Alert.Heading>
          <p>
            Por favor, regrese a la <a href="/">página principal</a> e inténtelo
            nuevamente.
          </p>
        </Alert>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
