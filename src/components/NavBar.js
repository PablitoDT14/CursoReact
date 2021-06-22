import '../styles/navbar.css'
import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from '../assets/carrito.png'


function NavBar() {
  return (
    <nav className='navigation'>
      <ul>
        <li>
          <Link to="/">Pablo Aguirre IT</Link>
        </li>
      </ul>
      <img src={CartWidget} className='carrito' />
    </nav>
  )
}

export default NavBar
