// import React, { useState, useEffect } from 'react';
// import { Row, Col, Button, Dropdown } from 'react-bootstrap';

// const Shop = () => {
//   const simulatedData = [
//         {
//           id: 1,
//           brand: "Chanel",
//           gender: "Unisex",
//           image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
//           type: "Eau de Parfum",
//           price: 100.00,
//           size: "50ml",
//         },
//         {
//           id: 2,
//           brand: "Dior",
//           gender: "Male",
//           image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
//           type: "Eau de Toilette",
//           price: 85.50,
//           size: "100ml",
//         },
//         {
//           id: 3,
//           brand: "Gucci",
//           gender: "Female",
//           image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
//           type: "Eau de Parfum",
//           price: 120.00,
//           size: "75ml",
//         },
//         {
//           id: 4,
//           brand: "Versace",
//           gender: "Male",
//           image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
//           type: "Eau de Cologne",
//           price: 75.25,
//           size: "50ml",
//         },
//         {
//           id: 5,
//           brand: "Calvin Klein",
//           gender: "Female",
//           image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
//           type: "Eau de Toilette",
//           price: 60.50,
//           size: "50ml",
//         },
//         {
//           id: 6,
//           brand: "Yves Saint Laurent",
//           gender: "Unisex",
//           image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
//           type: "Eau de Parfum",
//           price: 110.00,
//           size: "75ml",
//         },
//         {
//           id: 7,
//           brand: "Bvlgari",
//           gender: "Male",
//           image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//           type: "Eau de Toilette",
//           price: 95.75,
//           size: "100ml",
//         },
//         {
//           id: 8,
//           brand: "Marc Jacobs",
//           gender: "Female",
//           image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
//           type: "Eau de Parfum",
//           price: 85.00,
//           size: "50ml",
//         },
//         {
//           id: 9,
//           brand: "Tom Ford",
//           gender: "Male",
//           image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
//           type: "Eau de Cologne",
//           price: 120.50,
//           size: "75ml",
//         },
//         {
//           id: 10,
//           brand: "Prada",
//           gender: "Female",
//           image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
//           type: "Eau de Toilette",
//           price: 70.00,
//           size: "100ml",
//         },
//         {
//           id: 11,
//           brand: "Chloe",
//           gender: "Unisex",
//           image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//           type: "Eau de Parfum",
//           price: 95.00,
//           size: "50ml",
//         },
//         {
//           id: 12,
//           brand: "Hugo Boss",
//           gender: "Male",
//           image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
//           type: "Eau de Toilette",
//           price: 80.25,
//           size: "75ml",
//         },
//         {
//           id: 13,
//           brand: "Michael Kors",
//           gender: "Female",
//           image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
//           type: "Eau de Parfum",
//           price: 110.50,
//           size: "100ml",
//         },
//         {
//           id: 14,
//           brand: "Issey Miyake",
//           gender: "Male",
//           image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
//           type: "Eau de Cologne",
//           price: 65.00,
//           size: "50ml",
//         },
//         {
//           id: 15,
//           brand: "Ralph Lauren",
//           gender: "Female",
//           image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
//           type: "Eau de Toilette",
//           price: 75.75,
//           size: "75ml",
//         },
//       ];
    
      
//       const [uniqueGenders, setUniqueGenders] = useState([]);
//   const [selectedGender, setSelectedGender] = useState('');
//   const [uniqueTypes, setUniqueTypes] = useState([]);
//   const [selectedType, setSelectedType] = useState('');

//   useEffect(() => {
//     // Extract unique genders
//     const gendersSet = new Set(simulatedData.map(item => item.gender));
//     setUniqueGenders(Array.from(gendersSet));
//   }, []);

//   useEffect(() => {
//     // Extract unique types for the selected gender
//     if (selectedGender) {
//       const typesSet = new Set(simulatedData
//         .filter(item => item.gender === selectedGender)
//         .map(item => item.type)
//       );
//       setUniqueTypes(Array.from(typesSet));
//       setSelectedType('');
//     }
//   }, [selectedGender]);

//   const handleTypeSelect = (type) => {
//     setSelectedType(type);
//   };

//   return (
//     <div className="container mt-3">
//       <Row>
//         <Col lg={12}>
//           <h4 className="mt-2">Shop</h4>
//           <Dropdown>
//             <Dropdown.Toggle variant={selectedGender ? 'primary' : 'light'}>
//               {selectedGender || 'Select Gender'}
//             </Dropdown.Toggle>
//             <Dropdown.Menu>
//               {uniqueGenders.map(gender => (
//                 <Dropdown.Item
//                   key={gender}
//                   onClick={() => setSelectedGender(gender)}
//                 >
//                   {gender}
//                 </Dropdown.Item>
//               ))}
//             </Dropdown.Menu>
//           </Dropdown>
//           {selectedGender && (
//             <Dropdown className="ml-2">
//               <Dropdown.Toggle variant={selectedType ? 'success' : 'light'}>
//                 {selectedType || 'Select Type'}
//               </Dropdown.Toggle>
//               <Dropdown.Menu>
//                 {uniqueTypes.map(type => (
//                   <Dropdown.Item
//                     key={type}
//                     onClick={() => handleTypeSelect(type)}
//                   >
//                     {type}
//                   </Dropdown.Item>
//                 ))}
//               </Dropdown.Menu>
//             </Dropdown>
//           )}
//           {selectedGender && selectedType && (
//             <p className="mt-2">Selected Gender: {selectedGender}, Selected Type: {selectedType}</p>
//           )}
//         </Col>
//       </Row>
//     </div>
//   );
// };

