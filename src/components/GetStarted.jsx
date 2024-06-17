import React from "react";
import food2 from "../assets/food2-plate.png";
function GetStarted() {
  return (
    <div className="lg:overflow-hidden">
      <div className="bg-primary md:flex md:flex-row flex-col justify-around md:items-center text-center py-4 relative opacity-100">
        <div
          className="flex lg:flex-row flex-col justify-center items-center md:gap-10 lg-text-start text-start gap-4"
          data-aos="fade-up"
          data-aos-duration="2000"
        >
          <div>
            <h2 className="text-3xl font-bold text-white">
              Ready to Get Started
            </h2>
            <p className="text-white text-md pt-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>
          <div>
            <input
              className="pl-2 py-2 border-none outline-none opacity-100 overflow-none relative"
              type="email"
              placeholder="Enter your email"
            />
            <button className="bg-white text-primary font-bold py-2 px-2">
              GET STARTED
            </button>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000">
          <img
            className="w-60 absolute left-3 md:opacity-100 opacity-20 bottom-3 top-1 md:relative"
            src={food2}
            alt="food2"
          />
        </div>
      </div>
    </div>
  );
}

export default GetStarted;
