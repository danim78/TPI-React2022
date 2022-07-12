import {Card, Button} from 'react-bootstrap';

function NewsCard({ item }) {
  return (
    <>
   
    <Card style={{ width: '58rem' }}>      
        <Card.Body style={{ width: '38rem' }}>
        <span>        
          <Card.Title>{item.title}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
          <Button variant="primary" href={item.url}>Ver noticia</Button>
        </span> 
        <span>
          <Card.Img variant="right" src={item.urlToImage} width="150" height="150"/>
        </span>
        </Card.Body>  
    </Card>
    </>
  )
}

export default NewsCard;