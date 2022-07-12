import {Card, Button, Container, Col, Row} from 'react-bootstrap';

function NewsCard({ item }) {
  return (
    <>
      <Card border="primary" style={{ width: '78rem' }}>      
        <Card.Body>
          <Container>
            <Row>
              <Col xs={9}>        
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
                <Button variant="primary" href={item.url}>Ver noticia</Button>
              </Col> 
              <Col >
                <Card.Img variant="right" src={item.urlToImage} width="150" height="150"/>
              </Col>
            </Row>
          </Container>
        </Card.Body>  
    </Card>
    </>
  )
}

export default NewsCard;