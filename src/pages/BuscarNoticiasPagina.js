import Header from "../components/Header";
import { useState } from "react";
import NewsList from "../components/collections/NewsList";

function BuscarNoticiasPagina() {
  const [busqueda, setBusqueda] = useState("");

  const onBuscar = (criterio) => {
    setBusqueda(criterio);
  };

  return (
    <>
      <Header onBuscar={onBuscar}/>
      <NewsList busqueda={busqueda} />
    </>
  );
}

export default BuscarNoticiasPagina;