// export default Shop;






import React, { useState, useEffect } from 'react';
const simulatedData = [
    {
      id: 1,
      brand: "Chanel",
      gender: "Unisex",
      image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
      type: "Eau de Parfum",
      price: 100.00,
      size: "50ml",
    },
    {
      id: 2,
      brand: "Dior",
      gender: "Male",
      image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Toilette",
      price: 85.50,
      size: "100ml",
    },
    {
      id: 3,
      brand: "Gucci",
      gender: "Female",
      image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Parfum",
      price: 120.00,
      size: "75ml",
    },
    {
      id: 4,
      brand: "Versace",
      gender: "Male",
      image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Cologne",
      price: 75.25,
      size: "50ml",
    },
    {
      id: 5,
      brand: "Calvin Klein",
      gender: "Female",
      image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Toilette",
      price: 60.50,
      size: "50ml",
    },
    {
      id: 6,
      brand: "Yves Saint Laurent",
      gender: "Unisex",
      image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
      type: "Eau de Parfum",
      price: 110.00,
      size: "75ml",
    },
    {
      id: 7,
      brand: "Bvlgari",
      gender: "Male",
      image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Toilette",
      price: 95.75,
      size: "100ml",
    },
    {
      id: 8,
      brand: "Marc Jacobs",
      gender: "Female",
      image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Parfum",
      price: 85.00,
      size: "50ml",
    },
    {
      id: 9,
      brand: "Tom Ford",
      gender: "Male",
      image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Cologne",
      price: 120.50,
      size: "75ml",
    },
    {
      id: 10,
      brand: "Prada",
      gender: "Female",
      image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
      type: "Eau de Toilette",
      price: 70.00,
      size: "100ml",
    },
    {
      id: 11,
      brand: "Chloe",
      gender: "Unisex",
      image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Parfum",
      price: 95.00,
      size: "50ml",
    },
    {
      id: 12,
      brand: "Hugo Boss",
      gender: "Male",
      image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500',
      type: "Eau de Toilette",
      price: 80.25,
      size: "75ml",
    },
    {
      id: 13,
      brand: "Michael Kors",
      gender: "Female",
      image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',
      type: "Eau de Parfum",
      price: 110.50,
      size: "100ml",
    },
    {
      id: 14,
      brand: "Issey Miyake",
      gender: "Male",
      image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg',
      type: "Eau de Cologne",
      price: 65.00,
      size: "50ml",
    },
    {
      id: 15,
      brand: "Ralph Lauren",
      gender: "Female",
      image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', 
      type: "Eau de Toilette",
      price: 75.75,
      size: "75ml",
    },
  ];
const FilterPage = () => {
  const [filteredData, setFilteredData] = useState([...simulatedData]);
  const [selectedGender, setSelectedGender] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0 , max: 200 });

  const [select, setSelect] = useState('');

 

  useEffect(() => {
    setSelect(simulatedData)
    filterData();
  }, [selectedGender, selectedBrand, selectedType, selectedSize, priceRange]);

  const filterData = () => {
    let filtered = [...select];

    // Filter by gender
    if (selectedGender) {
      filtered = filtered.filter(product => product.gender === selectedGender);
    }

    // Filter by brand
    if (selectedBrand) {
      filtered = filtered.filter(product => product.brand === selectedBrand);
    }

    // Filter by type
    if (selectedType) {
      filtered = filtered.filter(product => product.type === selectedType);
    }

    // Filter by size
    if (selectedSize) {
      filtered = filtered.filter(product => product.size === selectedSize);
    }

    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );

    setFilteredData(filtered);
  };

  return (
    <div>
      {/* Gender dropdown */}
      <select value={selectedGender} onChange={(e) => setSelectedGender(e.target.value)}>
        <option value="">All Genders</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Unisex">Unisex</option>
      </select>

      {/* Brand dropdown */}
      <select value={selectedBrand} onChange={(e) => setSelectedBrand(e.target.value)}>
        <option value="">All Brands</option>
        {/* Add options dynamically based on available brands in your data */}
        {Array.from(new Set(simulatedData.map(product => product.brand))).map((brand, index) => (
          <option key={index} value={brand}>{brand}</option>
        ))}
      </select>

      {/* Type dropdown */}
      <select value={selectedType} onChange={(e) => setSelectedType(e.target.value)}>
        <option value="">All Types</option>
        {/* Add options dynamically based on available types in your data */}
        {Array.from(new Set(simulatedData.map(product => product.type))).map((type, index) => (
          <option key={index} value={type}>{type}</option>
        ))}
      </select>

      {/* Size dropdown */}
      <select value={selectedSize} onChange={(e) => setSelectedSize(e.target.value)}>
        <option value="">All Sizes</option>
        {/* Add options dynamically based on available sizes in your data */}
        {Array.from(new Set(simulatedData.map(product => product.size))).map((size, index) => (
          <option key={index} value={size}>{size}</option>
        ))}
      </select>

      {/* Price range */}
      <label>
        Price Range:
        <input
          type="range"
          min={0}
          max={200}
          step={1}
          value={priceRange.max}
          onChange={(e) => setPriceRange({ min: priceRange.min, max: parseInt(e.target.value) })}
        />
        ${priceRange.max}
      </label>

      {/* Display filtered data */}
      <div>
        {filteredData.map(product => (
          <div key={product.id}>
            <img src={product.image} alt={product.brand} />
            <p>{product.brand} - {product.type} - {product.size} - ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterPage;
