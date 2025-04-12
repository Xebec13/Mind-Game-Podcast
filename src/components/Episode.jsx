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
    <section id="episode" className="bg-(--vanilla) text-(--space-cadet) text-center md:text-left">
      <div className="mb-4">
        <h1>Latest Episodes</h1>
        <span>Featured</span>
      </div>
      <div className="grid grid-rows-3 md:grid-cols-3 md:grid-rows-none gap-4">
        {episodeCard.map(({ title, description, image }, index) => (
          <div key={index} className="w-full  mx-auto">
            <div className="w-full aspect-video">
              <img
                src={image}
                alt={`Cover image for ${title}`}
                className="h-full w-full object-cover object-center rounded-xl min-w-full"
                loading="lazy"
              />
            </div>
            <div className="mt-2">
              <h2>{title}</h2>
              <span>{description}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Episode;
