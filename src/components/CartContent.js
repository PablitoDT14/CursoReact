import React from 'react'
import { UseCart } from '../provider/CartContext'

function CartContent() {
    const {cart} = UseCart()
    return (
        <div>
            <p>Carrito</p>
            {console.log(cart)}
        </div>
    )
}

export default CartContent
