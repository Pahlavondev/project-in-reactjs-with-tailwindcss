import React, { useState } from "react";
import { logo, menu, close } from "../assets";
import { navigationLinks } from "../util/constants";
import { styles } from "../util/style";

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [active, setActive] = useState("home");

  const toggleHandler = () => setToggleNav((prev) => !prev);

  const activeHandler = (id) => setActive(id);

  return (
    <div className={`w-full py-6 ${styles.flexBetween}`}>
      {/* Logo */}

      <a href="/">
        <img
          src={logo}
          alt="Logo"
          className="w-[130px] h-[35px] cursor-pointer"
        />
      </a>

      {/* navigation link */}
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navigationLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
            ${index === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
            ${active === nav.id ? "text-white" : "text-lightWhite"} 
            hover:text-white transition-all duration-500`}
            onClick={() => activeHandler(nav.id)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      {/* Navigation btn */}
      <div className={"sm:hidden flex flex-1 justify-end items-center"}>
        <img
          src={toggleNav ? close : menu}
          alt="nav"
          className="w-[30px] h-[30px] object-contain"
          onClick={toggleHandler}
        />

        <div
          className={`${
            !toggleNav ? "hidden" : "flex"
          } p-6 absolute top-20 right-0 left-0 w-full sidebar bg-black-gradient z-[99]`}
        >
          <ul className="list-none flex justify-center items-center flex-1">
            {navigationLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-montserrat font-normal cursor-pointer text-[16px] text-white 
                ${index === navigationLinks.length - 1 ? "mr-0" : "mr-10"}
                ${active === nav.id ? "text-white" : "text-lightWhite"} 
               hover:text-white transition-all duration-500`}
                onClick={() => activeHandler(nav.id)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
