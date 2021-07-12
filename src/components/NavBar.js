import '../styles/navbar.css'
import { UseCart } from '../provider/CartContext'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../assets/carrito.svg'
import { Badge } from 'react-bootstrap'


function NavBar() {
  const { cart } = UseCart()
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to="/">Pablo Aguirre IT</Link>
        </li>
      </ul>
      <Link to="/carrito"><img src={CartWidget} className='carrito' alt='carrito de compras'/><Badge variant="light">{cart.length}</Badge></Link>
    </nav>
  )
}

export default NavBar
