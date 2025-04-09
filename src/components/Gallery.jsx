import React from "react";

import g1 from "../assets/g1.jpg";
import g2 from "../assets/g2.jpg";
import g3 from "../assets/g3.jpg";
import g4 from "../assets/g4.jpg";
import g5 from "../assets/g5.jpg";
import g6 from "../assets/g6.jpg";

const Gallery = () => {
  return (
    <section>
      <div className="grid grid-cols-3 gap-4">
        <img
          src={g1}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <img
          src={g2}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <img
          src={g3}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <img
          src={g4}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <img
          src={g5}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
        <img
          src={g6}
          alt="gallery"
          className="w-full aspect-video object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Gallery;