import NewsCard from "../NewsCard";
import { Alert } from "react-bootstrap";

function Noticia({ noticias }) {
  return (
    <>
      <div className="container">
        <div className="row">
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
