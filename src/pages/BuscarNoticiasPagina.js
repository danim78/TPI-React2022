import { useState } from "react";
import Header from "../components/Header";
import NewsList from "../components/collections/NewsList";
import Buscador from "../components/general/buscador";

function BuscarNoticiasPagina() {
  const [busqueda, setBusqueda] = useState("bitcoin");

  const onBuscar = (criterio) => {
    setBusqueda(criterio);
  };

  return (
    <>
      <Header />
      <Buscador onBuscar={onBuscar} />
      <NewsList busqueda={busqueda} />
    </>
  );
}

export default BuscarNoticiasPagina;
