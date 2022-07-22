import { useEffect, useState } from "react";
import { getNoticias } from "../../../services/noticias";
import Loading from "../../general/loading";
import Paginado from "../../general/paginado";
import Noticia from "../Noticia";

const NewsList = ({ busqueda }) => {
  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(10);

  const getNoticiasDesdeServicio = async (busqueda, page, pageSize) => {
    setLoading(true);
    const respuesta = await getNoticias(busqueda, page, pageSize);
    setNoticias(respuesta.articles);
    setLoading(false);
  };

  useEffect(() => {
    getNoticiasDesdeServicio(busqueda, page, pageSize);
  }, [busqueda] || [page] || [pageSize]);

  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <Noticia noticias={noticias} />
      <Paginado />
    </>
  );
};

export default NewsList;
