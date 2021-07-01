import React from 'react'
import { UseCart } from '../provider/CartContext'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function CartContent() {
    const {cart} = UseCart()
    if(cart.length>0){
        console.log(cart)
        for(let i=0;i<=cart.length;i++) { 
          console.log(i)
          return (
              <div key={cart[i].id}>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" style={{'width':'100px', 'height':'100px', 'objectFit':'scale-down'}} src={cart[i].image} alt='   Imagen no disponible' />
                  <Card.Title>{cart[i].product}</Card.Title>
                  <Card.Body>
                    <ListGroupItem className="precio">Cantidad: {cart[i].cantidad}</ListGroupItem>
                    <ListGroupItem className="precio">Precio unitario: ${cart[i].precio}</ListGroupItem>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroupItem className="precio">Total: ${cart[i].total}</ListGroupItem>
                  </ListGroup>
                </Card>
              </div>
            )
    }}
    else{
        return (
            <div>
                
                <p>Carrito vacio - Diseñar Página</p>
                
            </div>
        )
    }
    
}

export default CartContent