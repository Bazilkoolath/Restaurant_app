import React from 'react'
import { useEffect,useState } from 'react'
import {Col,Row} from 'react-bootstrap'
import Homecard from './Homecard'
import { useDispatch, useSelector } from 'react-redux'
import {listRestaurent} from '../actions/restaurentActions'

function Home() {

  let dispatch=useDispatch()
  let hotels=useSelector(state=>state.hotelListReducer)
  const {restaurent}=hotels
  useEffect(()=>{
    dispatch(listRestaurent())
  },[])
 console.log('datas:',hotels);
    // let [restuarent,setrestuarent]=useState([])
    // useEffect(() => {
    //     const fetchdata = async()=>{
    //         await fetch('/restaurants.json')
    //         .then((res)=>res.json())
    //         .then((data)=>setrestuarent(data.restaurants))
    //     }
    //     fetchdata()
    // },[])
    // console.log('',hotels);
    

  return (
    <Row>
    {
      restaurent.map(item=>(
        <Col lg={6} xl={3}>
          <Homecard data1={item}/>
        </Col>
      ))
    }
    
    </Row>
  )
}

export default Home