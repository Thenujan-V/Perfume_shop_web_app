import React from 'react'
import './Breadcrum.css' 
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='Breadcrum'>
                Home<img src={arrow} alt="" />Shop <img src={arrow} alt="" /> {product.id} <img src={arrow} alt="" /> {product.gernder}
    </div>
  )
}

export default Breadcrum