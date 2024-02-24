import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeDp.css'

const HomeDp = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100"
        src="https://wallup.net/wp-content/uploads/2017/11/23/524292-landscape-nature-Italy-trees-mountains-house-reflection-lake.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}}
        className="d-block w-100"
        src="https://c4.wallpaperflare.com/wallpaper/261/349/79/landscape-mountains-nature-lake-boats-hd-wallpaper-preview.jpg"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'100vh'}} 
        className="d-block w-100"
        src="https://switzerland-tour.com/storage/media/4-ForArticles/swiss-mountains.jpg"
        alt="Third slide"
      />

      <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>
          Praesent commodo cursus magna, vel scelerisque nisl consectetur.
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  )
}



export default HomeDp;
