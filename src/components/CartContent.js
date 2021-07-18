import { UseCart } from '../provider/CartContext'
import React from 'react'
import { Link } from 'react-router-dom'
import { Card, ListGroupItem } from 'react-bootstrap'
import { getFireStore } from '../DB/dbConection'
import '../styles/CartContent.css'
import EmptyCart from '../assets/empty-cart.gif'


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
      orderCollection.add(carrito).catch(e => { console.log(e) })
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
      <section>
        <div className="not_found"><img src={EmptyCart} alt='carrito de compras' /></div>
        <div className="not_found"><h1>Haz feliz al carrito 💸</h1></div>
        <div className="not_found"><h2>Accedé al <Link className="linkeado" to="/">Home</Link> y aprovechá las ofertas</h2></div>
      </section>
    )
  }

}

export default CartContent