import '../styles/ItemDetail.css'
import React, { useEffect, useState } from 'react'
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { getFireStore } from '../DB/dbConection'



function ItemDetail({ id }) {
    const [producto, setProducto] = useState([]);
    useEffect(() => {
        const db = getFireStore()
        const itemCollection = db.collection("items")
        console.log(id)
        const item = itemCollection.where('id', '==', parseInt(id))
        item.get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                console.log('No results')
            }
            setProducto(querySnapshot.docs.map(doc => doc.data()))

        }).catch((error) => {
            console.log('Error searching items', error)
        })
    }, [])

    return (
        <div>
            {producto !== null ? (
                producto.map((producto, index) => {
                    return (
                        <div key={producto.id} className="cardDet">
                            <Card style={{ width: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>{producto.name}</Card.Title>
                                </Card.Body>
                                <Card.Img variant="top" src={producto.image} />

                                <ListGroup className="list-group-flush">
                                    <ListGroupItem className="precio">${producto.price}</ListGroupItem>
                                </ListGroup>
                                <Card.Text className="details">{producto.description}</Card.Text>
                                <ItemCount stock={20} inicio={0} productObj={producto} />
                            </Card>

                        </div>
                    )
                })) : (console.log('Loading'))}
        </div>
    )
}
export default ItemDetail