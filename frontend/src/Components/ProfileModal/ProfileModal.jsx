import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
// import './ProfileModal.css'
const ProfileModal = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="nav-link" onClick={toggleModal}><FontAwesomeIcon icon={faUser} style={{ color: "#ffffff", fontSize: "24px" }} /></div>

      {showModal && (
        <div className="profile-modal">
          <div className="modal-content">
            <span className="close-button" onClick={toggleModal}>&times;</span>
            <h2>User Profile</h2>
            <form>
              <label>Email address:</label>
              <input type="email" placeholder="Enter email" />
              {/* Add more input fields as needed */}
            </form>
            {/* <button onClick={toggleModal}>Close</button>
            <button onClick={handleLogout}>Logout</button> */}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfileModal;
