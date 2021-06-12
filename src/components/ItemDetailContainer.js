//traer de la pokeapi una tarjeta para mostrar el detalle de la lista
import './ItemListContainer.css'
import React from 'react'
import ItemDetail from './ItemDetail'


function ItemDetailContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemDetail />
        </div>
    )
}

export default ItemDetailContainer