import '../styles/ItemList.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useState } from 'react'



function ItemDetail({ id }) {
    const [productos, setProductos] = useState(null);
    
    const getProduct = async ()=>{
        try{
            const product = await fetch('https://fakestoreapi.com/products/1')
            const res = await product.json()
            setProductos(res)
        }
        catch(error){
            console.log(error)
        }
    }
    getProduct()
  
    return (
        <div className="oneCard">
                        <div key={productos.id} className="card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productos.image} />
                                <Card.Body>
                                    <Card.Title>{productos.title}</Card.Title>
                                    <Card.Text>{productos.description}</Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>${productos.price}</ListGroupItem>
                                </ListGroup>
                            </Card>
                        </div>
        </div>
    )
}
export default ItemDetail