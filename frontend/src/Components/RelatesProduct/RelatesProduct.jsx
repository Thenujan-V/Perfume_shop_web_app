import React, { useState } from 'react';
import  {useContext} from 'react'
import { ShopContext } from '../../Context/ShopContext'
import ItemCard from '../ItemCard/ItemCard';

const RelatesProduct = (props) => {
    const {allProducts} = useContext(ShopContext)
  const { product } = props;
  const [selectedCategory, setSelectedCategory] = useState('gender');

  const filterRelatedProducts = () => {
    console.log('allProducts:', allProducts);
  console.log('selectedCategory:', selectedCategory);
    return allProducts.filter((item) => {
        if (product.pid !== item.pid) {
            console.log("A")
        if (selectedCategory === 'gender') {
            console.log("B")
          return product.gender === item.gender;
        } else if (selectedCategory === 'brand') {
            console.log("c")
          return product.brand === item.brand;
        } else if (selectedCategory === 'category') {
            console.log("e")
          return product.category === item.category;
        }
       
      }
      return false;
    });
  };

  return (
    <div className='relatedProduct'>
      <h1 className='mt-5'>Related Product</h1>
      <div className='category-buttons d-flex justify-content-around'>
        <button onClick={() => setSelectedCategory('gender')} style={{background:' #630229',color:"#ffffff",padding:"8px"}} className='btn rounded'>Gender</button>
        <button onClick={() => setSelectedCategory('brand')} style={{background:' #630229',color:"#ffffff",padding:"8px"}} className='btn rounded'>Brand</button>
        <button onClick={() => setSelectedCategory('type')} style={{background:' #630229',color:"#ffffff",padding:"8px"}} className='btn rounded'>Type</button>
      </div>
      <hr />
      <div className='row relatedProduct-item'>
      {filterRelatedProducts().length > 0 ? (
        filterRelatedProducts().map((item, i) => (
          <div key={i} className='col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center m-0'>
            <ItemCard
              p_id={item.pid}
              p_name={item.pname}
              imageurl={item.imageURL}
              price={item.price}
              discount={item.discount}
            />
          </div>
        ))
      ) : (
        <p>No related products for the selected item.</p>
      )}
</div>
    </div>
  );
};

export default RelatesProduct;
