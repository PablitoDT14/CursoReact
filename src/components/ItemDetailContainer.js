import '../styles/ItemListContainer.css'
import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'



function ItemDetailContainer() {
    let { id } = useParams()
    return (
        <div>
            <ItemDetail id={id} />
        </div>
    )
}

export default ItemDetailContainer