import React from 'react'
import Error404 from '../assets/error-404-creature.gif'
import '../styles/NotFound.css'
import {Link} from 'react-router-dom'

function NotFound() {
    return (
        <section>
            <div className="not_found"><img src={Error404} alt='carrito de compras' /></div>
            <div className="not_found"><h1>Parece que todavía no he creado esta página 😛</h1></div>
            <div className="not_found"><h2>Click <Link className="linkeado" to="/">Aquí</Link> para volver al Home</h2></div>
        </section>

    )
}

export default NotFound
