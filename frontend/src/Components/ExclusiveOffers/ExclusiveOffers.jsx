import React, { useEffect, useState } from 'react'
import './ExclusiveOffers.css'


const ExclusiveOffers = () => {
    const [exclusiveOffers , setExclusiveOffers] = useState([]);
    useEffect(() =>{
    
    
        // const fetchExclusiveOffersData = async () => {
        //     try {
        //       const response = await axios.get('/exclusiveOfferss'); 
        //       setExclusiveOffers(response.data);
        //     } catch (error) {
        //       console.error('Error fetching ExclusiveOffers:', error);
        //     }
        //   };
      
        //   fetchExclusiveOffersData();
      
    
        const simulatedExclusiveOffers = [
            { image: 'https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg?auto=compress&cs=tinysrgb&w=400',gender : 'C' , discount : '0' , deliveryCharge : '200' },
            { image: 'https://pxbar.com/wp-content/uploads/2023/09/hidden-girl-pic.jpg', gender: 'B', discount : '0' , deliveryCharge : '200' },
            { image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A', discount : '0' , deliveryCharge : '200' },
            { image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'B' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'A' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://images.pexels.com/photos/36029/aroni-arsa-children-little.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500', gender: 'C' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'A' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://e1.pxfuel.com/desktop-wallpaper/903/679/desktop-wallpaper-97-aesthetic-best-profile-pic-for-instagram-for-boy-instagram-dp-boys.jpg', gender: 'B' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=1024x1024&w=is&k=20&c=iGtRKCTRSvPVl3eOIpzzse5SvQFfImkV0TZuFh-74ps=', gender: 'A' , discount : '0' , deliveryCharge : '200'},
            { image: 'https://w0.peakpx.com/wallpaper/607/199/HD-wallpaper-evening-pic-natura-thumbnail.jpg', gender: 'C' , discount : '0' , deliveryCharge : '200'},
          ];
      
          
          setExclusiveOffers(simulatedExclusiveOffers);
    },[])
    

     
    return (


        <div className='exclusiveOffer'>
          <div className='exclusiveOfferDiv'>
          <h2>EXCLUSIVE OFFERS</h2>
          <div className="row m-0 exclusiveOffersLeft">
            <div className="col-lg-5 col-12 d-flex justify-content-center align-items-center ">
              <img  src="https://c4.wallpaperflare.com/wallpaper/261/349/79/landscape-mountains-nature-lake-boats-hd-wallpaper-preview.jpg" alt="" className='img-fluid' />
            </div>
            <div className="col-lg-7 col-12 exclusiveOffersRight">
              <div className="row ">
                {exclusiveOffers
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 4)
                  .map((exclusiveOffer, index) => (
                    <div className="col-lg-6 col-6  d-flex justify-content-center align-items-center exclusiveOffersRightItem" key={index}>
                      {/* Replace the empty src attributes with actual image URLs */}
                      <img src={exclusiveOffer.image} alt="" className='img-fluid' />
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