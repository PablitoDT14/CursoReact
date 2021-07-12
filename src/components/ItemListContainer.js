import '../styles/ItemListContainer.css'
import React from 'react'
import ItemList from '../components/ItemList'
import Categories from './Categories'


function ItemListContainer() {
    return (
        <div>
            <div className="sections">
                <h2 className="titulo">PRODUCTOS</h2>
                <Categories/>
            </div>

            <ItemList />
        </div>
    )
}

export default ItemListContainer