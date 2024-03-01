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
        if (product.p_id !== item.p_id) {
            console.log("A")
        if (selectedCategory === 'gender') {
            console.log("B")
          return product.gender === item.gender;
        } else if (selectedCategory === 'brand') {
            console.log("c")
          return product.brand === item.brand;
        } else if (selectedCategory === 'type') {
            console.log("e")
          return product.type === item.type;
        }
       
      }
      return false;
    });
  };

  return (
    <div className='relatedProduct'>
      <h1>Related Product</h1>
      <div className='category-buttons d-flex justify-content-around'>
        <button onClick={() => setSelectedCategory('gender')}>Gender</button>
        <button onClick={() => setSelectedCategory('brand')}>Brand</button>
        <button onClick={() => setSelectedCategory('type')}>Type</button>
      </div>
      <hr />
      <div className='row relatedProduct-item'>
      {filterRelatedProducts().length > 0 ? (
        filterRelatedProducts().map((item, i) => (
          <div key={i} className='col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center m-0'>
            <ItemCard
              p_id={item.p_id}
              p_name={item.p_name}
              imageurl={item.imageurl}
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
