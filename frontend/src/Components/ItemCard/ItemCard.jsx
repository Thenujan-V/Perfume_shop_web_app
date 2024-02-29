import React from 'react'
import './ItemCard.css'
import { Link } from 'react-router-dom'

const ItemCard = (props) => {
  console.log("1")
  return (
    <div className='itemCard text-center'>
        <div className="itemCareView">
        <Link to={`/product/${props.p_id}`}><img src={props.imageurl} onClick={window.scrollTo(0,0)} alt="" className='img-fluid rounded m-2' /></Link>
        <p>{props.p_name}</p>
        <div className="itemPrices">
            <div className="itemNewPrice">
                ${props.price}
            </div>
            <div className="itemOldPrice ">
                {props.discount}%
            </div>
        </div>
        </div>
    </div>
  )
}

export default ItemCard