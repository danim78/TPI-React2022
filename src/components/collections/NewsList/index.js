import { useEffect, useState } from "react";
import { Alert, Button } from "react-bootstrap";
import axios from "axios";
import NewsCard from "../NewsCard";

function NewsList(props) {
  console.log(props.busqueda);
  const [loading, setLoading] = useState(false);
  const [busqueda, setBusqueda] = useState("argentina");
  const [apiKey, setApikey] = useState("0561e0a335d84221ae241cf50f789998");
  const [page, setPage] = useState(1);
  const [pageSize, setPagesize] = useState(2);
  const [datos, setDatos] = useState([]);
  const [error, setError] = useState(null);

  // https://newsapi.org/v2/everything?q=bitcoin&apiKey=0561e0a335d84221ae241cf50f789998&page=1&pageSize=2

  const peticionGet = async () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=es`
      )
      .then((response) => {
        setDatos([...datos, ...response.data.articles]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
      });
  };

  useEffect(() => {
    peticionGet();
  }, [page]);

  const cargarMas = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
            {datos && datos.length > 0 ? (
              datos.map((item, index) => {
                const key = `item-${index}`;
                return (
                  <div className="row-md-4" key={key}>
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
            <Button variant="bt btn-lg btn-dark" onClick={cargarMas}>
              {" "}
              Cargar más
            </Button>
          )}
        </div>
      </div>
    </>
  );
}

export default NewsList;
