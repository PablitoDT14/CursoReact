import '../styles/ItemCount.css'
import React, { useState } from 'react';
import {  Button } from 'react-bootstrap'


const ItemCount = ({ stock, inicio }) => {
  const [count, setCount] = useState(inicio);

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
      {(count>0) ? <Button className="boton">Comprar</Button> : console.log('no hay boton') }
    </div>
  );
};

export default ItemCount