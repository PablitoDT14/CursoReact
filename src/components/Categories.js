import React, { useEffect, useState } from 'react'
import { getFireStore } from '../DB/dbConection'
import '../styles/ItemListContainer.css'

function Categories() {
    const [categorias, setCategorias] = useState(null);
    useEffect(() => {
        const db = getFireStore()
        const itemCollection = db.collection("items")
        itemCollection.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            setCategorias(querySnapshot.docs.map(doc => doc.data()))
        }).catch((error) => {
            console.log('Error searching items', error)
        })
    }, [])


    return (
        <div>
            <select className="seleccion">
            <option value="">Seleccioná una opción...</option>
                {categorias !== null ? (
                    categorias.map((categoria, index) => {
                        return (
                            <option key={categoria.id} value={categoria.category}>{categoria.category}</option>
                        )
                    })) : (console.log('Loading'))}
            </select>
        </div>
    )
}

export default Categories
