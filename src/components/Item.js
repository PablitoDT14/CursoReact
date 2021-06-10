import React from 'react'
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap'

function Item({title, description, price, pictureURL}){
return(
  <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={pictureURL} />
    <Card.Body>
      <Card.Title>
          {title}
      </Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroupItem>${price}</ListGroupItem>
    </ListGroup>
    <Card.Body>
      <Card.Link href="#">Ver Item</Card.Link>
      <Card.Link href="#">Comprar</Card.Link>
    </Card.Body>
  </Card>
)}

export default Item