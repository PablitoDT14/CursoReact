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
            let cat = []
            const base = querySnapshot.docs.map(doc => doc.data());
            for (const it of base) {
                cat.push(it.category)
            }
            let conjuntoUnico = Array.from(new Set(cat));
            setCategorias(conjuntoUnico)
        }).catch((error) => {
            console.log('Error searching items', error)
        })
    }, [])


    return (
        <div>
            <select className="seleccion" id="seleccion" name="seleccion">
                <option value="0">Todos los productos</option>
                {categorias !== null ? (
                    categorias.map((categoria, index) => {
                        return (
                            <option key={categoria.index} value={categoria}>{categoria}</option>
                        )
                    })) : (console.log('Loading'))}
            </select>
        </div>
    )
}

export default Categories
