// App.js

import React from "react";
import CardGallery from "./CardGallery";

const cardData = [
  {
    imageUrl: "/images/Gallaryimg/img1.webp",
  },
  {
    imageUrl: "/images/Gallaryimg/img2.webp ",
  },
  {
    imageUrl: "/images/Gallaryimg/img3.webp ",
  },
  {
    imageUrl: " /images/Gallaryimg/img4.webp",
  },
  {
    imageUrl: " /images/Gallaryimg/img5.webp ",
  },
  {
    imageUrl: "/images/Gallaryimg/img6.webp ",
  },
  {
    imageUrl: "/images/Gallaryimg/img7.webp ",
  },
  {
    imageUrl: " /images/Gallaryimg/img8.webp",
  },
  {
    imageUrl: "/images/Gallaryimg/img9.webp ",
  },
  {
     imageUrl: "/images/Gallaryimg/img10.webp ",
  },
  {
    imageUrl: " /images/Gallaryimg/img11.webp",
  },
  {
    imageUrl: "/images/Gallaryimg/img12.webp ",
  },
  // Add more card data as needed
];

const MainCardGallery = () => {
  return (
    <div className=" sm:grid grid-cols-3">
      {cardData.map((card, index) => (
        <CardGallery key={index} {...card} />
      ))}
    </div>
  );
};

export default MainCardGallery;
