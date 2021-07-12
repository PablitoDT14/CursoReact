import { UseCart } from '../provider/CartContext'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroupItem } from 'react-bootstrap'
import { getFireStore } from '../DB/dbConection'
import '../styles/CartContent.css'


function CartContent() {
  const { cart } = UseCart()
  const db = getFireStore()
  const orderCollection = db.collection("orders")
  let total = 0

  if (cart.length > 0) {
    function sendOrder(total) {
      const carrito = {
        cliente: 'Pablo',
        cantidadItems: cart.length,
        totalCarro: total
      }
      console.log(carrito)
      orderCollection.add(carrito).catch(e => { console.log(e) }).finally(console.log('THE END'))
    }

    const carro = cart.map((item, index) => {
      total = total + item.total
      return (
        <Card key={item.id} style={{ width: '12rem' }}>
          <Card.Img variant="top" style={{ 'width': '180px', 'height': '100px', 'objectFit': 'scale-down' }} className="imagen" src={item.image} alt='   Imagen no disponible' />
          <div className="division">
            <ListGroupItem className="precio">{item.cantidad} x ${item.precio} = ${item.total}</ListGroupItem>
          </div>
        </Card>
      )
    })

    return (
      <div>
        {carro}
        <ListGroupItem className="precio">Total del carrito ${total}</ListGroupItem>
        <Link to="/exito"><button onClick={() => sendOrder(total)}>Finalizar Compra</button></Link>
      </div>
    )
  }
  else {
    return (
      <div>

        <p>Carrito vacio - Diseñar Página</p>

      </div>
    )
  }

}

export default CartContent