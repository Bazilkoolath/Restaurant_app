import React from 'react'
import {Card,ListGroup} from 'react-bootstrap' 
import { Link } from 'react-router-dom'


function Homecard({data1}) {
  return (
   <Link to={`restaurantdetails/${data1.id}`}>
    <Card style={{ width: '18rem',padding:'5px'}}>
    <Card.Img variant="top" src={data1.photograph }/>
    <Card.Body>
      <Card.Title>{data1.name}</Card.Title>
      <Card.Text>
      </Card.Text>
    </Card.Body>
    <ListGroup className="list-group-flush">
      <ListGroup.Item>Address : {data1.address}</ListGroup.Item>
      <ListGroup.Item>Locatin : {data1.neighborhood}</ListGroup.Item>
    </ListGroup>
  </Card>
   </Link>
  )
}

export default Homecard