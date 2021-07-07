import '../styles/ItemList.css'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import ItemCount from './ItemCount'
import {getFireStore} from '../DB/dbConection'



function ItemDetail({id}) {
    const [producto, setProducto] = useState([]);
    useEffect(()=>{
        const db = getFireStore()
        const itemCollection = db.collection("items")
        console.log(id)
        const item = itemCollection.where('id', '==', id)
        item.get().then((querySnapshot) => {
            if (querySnapshot.size ===0){
                console.log('No results')
            }
            setProducto(querySnapshot.docs.map(doc => doc.data()))
            
        }).catch((error)=>{
            console.log('Error searching items', error)
        })
    }, [])
    
    return (
        <div key={producto.id} className="card">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={producto.image} />
                <Card.Body>
                    <Card.Title>{producto.name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>${producto.price}</ListGroupItem>
                </ListGroup>
                <Card.Text>{producto.description}</Card.Text>
                <ItemCount stock={20} inicio={0} productObj={producto}/>
            </Card>

        </div>
    )
}
export default ItemDetail