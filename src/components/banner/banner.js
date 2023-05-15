import React from "react";
import LeftBanner from "./leftBanner";
import RightBanner from "./rightBanner";

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full py-20 flex border-b-1 border-black font-titleFont"
    >
      <LeftBanner />

      <RightBanner />
    </section>
  );
};

export default Banner;
