import React from "react";
import aboutImage from "../assets/ls.png";

const aboutInfo = [
  {
    name: "Lebron James",
    info: "LeBron sees basketball like a chessboard. He’s always three steps ahead, breaking down the game with unmatched precision. His ability to explain the sport makes you feel like you’re part of the action.",
  },
  {
    name: "Steve Nash",
    info: "Steve approaches basketball like an artist. His creativity and vision turn the game into a masterpiece. Listening to him feels like discovering a new way to see the sport.",
  },
];
const About = () => {
  return (
    <section className="bg-(--lion)">
      <div>
        <img
          src={aboutImage}
          alt="hosts"
          className="rounded-2xl w-full"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4 mt-5">
        {aboutInfo.map(({ name, info }, index) => (
          <div
            key={index}
            className={`bg-(--vanilla) w-full md:w-1/2 p-5 rounded-3xl ${
              index % 2 === 0 ? "text-left" : "text-right"
            }`}
          >
            <h2 className="text-(--space-cadet)">{name}</h2>
            <p>{info}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
