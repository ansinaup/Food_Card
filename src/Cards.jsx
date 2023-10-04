
import React from 'react'

function Cards(props) {
  console.log(props)
  const{image,para,title}=props
    
  
    return (
      <>
    <div className="card">
      <div className="container">
       <img src={image} alt=""></img>

      </div>
    
    <div className="title">
      <h3>{title}</h3>
      <p>{para}</p>

    </div>
    </div>
      
      </>
    )
  }
  
  export default Cards