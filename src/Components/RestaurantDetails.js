import React from 'react'
import{useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {Col,Row,Image,ListGroup,Card} from 'react-bootstrap'
import Reviews from './Reviews'
import { useSelector } from 'react-redux'


function RestaurantDetails() {
  //let [Restaurent,setrestuarent]=useState([])
  const {id}=useParams()

  let detainsPage=useSelector(state=>state.hotelListReducer)
  let {restaurent}=detainsPage
  // useEffect(() => {
  //     const fetchdata = async()=>{
  //         await fetch('/restaurants.json')
  //         .then((res)=>res.json())
  //         .then((data)=>setrestuarent(data.restaurants))
  //     }
  //     fetchdata();
  // },[])


  let detail = restaurent.find((item)=>item.id==id)



  return (
  <>
  {detail ? (
    <Row>
      <Col>
      <Image style={{ width: '18rem',padding:'5px'}} variant="top" src={detail.photograph } alt={detail.name} fluid/>
      </Col>
      <Col>
      <h1>{detail.name}</h1>
      <ListGroup.Item>
    <p>Monday   : {detail.operating_hours.Monday}</p>
    <p>Tusday   : {detail.operating_hours.Monday}</p>
    <p>Wenesday : {detail.operating_hours.Monday}</p>
    <p>Thersday : {detail.operating_hours.Monday}</p>
    <p>Friday   : {detail.operating_hours.Monday}</p>
    <p>Saterday : {detail.operating_hours.Monday}</p>
   </ListGroup.Item>
   <h5>Address:{detail.address}</h5>
      </Col>

    <Card>
      <h3>REVIEWS FROM COUSTOMER</h3>
      <Reviews item={detail.reviews}/>
    </Card>
  
    </Row>

  ):"null"}
  </>
  )
}

export default RestaurantDetails