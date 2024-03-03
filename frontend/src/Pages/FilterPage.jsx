import React, { useState, useEffect } from 'react';
import ItemCard from '../Components/ItemCard/ItemCard';
import './Register/Register.css';
import { useLocation ,useNavigate} from 'react-router-dom';
// import { FixedSizeList as List } from 'react-window';
import _debounce from 'lodash/debounce';
import axios from 'axios';

  // const productData = [
  //     {
  //       p_id: 1,
  //       brand: "Chanel",
  //       gender: "Unisex",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
  //       type: "Eau de Parfum",
  //       price: 100.00,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 2,
  //       brand: "Dior",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
  //       type: "Eau de Toilette",
  //       price: 85.50,
  //       size: "100ml",
  //     },
  //     {
  //       p_id :3,
  //       brand: "Gucci",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       type: "Eau de Parfum",
  //       price: 120.00,
  //       size: "75ml",
  //     },
  //     {
  //       p_id: 4,
  //       brand: "Versace",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
  //       type: "Eau de Cologne",
  //       price: 75.25,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 5,
  //       brand: "Calvin Klein",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       type: "Eau de Toilette",
  //       price: 60.50,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 6,
  //       brand: "Yves Saint Laurent",
  //       gender: "Unisex",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
  //       type: "Eau de Parfum",
  //       price: 110.00,
  //       size: "75ml",
  //     },
  //     {
  //       p_id: 7,
  //       brand: "Bvlgari",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //       type: "Eau de Toilette",
  //       price: 95.75,
  //       size: "100ml",
  //     },
  //     {
  //       p_id: 8,
  //       brand: "Marc Jacobs",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
  //       type: "Eau de Parfum",
  //       price: 85.00,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 9,
  //       brand: "Tom Ford",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       type: "Eau de Cologne",
  //       price: 120.50,
  //       size: "75ml",
  //     },
  //     {
  //       p_id: 10,
  //       brand: "Prada",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
  //       type: "Eau de Toilette",
  //       price: 70.00,
  //       size: "100ml",
  //     },
  //     {
  //       p_id: 11,
  //       brand: "Chloe",
  //       gender: "Unisex",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //       type: "Eau de Parfum",
  //       price: 95.00,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 12,
  //       brand: "Hugo Boss",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  //       type: "Eau de Toilette",
  //       price: 80.25,
  //       size: "75ml",
  //     },
  //     {
  //       p_id: 13,
  //       brand: "Michael Kors",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"0",
  //       imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
  //       type: "Eau de Parfum",
  //       price: 110.50,
  //       size: "100ml",
  //     },
  //     {
  //       p_id: 14,
  //       brand: "Issey Miyake",
  //       gender: "Male",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
  //       type: "Eau de Cologne",
  //       price: 65.00,
  //       size: "50ml",
  //     },
  //     {
  //       p_id: 15,
  //       brand: "Ralph Lauren",
  //       gender: "Female",
  //       p_name:"Adfgthvbnh thgmbn",
  //       discount:"10",
  //       imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
  //       type: "Eau de Toilette",
  //       price: 75.75,
  //       size: "75ml",
  //     },
  //   ];
  

const FilterPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const[productData, setProductData] = useState([])
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 100000 });

  const location = useLocation();
  const navigate = useNavigate();

  const selectedFilter = new URLSearchParams(location.search).get('query');
  const selectedBrandFromUrl = new URLSearchParams(location.search).get('brand'); 
  const selectedCategoryFromUrl = new URLSearchParams(location.search).get('category'); 
  const selectedSizeFromUrl = new URLSearchParams(location.search).get('size'); 
  useEffect(() => { 
    if (selectedBrandFromUrl) {
      setSelectedBrand(selectedBrandFromUrl);
    }
    else if(selectedCategoryFromUrl){
      setSelectedCategory(selectedCategoryFromUrl)
     }
     else if(selectedSizeFromUrl){
      setSelectedSize(selectedSizeFromUrl)
     }
  }, [selectedBrandFromUrl],[selectedCategoryFromUrl],[selectedSizeFromUrl]);


  useEffect(() =>{
    const fetchProducts = async () => {
        try {
          const response = await axios.get('http://localhost:8080/api/v1/products/'); 
          setProductData(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching NewArrivals:', error);
        }
      };
      fetchProducts();
},[])



  const debouncedFilterData = _debounce(() => {
    filterData();
  }, 500);

  const filterData = () => {
    let filtered = [...productData]; 
  
    if (selectedGender) {
      filtered = filtered.filter((product) => product.gender === selectedGender);
      console.log("filter gender"+filtered)
    }
  
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }
    
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category === selectedCategory);
    }
  
    if (selectedSize) {
      filtered = filtered.filter((product) => parseInt(product.size) === parseInt(selectedSize));
    }
  
    filtered = filtered.filter(
      (product) => product.price >= priceRange.min
    );
  
    setFilteredData(filtered);
  };

  useEffect(() => {
    if (selectedFilter) {
      const params = new URLSearchParams(selectedFilter);
      setSelectedGender(params.get('gender') || '');
      setSelectedBrand(params.get('brand') || '');
      setSelectedCategory(params.get('category') || '');
      setSelectedSize(params.get('size') || '');
    }
    debouncedFilterData(); 
  }, [location.search, selectedFilter]);

  useEffect(() => {
    const queryParams = `brand=${selectedBrand || ''}&gender=${selectedGender || ''}&category=${selectedCategory || ''}&size=${selectedSize || ''}&min=${priceRange.min}&max=${priceRange.max}`;
    navigate(`/shop?${queryParams}`);
  }, [selectedBrand, selectedGender, selectedCategory, selectedSize, priceRange]);

    return (
      <div className='row m-0 filterPage'>
        <div className="row m-0">
        <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex justify-content-start align-items-start flex-column filter mt-1 mb-1 p-3 filterLeft "style={{background:' #630229'}}>
        <h2>FILTER</h2>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className='mt-4 rounded' >
          <option value="" style={{background:' #630229'}}>ALL PERFUM</option>
          <option value="Men" style={{background:' #630229',color:"#ffffff"}}>MALE</option>
          <option value="Women" style={{background:' #630229',color:"#ffffff"}}>Female</option>
          <option value="Unisex" style={{background:' #630229',color:"#ffffff"}}>Unisex</option>
        </select>

        <select value={selectedBrand}  onChange={(e) => setSelectedBrand(e.target.value)} className='mt-4 rounded' style={{width:"150px"}}>
          <option value="">All Brands</option>
        
          {Array.from(new Set(productData.map(product => product.brand))).map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>

        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className='mt-4 rounded'>
          <option value="">All Categorys</option>
          {Array.from(new Set(productData.map(product => product.category))).map((category, index) => (
            <option key={index} value={category}>{category}</option>
          ))}
        </select>

        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className='mt-4 rounded'>
          <option value="">All Sizes</option>
          {Array.from(new Set(productData.map(product => product.size))).map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>

      
        <label className='mt-4 priceRange'>
        <h5>Price Range:</h5>
        <input
          type="range"
          min={0}
          max={100000}
          step={1}
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })} 
        />
        <span style={{color:' #ffffff'}}>${priceRange.min} - ${priceRange.max}</span>
      </label>
      <label className='mt-4' style={{background:' #630229'}}>
        <h5>Max Price:</h5>
        <input
          type="range"
          min={priceRange.min}
          max={100000}
          step={1}
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
        />
        <span style={{color:' #ffffff'}}>${priceRange.max}</span>
      </label>
            </div>
            <div className='col-lg-10 col-md-9 col-sm-12 col-12 filterPageRight'>
        <div className='row your-custom-class'>
        {filteredData.length > 0 ? (
           filteredData.map((item, index) => (
            <div key={index} className='col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center your-item-class'>
              <ItemCard
                p_id={item.pid}
                p_name={item.pname}
                imageurl={item.imageURL}
                price={item.price}
                discount={item.discount}
                />
              </div>)
          )) : (
            <div className="col-12 text-center" style={{marginTop:" 250px"}}>
            <h3>No products match the selected filters.</h3>
          </div>
        
          )}
        </div>

      </div>
          </div>
      
      </div>
    );
  };


  export default FilterPage;


