import React, { useEffect, useState } from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

const NewArrivals = () => {
    const [newArrivals , setnewArrivals] = useState([]);


    useEffect(() =>{
        const fetchNewArrivalsData = async () => {
            try {
              const response = await axios.get('http://localhost:8080/api/v1/products/newarrivals'); 
              setnewArrivals(response.data);
              console.log("free :"+response.data)
              console.log(response.data)
            } catch (error) {
              console.error('Error fetching NewArrivals:', error);
            }
          };
          fetchNewArrivalsData();
    },[])
    
    const genders = [...new Set(newArrivals.map(newArrival => newArrivals.gender))];
    return (
        <div className='newArrivalsItem'>
          {genders.map(gender => {
            const himNewArrivalGender = newArrivals.filter(newArrival => newArrival.gender === "MEN");
            const shuffledHimNewArrivals = himNewArrivalGender.sort(() => Math.random() - 0.5);

            const herNewArrivalGender = newArrivals.filter(newArrival => newArrival.gender === "Women");
            const shuffledHerNewArrivals = herNewArrivalGender.sort(() => Math.random() - 0.5);
    
            return (
              <div className="nerArrivals">
                <div className="himNewArrivals">
                    <div key={gender} className='newArrival'>
                        <h4>NEW ARRIVALS</h4>
                        <h2>FOR HIM</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {shuffledHimNewArrivals
                            .slice(0, 4)
                            .map((newArrival, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center newArrivalImg">
                                <Link to={`/product/${newArrival.pId}`}><img src={newArrival.imageURL} className="img-fluid m-2" alt="" /></Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="herNewArrivals">
                    <div key={gender} className='newArrival'>
                        <h4>NEW ARRIVALS</h4>
                        <h2>FOR HER</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {shuffledHerNewArrivals
                            .slice(0, 3)
                            .map((newArrival, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center newArrivalImg">
                                <Link to={`/product/${newArrival.pId}`}><img src={newArrival.imageURL} className="img-fluid m-2" alt="" /></Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      );
}

export default NewArrivals





