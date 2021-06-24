import '../styles/ItemList.css'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'



function Item() {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=10')
      .then((res) => res.json())
      .then((res) => setProductos(res))
  }, []);
  return (
    <div className="oneCard">
      {productos !== null ? (
        productos.map((producto, index) => {
          return (
            <div key={producto.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{'width':'300px', 'height':'300px', 'object-fit':'scale-down'}} src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="precio">${producto.price}</ListGroupItem>
                </ListGroup>
                <Card.Body className="details">
                  <Link  to={`/products/${producto.id}`}>Detalles</Link>
                </Card.Body>
              </Card>
            </div>
          )
        })) : (console.log('Loading'))}
    </div>
  )
}

export default Item