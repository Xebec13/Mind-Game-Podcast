import React from "react";

const podcastInfo = {
  info: "Dive into the world of basketball with insights, stories, and analysis.Tune in weekly for exciting discussions and in-depth analysis that will keep you informed and entertained. Mind the Game",
  cast: "Hosted by Lebron and Steve.",
};

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-(--liver) text-center text-(--wheat) flex flex-col items-center justify-center "
    >
      <div className="relative flex flex-col w-3/4 ">
        <p>{podcastInfo.info}</p>
        <p>{podcastInfo.cast}</p>
      </div>
      <button className="bg-(--space-cadet) mt-3 cursor-pointer">
        Listen Now
      </button>
    </section>
  );
};

export default Hero;
