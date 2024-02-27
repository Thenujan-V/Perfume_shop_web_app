import React , { createContext, useEffect, useState} from 'react'

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {

    const [allProducts , setnewAllProducts] = useState([]);
    useEffect(() =>{


        // const fetchAllProducts = async () => {
        //     try {
        //       const response = await axios.get('/allProduct'); 
        //       setnewAllProducts(response.data);
        //     } catch (error) {
        //       console.error('Error fetching setnewAllProducts:', error);
        //     }
        //   };
      
        //   fetchAllProducts();
      

        const simulatedallProducts = [
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
      
          
          setnewAllProducts(simulatedallProducts);
         
          console.log('allProducts set:', simulatedallProducts);
    },[])
   
  return (
    <ShopContext.Provider value = {{allProducts}}>
    {props.children}
    </ShopContext.Provider>
  )
}

export default ShopContextProvider