import React , {useContext} from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
import Breadcrum from '../Components/Breadcrum/Breadcrum'
import RelatesProduct from '../Components/RelatesProduct/RelatesProduct'
const Product = () => {
     
      const {allProducts} = useContext(ShopContext)
      const {productId} = useParams();

      // console.log("aaaa",allProducts)
      
      //  console.log("oooooooo",productId)
      const product = allProducts.find((e) =>
          e.pid === Number(productId))
          // console.log(product)
    return (
      <div className='Product'>
    {product ? (
      <>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <RelatesProduct product={product}/>
      </>
    ) : (
      <p>Product not found</p>
    )}
  </div>
    
  )
}

export default Product