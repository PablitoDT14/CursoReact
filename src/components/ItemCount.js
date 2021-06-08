import './ItemCount.css'
import React, { useState } from 'react';


const ItemCount = ({stock, inicio}) => {
  const [count, setCount] = useState(inicio);

  function aumentarContador() {
    if (count<stock) setCount(count + 1);
  }

  function disminuirContador() {
    if (count>inicio) setCount(count -1);
  }
  return (
    <div>
      <button className="botonesContador" onClick={aumentarContador}>+</button>
      <label className="cantidad">{count}</label>
      <button className="botonesContador" onClick={disminuirContador}>-</button>
    </div>
  );
};

export default ItemCount