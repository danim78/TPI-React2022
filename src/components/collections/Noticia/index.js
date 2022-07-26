import NewsCard from "../NewsCard";
import { Alert } from "react-bootstrap";
import "./Noticia.css";

function Noticia({ noticias, pageSize, totalResults, maxResults }) {
  const messageResults = () => {
    if (totalResults) {
      return (
        <div className="container-tag">
          Está viendo {pageSize} noticias de {totalResults} resultados.
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
      <div className="container noticia">
        <div>{messageResults()}</div>
        {noticias && noticias.length > 0 ? (
          noticias.map((item, index) => {
            return <NewsCard item={item} key={index} />;
          })
        ) : (
          <Alert variant="danger">{messageAlert()}</Alert>
        )}
      </div>
    </>
  );
}

export default Noticia;
