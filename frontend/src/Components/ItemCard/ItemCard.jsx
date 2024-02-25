import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
  return (
    <div className='itemCard text-center'>
         <Link to={`/product/${props.id}`}>        <img src={props.image} onClick={window.scrollTo(0,0)} alt="" className='img-fluid rounded m-2'  width= "60%" height= "auto"/></Link>
        <p>{props.name}</p>
        <div className="itemPrices">
            <div className="itemNewPrice">
                ${props.new_price}
            </div>
            <div className="itemOldPrice text-decoration-line-through">
                ${props.old_price}
            </div>
        </div>
    </div>
  )
}

export default ItemCard