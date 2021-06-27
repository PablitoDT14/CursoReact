import '../styles/ItemCount.css'
import React, { useState } from 'react';
import {  Button } from 'react-bootstrap'
import { UseCart } from './CartContext';


const ItemCount = ({ stock, inicio, product }) => {
  const [count, setCount] = useState(inicio);
  const {AddToCart} = UseCart()
  let productObj = product;

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
      {(count>0) ? <Button className="boton" onClick={()=>{AddToCart(productObj)}}>Comprar</Button> : console.log('no hay boton') }
    </div>
  );
};

export default ItemCount