import '../styles/ItemList.css'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'



function ItemDetail() {
    const [productos, setProductos] = useState({});
    let {id} = useParams()
    
    useEffect(() => {
    const getProduct = async ()=>{
        try{
            const product = await fetch(`https://fakestoreapi.com/products/${id}`)
            const res = await product.json()
            setProductos(res)
        }
        catch(error){
            console.log('console.error();')
        }
    }
    getProduct()
},[])
  
    return (
        <div key={productos.id} className="card">
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={productos.image} />
                                <Card.Body>
                                    <Card.Title>{productos.title}</Card.Title>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                    <ListGroupItem>${productos.price}</ListGroupItem>
                                </ListGroup>
                                <Card.Text>{productos.description}</Card.Text>
                            </Card>
                        </div>
    )
}
export default ItemDetail