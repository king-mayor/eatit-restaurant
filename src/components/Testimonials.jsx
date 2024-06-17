import React from "react";
import Slider from "react-slick";
import user1 from "../assets/user1.jpg";
import user2 from "../assets/user2.jpg";
import user3 from "../assets/user3.jpg";
import user4 from "../assets/user4.jpg";
import user5 from "../assets/user5.jpg";

const Testimonies = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora culpa et nesciunt enim dolore hic est laboriosam. Cumque, delectus! Natus sunt quo, odit consequuntur atque totam blanditiis quod modi hic expedita impedit. Molestias officiis ducimus repellendus alias, voluptas eos?",
    user: user1,
    identity: "Stella Baker",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora culpa et nesciunt enim dolore hic est laboriosam. Cumque, delectus! Natus sunt quo, odit consequuntur atque totam blanditiis quod modi hic expedita impedit. Molestias officiis ducimus repellendus alias, voluptas eos?",
    user: user2,
    identity: "John Baker",
  },
  {
    id: 3,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora culpa et nesciunt enim dolore hic est laboriosam. Cumque, delectus! Natus sunt quo, odit consequuntur atque totam blanditiis quod modi hic expedita impedit. Molestias officiis ducimus repellendus alias, voluptas eos?",
    user: user3,
    identity: "Steve Jones",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit tempora culpa et nesciunt enim dolore hic est laboriosam. Cumque, delectus! Natus sunt quo, odit consequuntur atque totam blanditiis quod modi hic expedita impedit. Molestias officiis ducimus repellendus alias, voluptas eos?",
    user: user4,
    identity: "Victoria Gates",
  },
  {
    id: 5,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla labore quod expedita incidunt, fugit facere ullam corporis autem eligendi a, ipsa, impedit tempore culpa voluptatibus quae tempora officia assumenda commodi! Explicabo, veniam. Sit odio vel perspiciatis. Dolor aliquam persp",
    user: user5,
    identity: "Brian Woods",
  },
];
function Testimonials() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
    <div className="py-16">
      <div className="">
        <h2 className="text-5xl text-dark text-center font-cursive font-bold pb-10">
          Testimonials
        </h2>
      </div>
      <div
        className="overflow-hidden"
        data-aos="fade-up-left"
        data-aos-duration="1000"
      >
        <Slider {...settings}>
          {Testimonies.map((users) => (
            <div key={users.id}>
              <div className="flex justify-center items-start flex-col pl-10 bg-slate-100 p-4 rounded-lg mx-4">
                <img
                  className="rounded-full h-16 w-16"
                  src={users.user}
                  alt="clients"
                />
                <p className="text-[0.8em] py-4">{users.text}</p>
                <h2 className="text-2xl text-black font-cursive font-bold">
                  {users.identity}
                </h2>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Testimonials;
