import React from 'react';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <h2>About Us</h2>
          <p>Welcome to our online store! At Fragrance Finesse, we are passionate about providing high-quality fragrances that inspire and delight our customers.</p>
          <p>Our journey began with a love for captivating scents and a vision to create an immersive olfactory experience for fragrance enthusiasts worldwide.</p>
          <p>Driven by our commitment to excellence, we meticulously craft each fragrance to evoke emotions, stir memories, and awaken the senses.</p>
          <p>At Fragrance Finesse, we believe in the power of scent to transform moments and elevate everyday experiences. Whether you're seeking a signature scent or exploring new olfactory horizons, we invite you to embark on this sensory journey with us.</p>
          <h3>Our Mission</h3>
          <p>Our mission at Fragrance Finesse is to curate a collection of exceptional fragrances that inspire confidence, evoke nostalgia, and celebrate individuality. We strive to provide an unparalleled shopping experience, combining exceptional customer service with a passion for fragrance innovation.</p>
          <h3>Our Values</h3>
          <ul>
            <li><strong>Quality:</strong> We are committed to sourcing the finest ingredients and crafting fragrances of exceptional quality.</li>
            <li><strong>Customer Satisfaction:</strong> Our customers are at the heart of everything we do. We prioritize their satisfaction and strive to exceed their expectations at every opportunity.</li>
            <li><strong>Integrity:</strong> We conduct our business with honesty, transparency, and integrity, earning the trust and loyalty of our customers and partners.</li>
            <li><strong>Innovation:</strong> We embrace creativity and innovation, constantly seeking new ways to push the boundaries of fragrance design and delivery.</li>
            <li><strong>Community:</strong> We value community engagement and give back to causes that matter to us, fostering positive change and making a meaningful impact.</li>
          </ul>
          <Link to="/contact" className="btn btn-primary">Contact Us</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
