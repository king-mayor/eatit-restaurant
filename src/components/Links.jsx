import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import logo from "../assets/logo.png";
const FooterLinks = [
  {
    id: 1,
    link: "#",
    name: "Home",
  },
  {
    id: 2,
    link: "/#",
    name: "About",
  },
  {
    id: 3,
    link: "/#",
    name: "Contact",
  },
  {
    id: 4,
    link: "/#",
    name: "Blog",
  },
];
function Links() {
  return (
    <div>
      <div className="flex lg:flex-row flex-col text-start justify-around py-14 md:mx-14 mx-10 gap-16 mb-12">
        {/* {the footer logo section} */}
        <div data-aos="fade-up" data-aos-duration="2000">
          <img className="w-36" src={logo} alt="eaternity-log" />
          <p className="text-slate-600 text-xl font-bold my-4">
            Cozy Vibes, Unforgettable Moments – Your Perfect Espresso Escape
          </p>
          <button className="btns">Visit youtube Channel</button>
        </div>
        {/* {The links section} */}
        <div
          className="flex gap-20"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          <div>
            <h2 className="text-black text-xl font-semibold">
              Important Links
            </h2>
            {FooterLinks.map((menu) => (
              <ul className="mt-4" key={menu.id}>
                <li className="text-black text-lg">
                  <a className="" href={menu.link}>
                    {menu.name}
                  </a>
                </li>
              </ul>
            ))}
          </div>
          <div>
            <h2 className="text-black text-xl font-semibold">Quick Links</h2>
            {FooterLinks.map((menu) => (
              <ul className="mt-4" key={menu.id}>
                <li className="text-black text-lg">
                  <a href={menu.link}>{menu.name}</a>
                </li>
              </ul>
            ))}
          </div>
        </div>
        {/* {The Address links section} */}
        <div className="" data-aos="fade-up" data-aos-duration="3000">
          <h2 className="text-black text-xl font-medium">Address</h2>
          <div className="flex gap-4 pt-4">
            <FaInstagram size={32} className="cursor-pointer" />
            <FaFacebook size={32} className="cursor-pointer" />
            <FaLinkedin size={32} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Links;
