import React, {useContext, useState, createContext} from 'react'
const CartContext = createContext()

export function UseCart() {
    return useContext(CartContext)
    }

    export function CartProvider({carrito}){
        const [cart, setCart] = useState([])
        function AddToCart(obj){
            setCart({...cart,obj})
            console.log(obj)
        }
        return (
            <CartContext.Provider value={{cart, AddToCart}}>
                {carrito}
            </CartContext.Provider>
        )
    }

