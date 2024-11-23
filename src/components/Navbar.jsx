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
    <nav className="fixed right-0 left-0 border-b-2 border-orange-800 shadow-md shadow-orange-700 z-50">
      <div className=" bg-black py-4">
        <div
          className="flex lg:justify-around justify-between items-center z-40 relative"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
          <div>
            <img
              src={logo}
              alt="earternity-restaurant"
              className="lg:w-28 w-20"
            />
          </div>
          <div className="">
            <ul className="md:flex text-xl gap-8 hidden">
              {NavLinks.map((data) => (
                <li className="" key={data.id}>
                  <a
                    className="text-gray-200 hover:text-orange-800"
                    href={data.link}
                  >
                    {data.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* {Mobile menu} */}
          <div className="">
            <button>
              {menu ? (
                <IoMdClose
                  onClick={toggleMenu}
                  className="text-4xl md:hidden text-orange-800 font-bold"
                />
              ) : (
                <IoMdMenu
                  onClick={toggleMenu}
                  className="text-4xl md:hidden text-orange-800 font-bold"
                />
              )}
            </button>
            {/* {menu links} */}
            <div className="">
              {menu && (
                <div className="">
                  <ul className="overlaying md:hidden">
                    {NavLinks.map((data) => (
                      <li
                        className="leading-9 my-8 hover:bg-orange-800"
                        key={data.id}
                      >
                        <a
                          className="text-xl text-center hover:cursor-pointer"
                          href={data.link}
                        >
                          {data.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
