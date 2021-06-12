import './ItemList.css'
import React from 'react'
import Item from './Item'
import Productos from '../DB/productos.json'
import ItemCount from './ItemCount'


function ItemList(){
    return(
        <div className="fourCards">
            {
            Productos.map((producto, index)=>{ return(
                <div key={index} className="oneCard">
                    <Item title={producto.title} 
                    description={producto.description}
                    price={producto.price}
                    pictureURL={producto.pictureUrl}
                    />
                    <ItemCount stock={20} inicio={1} />
                </div>
            )})}
            
        </div>
    )
}

export default ItemList