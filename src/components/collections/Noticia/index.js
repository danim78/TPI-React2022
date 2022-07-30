import NewsCard from "../NewsCard";
import { Alert } from "react-bootstrap";
import "./Noticia.css";

function Noticia({
  page,
  pageSize,
  noticias,
  totalResults,
  maxResults,
}) {
  const noticiasFinales = totalResults - pageSize * (page - 1);
  const messageResults = () => {
    if (totalResults) {
      return (
        <div className="container-tag">
          Está viendo{" "}
          {totalResults > pageSize * page ? pageSize : noticiasFinales} noticias
          de {totalResults} resultados.
        </div>
      );
    }
  };

  const messageAlert = () => {
    if (maxResults) {
      return "Limite de cuenta developer.";
    }
    return "No se encontraron noticias relacionadas.";
  };

  return (
    <>
      <div className="container noticia" role="news">
        <div className="container-info">{messageResults()}</div>
        {noticias && noticias.length > 0 ? (
          noticias.map((item, index) => {
            return <NewsCard item={item} key={index} />;
          })
        ) : (
          <div className="container-alert">
          <Alert variant="danger">{messageAlert()}</Alert>
          </div>
        )}
      </div>
    </>
  );
}

export default Noticia;
