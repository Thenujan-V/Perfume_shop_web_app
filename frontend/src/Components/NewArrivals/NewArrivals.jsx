import React, { useEffect, useState } from 'react'
import './NewArrivals.css'
import { Link } from 'react-router-dom';

const NewArrivals = () => {
    const [newArrivals , setnewArrivals] = useState([]);
    useEffect(() =>{


        // const fetchNewArrivalsData = async () => {
        //     try {
        //       const response = await axios.get('/newArrivals'); 
        //       setnewArrivals(response.data);
        //     } catch (error) {
        //       console.error('Error fetching NewArrivals:', error);
        //     }
        //   };
      
        //   fetchNewArrivalsData();
      

        const simulatedImages = [
            {id : '1' , image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'C' },
            {id : '2' , image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'B' },
            {id : '3' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A' },
            {id : '4' , image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'B' },
            {id : '5' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' },
            {id : '6' , image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' },
            {id : '7' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' },
            {id : '8' , image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'C' },
            {id : '10' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A' },
            {id : '11' , image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' },
            {id : '12' , image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'A' },
            {id : '13' , image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'C' },
          ];
      
          
          setnewArrivals(simulatedImages);
    },[])
    const genders = [...new Set(newArrivals.map(newArrival => newArrivals.gender))];
    return (
        <div className='newArrivalsItem'>
          {genders.map(gender => {
            const himNewArrivalGender = newArrivals.filter(newArrival => newArrival.gender === "A");
            const shuffledHimNewArrivals = himNewArrivalGender.sort(() => Math.random() - 0.5);

            const herNewArrivalGender = newArrivals.filter(newArrival => newArrival.gender === "B");
            const shuffledHerNewArrivals = herNewArrivalGender.sort(() => Math.random() - 0.5);
    
            return (
              <div className="nerArrivals">
                <div className="himNewArrivals">
                    <div key={gender} className='newArrival'>
                        <h4>NEW ARRIVALS</h4>
                        <h2>FOR HIM</h2>
                        <div className="row d-flex justify-content-center align-items-center m-0">
                        {shuffledHimNewArrivals
                            .slice(0, 3)
                            .map((newArrival, index) => (
                            <div key={index} className="col-lg-4 col-md-6 col-12 d-flex justify-content-center align-items-center newArrivalImg">
                                <Link to={`/product/${newArrival.id}`}><img src={newArrival.image} className="img-fluid m-2" alt="" /></Link>
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
                                <Link to={`/product/${newArrival.id}`}><img src={newArrival.image} className="img-fluid m-2" alt="" /></Link>
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