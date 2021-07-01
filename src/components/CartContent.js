import React, {useState} from 'react'
import { UseCart } from '../provider/CartContext'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'

function CartContent() {
    const {cart} = UseCart()
    let total = 0
    if(cart.length>0){
        const carro= cart.map((item, index)=>{
        total = total+item.total
        return(
        <Card style={{ width: '18rem' }}>
                       <Card.Img variant="top" style={{'width':'100px', 'height':'100px', 'objectFit':'scale-down'}} src={item.image} alt='   Imagen no disponible' />
                       <Card.Title>{item.product}</Card.Title>
                       <Card.Body>
                         <ListGroupItem className="precio">Cantidad: {item.cantidad}</ListGroupItem>
                         <ListGroupItem className="precio">Precio unitario: ${item.precio}</ListGroupItem>
                       </Card.Body>
                       <ListGroup className="list-group-flush">
                         <ListGroupItem className="precio">Total: ${item.total}</ListGroupItem>
                       </ListGroup>
                     </Card>
        )})
    return(
      <div>
        {carro}
        <ListGroupItem className="precio">Total del carrito {total}</ListGroupItem>
      </div>
    )
    }
    else{
        return (
            <div>
                
                <p>Carrito vacio - Diseñar Página</p>
                
            </div>
        )
    }
    
}

export default CartContent