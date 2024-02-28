// import React, { useEffect, useState } from 'react';
// import { faHeart, faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
// import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import './Profile.css';
// import Nav from '../Nav/Nav';

// const ProfileModal = () => {
//   const [showProfilePopup, setShowProfilePopup] = useState(false);
//   const navigate = useNavigate();

//   const toggleProfilePopup = () => {
//     setShowProfilePopup(!showProfilePopup);
//   };

//   const closeProfilePopup = () => {
//     console.log('Close button clicked');
//     console.log('Before closing:', showProfilePopup);
//   setShowProfilePopup(false);
//   console.log('After closing:', showProfilePopup);
//   };

//   return (
//     <div className={`popup ${showProfilePopup ? 'show' : ''}`}>
//       <div className="popup-content">
//         <span className="close-button" onClick={toggleProfilePopup}>&times;</span>
//         <div className="icon d-flex justify-content-center align-items-center">
//           <FontAwesomeIcon icon={faUser} style={{ fontSize: '35px' }} />
//         </div>
//         <h2>User Profile</h2>
//         <form>
//           <label>Email address:</label>
//           <input type="email" placeholder="Enter email" />
//           {/* Add more input fields as needed */}
//         </form>
//         <button onClick={closeProfilePopup}>Close</button>
//         <button>Logout</button>
//       </div>
//     </div>
//   );
// };

// export default ProfileModal;
