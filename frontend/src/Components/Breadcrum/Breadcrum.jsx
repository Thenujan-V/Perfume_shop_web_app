import React from 'react'
import './Breadcrum.css' 
import arrow from '../Assets/breadcrum_arrow.png'
const Breadcrum = (props) => {
    const {product} = props
  return (
    <div className='Breadcrum'>
                Perfum<img src={arrow} alt="" />Shop <img src={arrow} alt="" /> {product.gender} <img src={arrow} alt="" /> {product.p_name} 
    </div>
  )
}

export default Breadcrum