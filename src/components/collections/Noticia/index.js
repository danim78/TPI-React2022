import NewsCard from "../NewsCard";
import { Alert } from "react-bootstrap";
import "./Noticia.css"

function Noticia({noticias, pageSize, totalResults}) {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="container-tag">
            Está viendo {pageSize} noticias de {totalResults}{" "}
            resultados.
          </div>
          {noticias && noticias.length > 0 ? (
            noticias.map((item, index) => {
              return <NewsCard item={item} key={index} />;
            })
          ) : (            
            <Alert variant="danger">
              No se encontraron noticias relacionadas.
            </Alert>
          )}
          
        </div>
      </div>
    </>
  );
}

export default Noticia;
