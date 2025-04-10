import React from "react";

const podcastInfo = {
  info: "Dive into the world of basketball with insights, stories, and analysis.Tune in weekly for exciting discussions and in-depth analysis that will keep you informed and entertained. Mind the Game",
  cast: "Hosted by Lebron and Steve.",
};

const Hero = () => {
  return (
    <section id="home" className='relative bg-center bg-repeat flex flex-col items-center justify-center text-center'>
      {/* Overlay */}
      {/* <div className="absolute h-full inset-0 bg-(--vanilla) opacity-95"></div> */}
      <div className="relative text-(--space-cadet) flex flex-col w-3/4">
        <p>{podcastInfo.info}</p>
        <p>{podcastInfo.cast}</p>
      </div>
      <button className="relative bg-(--lion) text-(--space-cadet) mt-3 cursor-pointer">
        Listen Now
      </button>
    </section>
  );
};

export default Hero;
