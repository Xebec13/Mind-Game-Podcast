import React from "react";
import ep2 from "../assets/ep2.jpg";
import ep6 from "../assets/ep6.jpg";
import ep4 from "../assets/ep4.jpg";

const episodeCard = [
  { title: "Episode 1", description: "Basketball Modern Offense", image: ep2 },
  { title: "Episode 2", description: "Art of the Game", image: ep6 },
  { title: "Episode 3", description: "New Generation of Hoopers", image: ep4 },
];

const Episode = () => {
  return (
    <section id="episode" className="bg-(--liver)">
      <div className="mb-5">
        <h1>Latest Episodes</h1>
        <span className="text-white">Featured</span>
      </div>
      <div className="grid grid-cols-3">
        {episodeCard.map(({ title, description, image }, index) => (
          <div key={index} className="p-1">
            <div className="w-full aspect-video">
              <img
                src={image}
                alt={`Cover image for ${title}`}
                className="h-full w-full object-cover object-center rounded-xl"
                loading="lazy"
                width="640"
                height="360"
              />
            </div>
            <div className="mt-3">
              <h2>{title}</h2>
              <span className="text-white">{description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Episode;
