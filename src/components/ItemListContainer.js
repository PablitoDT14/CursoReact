import React from 'react'
import ItemCount from './ItemCount';

function ItemListContainer({greeting}) {
    return (
        <div>
            <h2>{greeting}</h2>
            <ItemCount stock='20' inicio='1' />
        </div>
    )
}

export default ItemListContainer