// src/components/UserProfile.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const user1 = {
    location: "Sydney, Australia",
    studio: "SYDNEY TATTOO ARTISTS",
    email: "galang@gmail.com",
    phone: "6395411253",
    sms: "@juicytatties",
  };
  const user2 = {
    location: "Rizal, Philippines",
    studio: "Studio Mikki",
    email: "mikki.malonzo@gmail.com",
    phone: "099514840721",
    sms: "@mikki.malonzo",
  };
  const user3 = {
    location: "Quezon City, Philippines",
    studio: "Blvck tattoo studio",
    email: "aldrin.jimenez@gmail.com",
    phone: "09613149553",
    sms: "@aldrin_ace_tattoo",
  };
  const user4 = {
    location: "Sydney, Australia",
    studio: "SYDNEY TATTOO ARTISTS",
    email: "trenched_tom@gmail.com",
    phone: "6344186739",
    sms: "@trenched",
  };
  const user5 = {
    location: "Toronto, Canada",
    studio: "Private Studio",
    email: "jiemin.lin@gmail.com",
    phone: "09149855158",
    sms: "@jieminart",
  };
  const user6 = {
    location: "Portland, Oregon",
    studio: "Private Studio",
    email: "pantattoo@gmail.com",
    phone: "44982516638",
    sms: "@deadpan.tattoo",
  };
  const user7 = {
    location: "Bali, Indonesia",
    studio: "Lumina Tattoo Studio Bali",
    email: "lumina.tom@gmail.com",
    phone: "+62816580918",
    sms: "tom_lumina_tattoo",
  };

  const [images, setImages] = useState([]);
  const [isActive, setIsActive] = useState(false);
  const { userID } = useParams();
  const [number, setNumber] = useState();
  const handleBack = () => {
    window.location = "http://127.0.0.1:5173/";
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

  const userSwitch = (user) => {
    console.log("URL PASSSED IS", user);
    switch (user) {
      case "Just Galang":
        return user1;
      case "Mikki Malonzo":
        return user2;
      case "Aldrin Ace Jimenez":
        return user3;
      case "Tom Roder":
        return user4;
      case "Jiemin Lin":
        return user5;
      case "Pan":
        return user6;
      case "Tom Lumina":
        return user7;
      default:
        return console.log("Error");
    }
  };
  const currentUser = userSwitch(userID);
  console.log("CURRENT USER VALUE", currentUser);

  return (
    <div className="galcont">
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
          <h4>{currentUser.location}</h4>
          <h4>{currentUser.studio}</h4>
          <h4>{currentUser.email}</h4>
          <h4>{currentUser.phone}</h4>
          <h4>{currentUser.sms}</h4>
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
