import {React,  useEffect, useState } from 'react'
import './FreeCharge.css'
import { Link } from 'react-router-dom';
import axios from 'axios'

const FreeDelivery = () => {
  




 const [freeDeliveryes, setfreeDeliveryes] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/products/freedelivery");
        setfreeDeliveryes(response.data);
      } catch (error) {
        console.error('Error fetching images:', error);
      }

    };
    fetchImages();
  }, []);


  return (
    <div className='FreeCharge'>
      <div className="FreeDelivery">
                    <div className='FreeDeliveryItems'>
                        <h2>FREE DELIVERY</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {freeDeliveryes
                            .slice(0, 4)
                            .map((freeDelivery, index) => (
                            <div key={index} className="col-lg-3 col-md-6 col-12 d-flex justify-content-center align-items-center newArrivalImg">
                                <Link to={`/product/${freeDelivery.pId}`}><img src={freeDelivery.imageURL} className="img-fluid m-2" alt="" /></Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default FreeDelivery