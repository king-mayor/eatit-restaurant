import React from "react";
import Hero from "../assets/hero.png";
function Introduction() {
  return (
    <div className="bg-light-blue py-3">
      <div className="flex md:justify-around items-center md:flex-row flex-col md:text-start text-center gap-10 px-12 py-36">
        <div
          className="md:w-[50%] w-[f100%]"
          data-aos="flip-left"
          data-aos-duration="2000"
        >
          <h1 className="text-6xl text-primary font-cursive pb-8">Rice Bowl</h1>
          <p className="text-gray-600 text-lg leading-6">
            Lorem ipsum dolor sit amet consectetur adipiscing elit. Accusamus
            hic soluta aliquid a praesentium architecto reiciendis natus
            expedita modi deleniti.
          </p>
          <button
            className="text-white bg-orange-400 py-1
           px-2 rounded-lg cursor-pointer hover:bg-orange-300
            hover:scale-105 mt-3"
          >
            View Our Menu
          </button>
        </div>
        <div data-aos="flip-right" data-aos-duration="2000">
          <img src={Hero} alt="hero-image" />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
