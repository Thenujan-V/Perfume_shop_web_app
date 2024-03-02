import React, { useEffect, useState } from 'react'
import './ExclusiveOffers.css'
import { Link } from 'react-router-dom';
import axios from 'axios'



const ExclusiveOffers = () => {
    const [exclusiveOffers , setExclusiveOffers] = useState([]);
    useEffect(() =>{
    
    
        const fetchExclusiveOffersData = async () => {
            try {
              const response = await axios.get("http://localhost:8080/api/v1/products/discounts"); 
              setExclusiveOffers(response.data);
              
            } catch (error) {
              console.error('Error fetching ExclusiveOffers:', error);
            }
          };
      
          fetchExclusiveOffersData();
    },[])
    

     
    return (


        <div className='exclusiveOffer'>
          <div className='exclusiveOfferDiv'>
          <h2>EXCLUSIVE OFFERS</h2>
          <div className="row m-0 exclusiveOffersLeft">
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center ">
              <img  src="https://cdn16.nnnow.com/web-images/large/styles/OBJWVHT8HS9/1668662860282/8.jpg" alt="" className='img-fluid' />
            </div>
            <div className="col-lg-7 col-12 exclusiveOffersRight">
              <div className="row ">
                {exclusiveOffers
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 4)
                  .map((exclusiveOffer, index) => (
                    <div className="col-lg-6 col-6  d-flex justify-content-center align-items-center exclusiveOffersRightItem" key={index}>
                      {/* Replace the empty src attributes with actual image URLs */}
                      <Link to={`/product/${exclusiveOffer.pid}`}><img src={exclusiveOffer.imageURL} alt="" className='img-fluid' /></Link>
                    </div>
                  ))}
              </div>
            </div>
          </div>
          </div>
        </div>
      );
                  }  
                

export default ExclusiveOffers