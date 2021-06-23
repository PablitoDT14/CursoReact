import '../styles/ItemListContainer.css'
import React, {useContext} from 'react'
import ItemList from '../components/ItemList'
import {DataContext} from '../App'


function ItemListContainer() {
    const saludo = useContext(DataContext)
    console.log(saludo)
    return (
        <div>
            <h2>PRODUCTOS</h2>
            <ItemList />
        </div>
    )
}

export default ItemListContainer