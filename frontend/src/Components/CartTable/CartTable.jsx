import React, { useState } from 'react'
import './CartTable.css'

const CartTable = ({cartTable,setCartTable}) => {
    const{price, setPrice}= useState(0);
  return (

    <article>
        {
            cartTable?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src="{item.img}"/>
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button> + </button>
                        <button> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button>Remove</button>
                    </div>
                </div>
            ))
          }
        <div>
            <span> SubTotal </span>
            <span> Total </span>  
            <span>LKR- {price}</span>  
        </div>  
        
    </article>
  )
}

export default CartTable