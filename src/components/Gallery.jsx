// src/components/UserProfile.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserProfile = () => {
  const [images, setImages] = useState([]);
  const { userID } = useParams();

  useEffect(() => {
    const fetchUserImages = async () => {
      try {
        const response = await fetch(`/jsonfiles/${userID}.json`); // Adjust the path to your JSON files
        const userImages = await response.json();
        setImages(userImages);

      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchUserImages();
  }, [userID]);

  return (
    <div>
      <div className='profile-gallery'>
      <h1>{userID}'s Profile</h1>
        <img src={`profileImage/${userID}.jpg`} alt={`${userID}'s Profile`} className='profile-image' />
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img src={image} alt={`Image ${index}`} className='display'/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
