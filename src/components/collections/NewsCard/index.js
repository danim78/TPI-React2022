import { Card, Container, Col, Row } from "react-bootstrap";
import "./NewsCard.css";

function NewsCard({ item }) {
  return (
    <>
    <div className="row-md-4">
      <Card border="dark" style={{ width: "80rem" }}>
        <Card.Body>
          <Container>
            <Row className="card-noticia">
              <Col xs={9}>
                <Card.Title id="card-title"><a href={item.url} target="_blank">{item.title}</a></Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Col>
              <Col>
                <Card.Img
                  variant="right"
                  src={item.urlToImage}
                  width="250rem"
                />
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
