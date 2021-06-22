import React from 'react'
import {Card, ListGroup,ListGroupItem} from 'react-bootstrap'

function Item2({title, description, price, pictureURL}){
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
  </Card>
)}

export default Item2