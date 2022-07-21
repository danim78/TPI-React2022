import NewsCard from "../NewsCard";
import { Alert } from "react-bootstrap";

function Noticia({ noticias }) {
  return (
    <>
      <div className="py-5">
        <div className="container">
          <div className="row hidden-md-up">
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
      </div>
    </>
  );
}

export default Noticia;
