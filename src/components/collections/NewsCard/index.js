import { Card, Container, Col, Row } from "react-bootstrap";
import "./NewsCard.css";

function NewsCard({ item }) {
  return (
    <>
      <div className="row">
        <Card border="dark" style={{ width: "75rem" }}>
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
