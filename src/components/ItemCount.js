import '../styles/ItemCount.css'
import React, { useState } from 'react';
import {  Button } from 'react-bootstrap'
import { UseCart } from '../provider/CartContext';


const ItemCount = ({ stock, inicio, productObj }) => {
  const [count, setCount] = useState(inicio);
  const {AddToCart} = UseCart()

  let cartProds = {
    id:productObj.id,
    product: productObj.title,
    precio:productObj.price,
    cantidad: count
  }

  function aumentarContador() {
   
    if (count < stock)  setCount(count + 1);
  }

  function disminuirContador() {
   
    if (count > inicio){
      setCount(count - 1);
  }}


  return (
    <div className="oneCount">
      <button className="botonesContador" onClick={aumentarContador}>+</button>
      <label className="cantidad">{count}</label>
      <button className="botonesContador" onClick={disminuirContador}>-</button>
      {(count>0) ? <Button className="boton" onClick={()=>{AddToCart(cartProds)}}>Comprar</Button> : console.log('0 seleccionados') }
    </div>
  );
};

export default ItemCount