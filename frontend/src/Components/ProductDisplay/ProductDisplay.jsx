import React, { useContext } from 'react'
import './ProductDisplay.css'
import { ShopContext } from '../../Context/ShopContext'
// import { Link } from 'react-router-dom'
const ProductDisplay = (props) => {
  const {product} = props
//   const {addToCart} = useContext(ShopContext);
  return (
    <div className='row ProductDisplay m-0'>
        <div className="col-lg-6 col-12 d-flex flex-column justify-content-center align-items-center  ProductDisplayLeft">
          <img src={product.imageurl} className='image-fluid' alt="" />
        </div>
        <div className="col-lg-6 col-12 d-flex flex-column  ProductDisplayRight">
          <h1>{product.p_name}</h1>
          <h3>{product.brand}</h3>
          <h3>{product.type}</h3>
          <div className='dis productQuantity'>Price: ${product.price}</div>
          <div className="dis newPrice">Size: {product.size}</div>
          <div className="dis ">discount: {product.discount}%</div>
          <div className="dis productDetails">Lorem ipsum dolor, sit 
          amet consectetur adipisicing elit. At eveniet hic autem, 
          cum quae officiis delectus non molestias nihil eius 
          voluptatum quia quibusdam ea harum eligendi maiores 
          explicabo nisi debitis!
          {/* {product.description} */}
          </div>
          
          {/* <button onClick={()=>{addToCart(product.id)}}>Add To Cart</button> */}
          <div className="but">
          <button >Add To Cart</button>
          <button >Add To WishList</button>
          </div>
        </div>
    </div>
  )
}

export default ProductDisplay