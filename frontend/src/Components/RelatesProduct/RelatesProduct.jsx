// import React, { useEffect, useState } from 'react'
// import './RelatesProduct.css'
// import Item from '../Item/Item'
// const RelatesProduct = (props) => {
//     const {product} = props

//     const [allProducts , setnewAllProducts] = useState([]);
//     useEffect(() =>{


//         // const fetchAllProducts = async () => {
//         //     try {
//         //       const response = await axios.get('/allProduct'); 
//         //       setnewAllProducts(response.data);
//         //     } catch (error) {
//         //       console.error('Error fetching setnewAllProducts:', error);
//         //     }
//         //   };
      
//         //   fetchAllProducts();
      

//         const simulatedallProducts = [
//             {id : '1' , image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'C' },
//             {id : '2' , image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'B' },
//             {id : '3' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A' },
//             {id : '4' , image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'B' },
//             {id : '5' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' },
//             {id : '6' , image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' },
//             {id : '7' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' },
//             {id : '8' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'C' },
//             {id : '10' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A' },
//             {id : '11' , image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' },
//             {id : '12' , image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'A' },
//             {id : '13' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'C' },
//           ];
      
          
//           setnewAllProducts(simulatedallProducts);
         
//           console.log('allProducts set:', simulatedallProducts);
//     },[])

//   return (
//     <div className='relatedProduct'>
//         <h1>Related Product</h1>
//         <hr />
//         <div className="row relatedProduct-item">
//         {allProducts.map((item,i) => {
//                 if(product.brand === item.brand && product.id != item.id){
//                 return (
//                     <div key={i} className="col-lg-3 col-md-6 col-12">
//                         <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//                     </div>)
//                 }
//                 else if(product.category === item.category && product.id != item.id){
//                     return (
//                         <div key={i} className="col-lg-3 col-md-6 col-12">
//                             <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//                         </div>)
//                 }
//                 else if(product.gender === item.gender && product.id != item.id){
//                     return (
//                         <div key={i} className="col-lg-3 col-md-6 col-12">
//                             <Item id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
//                         </div>)
//                 }
//             })
//             }
//         </div>
//     </div>
//   )
// }

// export default RelatesProduct