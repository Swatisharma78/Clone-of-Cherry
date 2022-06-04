import React from 'react'
import Restaurent from './Restaurent'

const Restaurents = (props) => {
  return (
    <div className="container divider">
    <div className="cards">
    {props.restaurents.map((restaurent)=>(
     <Restaurent key={restaurent.id} restaurent={restaurent}/>
        ))}
        </div>
        </div>
  )
}

export default Restaurents
