import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './HomeDp.css'

const HomeDp = () => {
  return (
    <div>
    <Carousel>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src="https://png.pngtree.com/background/20230527/original/pngtree-the-perfume-bottles-have-pink-flowers-picture-image_2757863.jpg"
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh'}}
        className="d-block w-100"
        src="https://us.123rf.com/450wm/dashtik/dashtik2312/dashtik231201456/219977421-beautiful-blank-bottle-of-luxury-perfume-in-pink-soft-pastel-color.jpg?ver=6"
        alt="Second slide"
      />

      <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img style={{height:'60vh'}} 
        className="d-block w-100"
        src="https://mobirise.com/extensions/tastem4/assets/images/mbr-23.jpg"
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
