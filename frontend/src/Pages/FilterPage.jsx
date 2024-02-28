import React, { useState, useEffect } from 'react';
import ItemCard from '../Components/ItemCard/ItemCard';
import './Register/Register.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const FilterPage = () => {
  const [filteredData, setFilteredData] = useState([]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200 });
  const [data, setData] = useState([]);
  const location = useLocation();
  const selectedFilter = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    filterData();
  }, [selectedGender, selectedBrand, selectedType, priceRange, data]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/v1/products/');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const filterData = () => {
    let filtered = [...data];

    if (selectedGender) {
      filtered = filtered.filter(product => product.gender === selectedGender);
    }
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }
    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
    }
    filtered = filtered.filter(product => product.price >= priceRange.min && product.price <= priceRange.max);

    setFilteredData(filtered);
  };

  return (
    <div className='filterPage'>
      <div className="row m-0">
        <div className="col-lg-2 col-md-3 col-sm-12 col-12 d-flex justify-content-start align-items-start flex-column filter mt-5 p-3 filterLeft">
          <h2>FILTER</h2>
          <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)} className='mt-3'>
            <option value="">All Genders</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Unisex">Unisex</option>
          </select>

          <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)} className='mt-3'>
            <option value="">All Brands</option>
            {Array.from(new Set(data.map(product => product.brand))).map((brand, index) => (
              <option key={index} value={brand}>{brand}</option>
            ))}
          </select>

          <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)} className='mt-3'>
            <option value="">All Types</option>
            {Array.from(new Set(data.map(product => product.type))).map((type, index) => (
              <option key={index} value={type}>{type}</option>
            ))}
          </select>

          <label className='mt-3'>Price Range:</label>
          <input
            type="range"
            min={0}
            max={200}
            step={1}
            value={priceRange.max}
            onChange={(e) => setPriceRange({ min: priceRange.min, max: parseInt(e.target.value) })}
          />
          <div>Min Price: ${priceRange.min}</div>
          <div>Max Price: ${priceRange.max}</div>
        </div>

        <div className='col-lg-10 col-md-9 col-sm-12 col-12 filterPageRight'>
          <div className="row">
            {filteredData.map(product => (
              <div key={product.p_id} className='col-lg-4 col-md-6 col-sm-6 col-12 d-flex f-row justify-content-center align-items-center flex-column filter'>
                <ItemCard p_id={product.p_id} p_name={product.p_name} imageurl={product.imageurl} price={product.price} discount={product.discount} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterPage;
