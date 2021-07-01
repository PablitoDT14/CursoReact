import React, {useContext, useState, createContext} from 'react'
const CartContext = createContext()

export function UseCart() {
    return useContext(CartContext)
    }

    export function CartProvider({children}){
        const [cart, setCart] = useState([])

        function IsInCart(obj) {
            let isInCart = false;
            for (let i = cart.length - 1; i >= 0; i--) {
                isInCart = cart[i].id === obj.id;
                if (isInCart) { break;}
            }
            return isInCart;
        }

        function AddToCart(obj){
            if (!IsInCart(obj)){
                setCart([...cart,obj])
            }
            else {
                for (var i = cart.length - 1; i >= 0; i--) {
                  if (cart[i].id === obj.id) {
                    cart[i].cantidad = cart[i].cantidad + obj.cantidad;
                    cart[i].total= cart[i].precio * cart[i].cantidad;
                    setCart([...cart]);
                  }
                }
              }
        }

        console.log(cart)

        return (
            <CartContext.Provider value={{cart, AddToCart}}>
                {children}
            </CartContext.Provider>
        )
    }