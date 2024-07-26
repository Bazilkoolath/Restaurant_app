import React from 'react'

function Reviews({item}) {
  return (
    item.map(data=>
        <div>
    <h4>NAME :{data.name}</h4>3
    <p>DATE :{data.date}</p>
    <p>RATING :{data.rating}</p>
    <p>COMMENT :{data.comments}</p>
    
   
    </div>
    )
    
  )
}

export default Reviews