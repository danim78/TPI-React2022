import { useEffect, useState } from "react";
import { getNoticias } from "../../../services/noticias";
import Loading from "../../general/loading";
import Paginado from "../../general/paginado";
import Noticia from "../Noticia";

const NewsList = ({ busqueda }) => {
  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalResults, setTotalResults] = useState(0);
  const [maxResults, setMaxResults] = useState(false);
  const totalPages = Math.round(totalResults / pageSize);

  const getNoticiasDesdeServicio = async (busqueda, page, pageSize) => {
    setLoading(true);
    const respuesta = await getNoticias(busqueda, page, pageSize);
    setNoticias(respuesta.articles);
    setTotalResults(respuesta.totalResults);
    setMaxResults(false);
    if (respuesta.code === "maximumResultsReached") setMaxResults(true);
    setLoading(false);
  };

  useEffect(() => {
    setPage(1);
  }, [busqueda]);

  useEffect(() => {
    if (busqueda) {
      getNoticiasDesdeServicio(busqueda, page, pageSize);
    }
  }, [page, busqueda]);

  if (loading) {
    return <Loading />;
  }
  
  return (
    <>
      <Noticia
        noticias={noticias}
        pageSize={pageSize}
        totalResults={totalResults}
      />
      <Paginado
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        maxResults={maxResults}
      />
    </>
  );
};

export default NewsList;
