import React, { useEffect, useState } from 'react'
import './BestSales.css'

const BestSales = () => {
    const [HimbestSales , setnewHimBestSales] = useState([]);
    const [HerbestSales , setnewHerBestSales] = useState([]);

    useEffect(() =>{


        // const fetchBestSalesData = async () => {
        //     try {
        //       const himResponse = await axios.get('/HimbestSales'); 
         //      const herResponse = await axios.get('/HerbestSales'); 
        //       setnewHimBestSales(himResponse.data);
        //       setnewHerBestSales(herResponse.data);
        //     } catch (error) {
        //       console.error('Error fetching BestSales :', error);
        //     }
        //   };
      
        //   fetchBestSalesData();
      

        const simulatedBestSalesHim = [
            { image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'A' , count : '65' },
            { image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'A' , count : '95'},
            { image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A', count : '25' }
          ];
      
          
          setnewHimBestSales(simulatedBestSalesHim);


          const simulatedBestSalesHer = [
            { image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'B' , count : '365' },
            { image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'B' , count : '95'},
            { image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'B', count : '125' }
          ];
      
          
          setnewHerBestSales(simulatedBestSalesHer);
    },[])
   
    return (
        <div className='BestSales'>
            <div className="bestSales">
                <div className="himBestSales">
                    <div className='BestSale'>
                        <h4>BEST SALES</h4>
                        <h2>FOR HIM</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {HimbestSales
                            .map((HimbestSale, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center BestSaleImg">
                                <img src={HimbestSale.image} className="img-fluid m-2" alt="" />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="herBestSales">
                    <div  className='BestSale'>
                        <h4>BEST SALES</h4>
                        <h2>FOR HER</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {HerbestSales
                            .map((HerbestSale, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center BestSaleImg">
                                <img src={HerbestSale.image} className="img-fluid m-2" alt="" />
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> );}



export default BestSales