import '../styles/ItemList.css'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getFireStore } from '../DB/dbConection'



function Item() {
  const [productos, setProductos] = useState(null);
  useEffect(() => {
    const db = getFireStore()
    const itemCollection = db.collection("items")
    let combo = document.getElementById("seleccion");
    let selected = combo.options[combo.selectedIndex].value;
    // const category = itemCollection.where('category', '==', "Dispositivos de entrada")
    itemCollection.get().then((querySnapshot) => {
      if (querySnapshot.size === 0) {
        console.log('No results')
      }
      setProductos(querySnapshot.docs.map(doc => doc.data()))
    }).catch((error) => {
      console.log('Error searching items', error)
    })
  }, [])

  return (
    <div className="oneCard">
      {productos !== null ? (
        productos.map((producto, index) => {
          return (
            <div key={producto.id}>
              <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" style={{ 'margin-left': '1rem', 'width': '250px', 'height': '250px', 'objectFit': 'scale-down' }} src={producto.image} />
                <Card.Body>
                  <Card.Title>{producto.name}</Card.Title>
                  <Card.Subtitle>{producto.description}</Card.Subtitle>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem className="precio">${producto.price}</ListGroupItem>
                </ListGroup>
                <Card.Body className="details">
                  <Link to={`/products/${producto.id}`}>Detalles</Link>
                </Card.Body>
              </Card>
            </div>
          )
        })) : (console.log('Loading'))}
    </div>
  )
}

export default Item