import { Card, Container, Col, Row } from "react-bootstrap";
import "./NewsCard.css";

function NewsCard({ item }) {
  const getPublished = (date) => {
    let dia = date.slice(8, 10);
    let mes = date.slice(5, 7);
    let año = date.slice(0, 4);
    let hora = date.slice(11, 16);

    return `Publicado el: ${dia}-${mes}-${año} a las ${hora} hs`;
  };

  return (
    <>
      <div className="row">
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
