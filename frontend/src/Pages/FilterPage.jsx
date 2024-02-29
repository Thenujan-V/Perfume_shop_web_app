import React, { useState, useEffect } from 'react';
import ItemCard from '../Components/ItemCard/ItemCard';
import './Register/Register.css';
import { useLocation ,useNavigate} from 'react-router-dom';
import { FixedSizeList as List } from 'react-window';
import _debounce from 'lodash/debounce';

  const simulatedData = [
      {
        p_id: 1,
        brand: "Chanel",
        gender: "Unisex",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
        type: "Eau de Parfum",
        price: 100.00,
        size: "50ml",
      },
      {
        p_id: 2,
        brand: "Dior",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
        type: "Eau de Toilette",
        price: 85.50,
        size: "100ml",
      },
      {
        p_id :3,
        brand: "Gucci",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: "Eau de Parfum",
        price: 120.00,
        size: "75ml",
      },
      {
        p_id: 4,
        brand: "Versace",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
        type: "Eau de Cologne",
        price: 75.25,
        size: "50ml",
      },
      {
        p_id: 5,
        brand: "Calvin Klein",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: "Eau de Toilette",
        price: 60.50,
        size: "50ml",
      },
      {
        p_id: 6,
        brand: "Yves Saint Laurent",
        gender: "Unisex",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
        type: "Eau de Parfum",
        price: 110.00,
        size: "75ml",
      },
      {
        p_id: 7,
        brand: "Bvlgari",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: "Eau de Toilette",
        price: 95.75,
        size: "100ml",
      },
      {
        p_id: 8,
        brand: "Marc Jacobs",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
        type: "Eau de Parfum",
        price: 85.00,
        size: "50ml",
      },
      {
        p_id: 9,
        brand: "Tom Ford",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: "Eau de Cologne",
        price: 120.50,
        size: "75ml",
      },
      {
        p_id: 10,
        brand: "Prada",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
        type: "Eau de Toilette",
        price: 70.00,
        size: "100ml",
      },
      {
        p_id: 11,
        brand: "Chloe",
        gender: "Unisex",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: "Eau de Parfum",
        price: 95.00,
        size: "50ml",
      },
      {
        p_id: 12,
        brand: "Hugo Boss",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        type: "Eau de Toilette",
        price: 80.25,
        size: "75ml",
      },
      {
        p_id: 13,
        brand: "Michael Kors",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"0",
        imageurl: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
        type: "Eau de Parfum",
        price: 110.50,
        size: "100ml",
      },
      {
        p_id: 14,
        brand: "Issey Miyake",
        gender: "Male",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
        type: "Eau de Cologne",
        price: 65.00,
        size: "50ml",
      },
      {
        p_id: 15,
        brand: "Ralph Lauren",
        gender: "Female",
        p_name:"Adfgthvbnh thgmbn",
        discount:"10",
        imageurl: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
        type: "Eau de Toilette",
        price: 75.75,
        size: "75ml",
      },
    ];
   
const FilterPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });

  const location = useLocation();
  const navigate = useNavigate();

  const selectedFilter = new URLSearchParams(location.search).get('query');
  const selectedBrandFromUrl = new URLSearchParams(location.search).get('brand'); 

  useEffect(() => {
    if (selectedBrandFromUrl) {
      setSelectedBrand(selectedBrandFromUrl);
    }
  }, [selectedBrandFromUrl]);


  const debouncedFilterData = _debounce(() => {
    filterData();
  }, 500);

  const filterData = () => {
    let filtered = [...simulatedData]; 
  
    if (selectedGender) {
      filtered = filtered.filter((product) => product.gender === selectedGender);
    }
  
    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }
  
    if (selectedType) {
      filtered = filtered.filter((product) => product.type === selectedType);
    }
  
    if (selectedSize) {
      filtered = filtered.filter((product) => product.size === selectedSize);
    }
  
    filtered = filtered.filter(
      (product) => product.price >= priceRange.min && product.price <= priceRange.max
    );
  
    setFilteredData(filtered);
  };

  useEffect(() => {
    if (selectedFilter) {
      const params = new URLSearchParams(selectedFilter);
      setSelectedGender(params.get('gender') || '');
      setSelectedBrand(params.get('brand') || '');
      setSelectedType(params.get('type') || '');
      setSelectedSize(params.get('size') || '');
    }
    debouncedFilterData(); 
  }, [location.search, selectedFilter]);

  useEffect(() => {
    const queryParams = `brand=${selectedBrand || ''}&gender=${selectedGender || ''}&type=${selectedType || ''}&size=${selectedSize || ''}&min=${priceRange.min}&max=${priceRange.max}`;
    navigate(`/shop?${queryParams}`);
  }, [selectedBrand, selectedGender, selectedType, selectedSize, priceRange]);

    return (
      <div className='filterPage'>
        <div className="row m-0">
        <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex justify-content-start align-items-start flex-column filter mt-5 p-3 filterLeft " >
        <h2>FILTER</h2>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className='mt-5'>
          <option value="">ALL PERFUM</option>
          <option value="Male">MALE</option>
          <option value="Female">Female</option>
          <option value="Unisex">Unisex</option>
        </select>

        <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className='mt-4'>
          <option value="">All Brands</option>
        
          {Array.from(new Set(simulatedData.map(product => product.brand))).map((brand, index) => (
            <option key={index} value={brand}>{brand}</option>
          ))}
        </select>

        <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className='mt-4'>
          <option value="">All Types</option>
          {Array.from(new Set(simulatedData.map(product => product.type))).map((type, index) => (
            <option key={index} value={type}>{type}</option>
          ))}
        </select>

        <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)} className='mt-4'>
          <option value="">All Sizes</option>
          {Array.from(new Set(simulatedData.map(product => product.size))).map((size, index) => (
            <option key={index} value={size}>{size}</option>
          ))}
        </select>

      
              <label className='mt-4'>
        Price Range:
        <input
          type="range"
          min={0}
          max={200}
          step={1}
          value={priceRange.min}
          onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) })}
        />
        <span>${priceRange.min} - ${priceRange.max}</span>
      </label>

      <label className='mt-4'>
        Max Price:
        <input
          type="range"
          min={priceRange.min}
          max={200}
          step={1}
          value={priceRange.max}
          onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
        />
        <span>${priceRange.max}</span>
      </label>

          </div>
          <div className='col-lg-10 col-md-9 col-sm-12 col-12 filterPageRight'>
        {/* Use virtualization to render the filtered product list */}
        <div className='row your-custom-class'>
        {filteredData.map((item, index) => (
          <div key={index} className='col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center your-item-class'>
            <ItemCard
              p_id={item.p_id}
              p_name={item.p_name}
              imageurl={item.imageurl}
              price={item.price}
              discount={item.discount}
              />
            </div>
          ))}
        </div>

      </div>
          </div>
        </div>
    
  );
};

  export default FilterPage;
