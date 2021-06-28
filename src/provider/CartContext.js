import React, {useContext, useState, createContext} from 'react'
const CartContext = createContext()

export function UseCart() {
    return useContext(CartContext)
    }

    export function CartProvider({children}){
        const [cart, setCart] = useState([])
        function AddToCart(obj){
            for (const objs of cart) {
                if(objs.id===obj.id){
                    console.log('el objeto ya existe ')
                }
                else{
                    console.log('el objeto aun no existe')
                }
            }
            setCart([...cart,obj])
        }

        console.log(cart)

        return (
            <CartContext.Provider value={{cart, AddToCart}}>
                {children}
            </CartContext.Provider>
        )
    }

