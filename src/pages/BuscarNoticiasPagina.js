import { useState } from "react";
import Header from "../components/general/header";
import NewsList from "../components/collections/NewsList";
import Buscador from "../components/general/buscador";
import Footer from "../components/general/footer";
import "./Buscar-noticias-pagina.css"

function BuscarNoticiasPagina() {
  const [busqueda, setBusqueda] = useState("bitcoin");

  const onBuscar = (criterio) => {
    setBusqueda(criterio);
  };

  return (
    <>
      <Header />
      <div className="container-body">
        <Buscador onBuscar={onBuscar} />
        <NewsList busqueda={busqueda} />
      </div>
      <Footer />
    </>
  );
}

export default BuscarNoticiasPagina;
