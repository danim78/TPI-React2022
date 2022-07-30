import { Card, Container, Col, Row } from "react-bootstrap";
import "./NewsCard.css";

function NewsCard({ item }) {
  const { DateTime } = require("luxon");

  const getPublished = (date) => {
    let dia = DateTime.fromISO(date).setZone("UTC").toFormat("dd-MM-yyyy");

    let hora = DateTime.fromISO(date).setZone("UTC").toFormat("HH:mm");

    return `Publicado el: ${dia} a las ${hora} hs`;
  };

  return (
    <>
      <div className="row" role="card">
        <Card border="dark">
          <Card.Body>
            <Container>
              <Row className="card-noticia">
                <Col xs={9}>
                  <Card.Title>
                    <a href={item.url} target="_blank">
                      {item.title}
                    </a>
                  </Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Card.Text>{getPublished(item.publishedAt)}</Card.Text>
                </Col>
                <Col xs={3}>
                  <Card.Img variant="right" src={item.urlToImage} />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default NewsCard;
