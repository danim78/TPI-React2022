import { useEffect, useState } from "react";
import { getNoticias } from "../../../services/noticias";
import Loading from "../../general/loading";
import Paginado from "../../general/paginado";
import Noticia from "../Noticia";

// const Noticias = (noticias) => {
//   return (
//     <section className="lista-noticias">
//       {noticias && noticias.map((val, index) => <Noticia item={val} key={index} />)}
//     </section>
//   );
// };

const NewsList = ({ busqueda }) => {
  const [loading, setLoading] = useState(false);
  const [noticias, setNoticias] = useState([]);
  // const [page, setPage] = useState(1);
  // const [pageSize, setPagesize] = useState(2);
  // const [error, setError] = useState(null);

  const getNoticiasDesdeServicio = async (busqueda) => {
    setLoading(true);
    const respuesta = await getNoticias(busqueda);
    setNoticias(respuesta.articles);
    setLoading(false);
  };

  useEffect(() => {
    getNoticiasDesdeServicio(busqueda);
  }, [busqueda]);

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
