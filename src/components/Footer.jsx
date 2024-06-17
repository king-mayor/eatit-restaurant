import React from "react";
const Footers = [
  {
    id: 1,
    link: "#",
    name: "Privacy",
  },
  {
    id: 2,
    link: "/#",
    name: "Accessibility",
  },
  {
    id: 3,
    link: "/#",
    name: "Terms",
  },
];
function Footer() {
  return (
    <div
      className="flex justify-between bg-gray-200 py-4 px-10"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <div>
        <p className="text-md text-slate-500 font-semibold">
          @2024 All rights reserved Inc.
        </p>
      </div>
      <div className="flex gap-4 md:flex-row flex-col">
        {Footers.map((links) => (
          <ul key={links.id} className="">
            <li className="text-md text-slate-500 font-semibold">
              <a className="" href={links.link}>
                {links.name}
              </a>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
}

export default Footer;
