import '../styles/ItemListContainer.css'
import React from 'react'
import ItemDetail from './ItemDetail'
import {useParams} from 'react-router-dom'


function ItemDetailContainer() {
    const {id} = useParams()
    return (
        <div>
            <ItemDetail id={id} />
        </div>
    )
}

export default ItemDetailContainer