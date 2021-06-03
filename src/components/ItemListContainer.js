//dentro del app.js, debajo de la navbar, tiene que llevar una propiedad llamada greeting
//y eso debe tener un saludo que va a renderizar el saludo
import React from 'react'

function ItemListContainer(props){
    return(
        <div>
            <h2>{props.greeting}</h2>
        </div>
    )
}

export default ItemListContainer