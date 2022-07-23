import { useCallback, useEffect, useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import axios from "axios";
import NewsCard from "./NewsCard";
import { useParams } from "react-router-dom";
import axiosClient from '../../api/axiosClient'
import { Table } from "react-bootstrap"
import Paginator from "../Paginator";
import 'bootstrap/dist/css/bootstrap.min.css'

function NewsList({busqueda, onSubmit}) {

  console.log(busqueda);

/*   const [loading, setLoading] = useState(true);
  /* const [busqueda, setBusqueda] = useState("argentina"); */
  /*const [apiKey, setApikey] = useState("afc07f6d21a14296aadfc1a7a20f1bb1");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [datos, setDatos] = useState([]);
  const [totalResults, setTotalResults] = useState(null);
  const [error, setError] = useState(null); */


  // https://newsapi.org/v2/everything?q=bitcoin&apiKey=0561e0a335d84221ae241cf50f789998&page=1&pageSize=2

  /* let { busqueda } = useParams(); */

  //useEffect(() => {
    /* setBusqueda(busqueda); */
    /* axios
      .get(
        `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=${apiKey}&page=${page}&pageSize=${pageSize}&language=es`
      )
      .then((response) => {
        setDatos([...datos, ...response.data.articles]);
        setTotalResults(response.data.totalResults)
        setLoading(false);
      });
  }, [busqueda, page]); */

  const [loading, setLoading] = useState(true);
  const apiKey = "afc07f6d21a14296aadfc1a7a20f1bb1"
  const [q, setQ] = useState("null");
  const [datos, setDatos] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(3);
  const [totalResults, setTotalResults] = useState(null);
  const totalPage = (Math.floor(totalResults / pageSize))
  const language = "es"

  useEffect(() => {
    const fetchDatos = async () => {
      try {
        const res = await axiosClient.get("everything", 
        { params: {q,  apiKey, page, pageSize, language}})
        console.log(res);
        /* setDatos({datos: res.data, articles: res.articles}) */
        setDatos([...datos, ...res.articles]);
        setTotalResults(res.totalResults);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDatos()
  }, [q, page])

  const handleChangePage = useCallback((page) => {
    setPage(page)
  }, [])
  
  const cargarMas = (e) => {
    e.preventDefault();
    /* setPage(page + 1); */
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
      <div className="mb-3 d-flex flex-row p-2 bg-primary text-white">
        Está viendo {pageSize * page} noticias de {totalResults} resultados
      </div>
        <div>
          <div className="container">
            <div className="row hidden-md-up">
              {datos && datos.length > 0 ? (
                datos.map((item, index) => {
                  return (
                    <div key={index} className="row-md-4">
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
          <div>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Título</th>
                </tr>
              </thead>
              <tbody>
                {datos && datos.length > 0 && datos.map((articles, index) => (
                  <tr key={index}>
                    <td>{(page - 1) * 10 + (index + 1)}</td>
                    <td>{articles.title}</td>
                  </tr>
                ))}
              </tbody>          
            </Table>
            {
              totalPage > 1 && (
                <Paginator
                  total={totalPage}
                  current={page}
                  onChangePage={handleChangePage}
                />
              )
            }
          </div>
        </div>
    </>
  );
}

export default NewsList
