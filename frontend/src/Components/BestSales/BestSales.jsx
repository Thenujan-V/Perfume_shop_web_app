import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './BestSales.css'
import axios from 'axios';
// import CartdIcon from '../Assets/card.png'


const BestSales = () => {
    const [bestSales , setBestSales] = useState([]);
    useEffect(() =>{


        const fetchBestSales = async () => {
            try {
              const response = await axios.get('http://localhost:8080/api/v1/products/bestselles'); 
              setBestSales(response.data);
            } catch (error) {
              console.error('Error fetching BestSales:', error);
            }
          };
      
          fetchBestSales();
      
    },[])
    const genders = [...new Set(bestSales.map(bestSale => bestSales.gender))];
    return (
        <div className='bestSalesItem'>
          {genders.map(gender => {
            const himBestSaleGender = bestSales.filter(bestSale => bestSale.gender === "MEN");
            const shuffledHimBestSales = himBestSaleGender.sort(() => Math.random() - 0.5);

            const herBestSaleGender = bestSales.filter(bestSale => bestSale.gender === "Women");
            const shuffledHerBestSales = herBestSaleGender.sort(() => Math.random() - 0.5);
    
            return (
              <div className="bestSales">
                <div className="himBestSales">
                    <div key={gender} className='bestSale'>
                        <h4>BEST SALES</h4>
                        <h2>FOR HIM</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {shuffledHimBestSales
                            .slice(0, 4)
                            .map((bestSales, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center bestSaleImg">
                                <Link to={`/product/${bestSales.pId}`}><img src={bestSales.imageURL} className="img-fluid m-2" alt="" /></Link>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="herBestSales">
                    <div key={gender} className='bestSale'>
                        <h4>BEST SALES</h4>
                        <h2>FOR HER</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {shuffledHerBestSales
                            .slice(0, 3)
                            .map((bestSales, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center bestSaleImg">
                                <Link to={`/product/${bestSales.pId}`}><img src={bestSales.imageURL} className="img-fluid m-2" alt="" /></Link>
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

export default BestSales