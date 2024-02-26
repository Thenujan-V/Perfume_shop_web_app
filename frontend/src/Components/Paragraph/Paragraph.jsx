import React from 'react';
import './Paragraph.css';

function ImageWithParagraph() {
  return (
    <div className="container">
      <img
        src="https://airome.candlewarmers.com/wp-content/uploads/sites/2/2023/02/S23_FragranceOil_Group_LR-1024x1024.jpg/100/100" // Your image URL
        alt="Perfume"
        className="image"
      />
      <p className="paragraph">
      "The perfume store, nestled in the heart of the bustling city, invites visitors into a world of scents and sensations. As you step through its doors, a symphony of fragrances dances in the air, each bottle holding the promise of an olfactory journey. From floral and fruity to woody and exotic, the shelves are adorned with an array of perfumes, each meticulously crafted to evoke emotions and memories. Expert staff members guide customers through the selection process, offering personalized recommendations and sharing the stories behind each scent. Whether seeking a signature fragrance or a thoughtful gift, the perfume store offers a sensory experience unlike any other, leaving visitors enchanted and eager to return."
      </p>
    </div>
  );
}

export default ImageWithParagraph;