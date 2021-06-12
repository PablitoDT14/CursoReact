import './ItemList.css'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import ItemCount from './ItemCount'

function Item2() {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=4')
      .then((res) => res.json())
      .then((res) => setProductos(res))
  }, []);
  return (
    <div className="oneCard">
      {productos !== null ? (
        productos.map((producto, index) => {
          return (
            <div key={index} className="card">
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Text>{producto.description}</Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>${producto.price}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link href="#">Ver Item</Card.Link>
                  <Card.Link href="#">Comprar</Card.Link>
                </Card.Body>
                <ItemCount/>
              </Card>
            </div>
            )
        })) : (console.log('Loading'))}
    </div>
  )
}

export default Item2