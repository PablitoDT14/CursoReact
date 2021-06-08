import './ItemCount.css'
import React, { useState } from 'react';


const ItemCount = ({stock, inicio}) => {
  let initial = parseInt(inicio)
  let stockCount = parseInt(stock)
  const [clicks, setClicks] = useState(initial);

  function aumentarContador() {
    if (clicks<stockCount) setClicks(clicks + 1);
  }

  function disminuirContador() {
    if (clicks>initial) setClicks(clicks -1);
  }
  return (
    <div>
      <button class="botonesContador" onClick={aumentarContador}>+</button>
      <label class="cantidad">{clicks}</label>
      <button class="botonesContador" onClick={disminuirContador}>-</button>
    </div>
  );
};

export default ItemCount