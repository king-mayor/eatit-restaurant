import React from "react";
import Banner from "../assets/banner (2).png";

function About() {
  return (
    <div>
      <div
        className="flex md:justify-around md:flex-row flex-col md:items-center
       text-start py-20 md:gap-4 gap-8 md:px-12 px-12"
      >
        <div data-aos="flip-left" data-aos-duration="2000">
          <img src={Banner} alt="Banner-image" />
        </div>
        <div
          className="md:w-[50%] w-full"
          data-aos="flip-right"
          data-aos-duration="2000"
        >
          <h2 className="text-dark text-3xl font-bold">About</h2>
          <h1 className="font-cursive text-6xl text-primary py-6">
            Fresh Bowl
          </h1>
          <p className="text-parag">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
            vel veritatis recusandae inventore soluta dolorem modi sint hic!
            Reprehenderit cum fuga voluptatum accusantium impedit eligendi hic
            assumenda architecto tempora, alias illum commodi labore corrupti
            recusandae! Reprehenderit mollitia eius id porro accusamus doloribus
            saepe consequatur perferendis vel, cumque maxime libero velit?
          </p>
          <button className="btns">View Our Menu</button>
        </div>
      </div>
    </div>
  );
}

export default About;
