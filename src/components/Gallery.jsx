import React from "react";

import g1 from "../assets/g1.jpg";
// import g2 from "../assets/g2.jpg";
import logo from "../assets/chatlogopng.png";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const galleryImages = [
  {
    image: g1,
  },
  {
    image: logo,
  },
  {
    image: g3,
  },
  {
    image: g4,
  },
  {
    image: g5,
  },
  {
    image: g6,
  },
];

const Gallery = () => {
  return (
    <section className="bg-(--liver)">
      <div className=" grid grid-cols-3 gap-4 md:w-3/4 mx-auto">
        {galleryImages.map(({ image }, index) => (
          <div key={index} className="w-full h-full aspect-square">
            <img
              src={image}
              alt={`Gallery image ${index + 1}`}
              className="h-full w-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
