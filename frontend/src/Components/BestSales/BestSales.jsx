import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './BestSales.css'
// import CartdIcon from '../Assets/card.png'


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
            {id : '21' , image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'A' , count : '65' },
            {id : '10' , image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'A' , count : '95'},
            {id : '21' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A', count : '25' }
          ];
      
          
          setnewHimBestSales(simulatedBestSalesHim);


          const simulatedBestSalesHer = [
            {id : '12' , image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'B' , count : '365' },
            {id : '14' , image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'B' , count : '95'},
            {id : '1' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'B', count : '125' }
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
                        <div className="row best d-flex justify-content-center align-items-center m-0">
                        {HimbestSales
                            .map((HimbestSale, index) => (
                                <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center BestSaleImg">
                                <Card  >
                                <Link to={`/product/${HimbestSale.id}`}><Card.Img className='cardImg img-fluid ' variant="top" src={HimbestSale.image} /></Link>
                                  {/* <Card.Link href="#"> <img src={CartdIcon} alt=""  style={{ width: '50px', height: '50px' }}/></Card.Link> */}
                                  <Card.Body className='cardBody'>
                                      <Card.Title className='cardTitle'>{HimbestSale.count}</Card.Title>
                                      <Card.Title className='cardTitle'>{HimbestSale.gender}</Card.Title>
                                      {/* <Card.Link href="#">Card Link</Card.Link> */}
                                  </Card.Body>
                                  </Card>
                          </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="herBestSales">
                    <div  className='BestSale'>
                        <h4>BEST SALES</h4>
                        <h2>FOR HER</h2>
                        <div className="row best d-flex justify-content-center align-items-center m-0">
                        {HerbestSales
                            .map((HerbestSale, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center BestSaleImg">
                                  <Card className='card' >
                                  <Link to={`/product/${HerbestSale.id}`}><Card.Img className='cardImg img-fluid ' variant="top" src={HerbestSale.image} /></Link>
                                    {/* <Card.Link href="#"> <img src={CartdIcon} alt=""  style={{ width: '50px', height: '50px' }}/></Card.Link> */}
                                    <Card.Body className='cardBody'>
                                        <Card.Title className='cardTitle'>{HerbestSale.count}</Card.Title>
                                        <Card.Title className='cardTitle'>{HerbestSale.gender}</Card.Title>
                                        {/* <Card.Link href="#">Card Link</Card.Link> */}
                                    </Card.Body>
                                    </Card>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div> );}



export default BestSales