import { Card, Button, Container, Col, Row } from "react-bootstrap";

function NewsCard({ item }) {
  return (
    <>
      <Card border="dark" style={{ width: "80rem" }}>
        <Card.Body>
          <Container>
            <Row>
              <Col xs={9}>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="dark" href={item.url}>
                  Ver noticia
                </Button>
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
    </>
  );
}

export default NewsCard;
