import React from 'react'
import { UseCart } from './CartContext'

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
