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