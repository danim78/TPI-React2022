import { useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import NewsCard from "./NewsCard";
import { useParams } from "react-router-dom";

function NewsList({busqueda, onSubmit}) {

  console.log(busqueda);

  const [loading, setLoading] = useState(true);
  /* const [busqueda, setBusqueda] = useState("argentina"); */
  const [apiKey, setApikey] = useState("0561e0a335d84221ae241cf50f789998");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [datos, setDatos] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [error, setError] = useState(null);


  // https://newsapi.org/v2/everything?q=bitcoin&apiKey=0561e0a335d84221ae241cf50f789998&page=1&pageSize=2

  /* let { busqueda } = useParams(); */

  useEffect(() => {
    /* setBusqueda(busqueda); */
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=es`
      )
      .then((response) => {
        setDatos([...datos, ...response.data.articles]);
        setTotalResults(...datos, response.data.totalResults)
        setLoading(false);
      });
  }, [busqueda, page]);
  
  const cargarMas = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  if(loading){
    return(
        <div className="py-5">
         <div className="container">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
         </div>
        </div>
    )
  }

  return (
    <>
    <h7>Está viendo {pageSize} noticias de {totalResults} resultados</h7>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
            {datos && datos.length > 0 ? (
              datos.map((item) => {
                return (
                  <div className="row-md-4">
                    <NewsCard item={item}></NewsCard>
                  </div>
                );
              })
            ) : (
              <Alert>No hay elementos</Alert>
            )}
          </div>
          {loading ? (
            <Button variant="success" disabled={true}>
              {" "}
              Cargando ...
            </Button>
          ) : (
            <Button variant="success" onClick={cargarMas}>
              {" "}
              Cargar más... +
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsList
