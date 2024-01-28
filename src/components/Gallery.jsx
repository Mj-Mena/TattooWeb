// src/components/UserProfile.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const [images, setImages] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { userID } = useParams();
  const [number, setNumber] = useState();
  const handleBack = () => {
    window.location = "http://127.0.0.1:5173/#ra";
  };
  const handlefull = () => {
    setIsActive((current) => !current);
  };
  useEffect(() => {
    const fetchUserImages = async () => {
      try {
        const response = await fetch(`/jsonfiles/${userID}.json`); // Adjust the path to your JSON files
        const userImages = await response.json();
        setImages(userImages);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchUserImages();
  }, [userID]);

  return (
    <div>
      <div className="profile-gallery">
        <img
          src={`profileImage/${userID}.jpg`}
          alt={`${userID}'s Profile`}
          className="profile-image"
        />
        <section className="deets">
          <div className="deethead">
            <h1 className="artistIntro">{userID}</h1>
            <button className="goBack" onClick={handleBack}>
              Back
            </button>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nobis
            nemo debitis nisi deleniti sit corrupti. Nam iure deserunt beatae?
          </p>
        </section>
      </div>
      <div className="image-gallery">
        {images.map((image, index) => (
          <div key={index} className="image-item">
            <img
              src={image}
              alt={`Image ${index}`}
              className="display"
              onClick={handlefull}
            />
            <div
              id="fullpage"
              style={{
                display: isActive ? "none" : "blocks",
                backgroundImage: isActive ? "white" : "",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;
