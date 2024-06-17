import React from "react";
import Banner from "../assets/banner (2).png";
import Slider from "react-slick";
const imageScroller = [
  {
    id: 1,
    image: Banner,
    food: "Noodle Soup",
    pricing: "Only $250.00",
    link: "/#",
    recipe: "Buy Now",
  },
  {
    id: 2,
    image: Banner,
    food: "Noodle Soup",
    pricing: "Only $250.00",
    link: "/#",
    recipe: "Buy Now",
  },
  {
    id: 3,
    image: Banner,
    food: "Noodle Soup",
    pricing: "Only $250.00",
    link: "/#",
    recipe: "Buy Now",
  },
  {
    id: 4,
    image: Banner,
    food: "Noodle Soup",
    pricing: "Only $250.00",
    link: "/#",
    recipe: "Buy Now",
  },
  {
    id: 5,
    image: Banner,
    food: "Noodle Soup",
    pricing: "Only $250.00",
    link: "/#",
    recipe: "Buy Now",
  },
];
function Menu() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  };
  return (
    <div>
      <div className="bg-primary py-12 w-full overflow-hidden">
        <div
          className="flex justify-center flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h2 className="text-white text-3xl">Our Menu</h2>
          <p className="text-white text-md py-6">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.<br></br>{" "}
            Esse natus odio eius possimus laborum similique.
          </p>
        </div>
        <div
          className="overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <Slider {...settings}>
            {imageScroller.map((slide) => (
              <div
                key={slide.id}
                className="text-center grid place-items-center"
              >
                <img
                  className="w-80 ml-20"
                  src={slide.image}
                  alt="menu-sliders"
                />
                <h2 className="text-white text-2xl pt-3">{slide.food}</h2>
                <h1 className="font-cursive text-white text-3xl py-3">
                  {slide.pricing}
                </h1>
                <ul>
                  <li>
                    <a
                      className="text-xl text-white border-b-2 border-white"
                      href={slide.link}
                    >
                      {slide.recipe}
                    </a>
                  </li>
                </ul>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Menu;
