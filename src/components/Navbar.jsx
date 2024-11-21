import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";
import { IoMdMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const NavLinks = [
  {
    id: "1",
    name: "Noodle Soup",
    link: "#",
  },
  {
    id: 2,
    name: "Rice Bowls",
    link: "/#",
  },
  {
    id: 3,
    name: "Salad Bowls",
    link: "/#",
  },
  {
    id: 4,
    name: "Beverages",
    link: "/#",
  },
  {
    id: 5,
    name: "Kids",
    link: "/#",
  },
];
function Navbar() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className="fixed right-0 left-0 border-b-2 border-gray-400 z-50">
      <div className=" bg-light-blue py-4">
        <div
          className="flex justify-around items-center z-40 relative"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div>
            <img src={logo} alt="earternity-restaurant" className="w-36" />
          </div>
          <div className="">
            <ul className="md:flex text-xl gap-8 hidden">
              {NavLinks.map((data) => (
                <li
                  className="hover:border-b-2 hover:border-orange-400 duration-75"
                  key={data.id}
                >
                  <a href={data.link}>{data.name}</a>
                </li>
              ))}
            </ul>
          </div>
          {/* {Mobile menu} */}
          <div>
            <button>
              {menu ? (
                <IoMdClose
                  onClick={toggleMenu}
                  className="text-3xl md:hidden bg-primary text-white font-thin"
                />
              ) : (
                <IoMdMenu
                  onClick={toggleMenu}
                  className="text-3xl md:hidden bg-primary text-white"
                />
              )}
            </button>
            {/* {menu links} */}
            {menu && (
              <ul className="overlaying">
                {NavLinks.map((data) => (
                  <li className="leading-9 my-8 hover:bg-primary" key={data.id}>
                    <a
                      className="text-xl text-center hover:cursor-pointer"
                      href={data.link}
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
