import { useState } from "react";

import Logo from "../assets/images/logo.svg";
import Menu from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="flex justify-between items-center pt-8 px-6 ">
        <img src={Logo} alt="logo" />
        <img
          src={Menu}
          alt="hamburger menu"
          className="md:hidden cursor-pointer"
          onClick={handleIsOpen}
        />

        <ul className="hidden md:flex gap-12 text-white">
          <li>
            <a
              href="#"
              className="font-barlow font-semibold text-lg text-white"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-barlow font-semibold text-lg text-white"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-barlow font-semibold text-lg text-white"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#"
              className="bg-white font-fraunces font-bold text-sm text-desaturated-blue rounded-full py-4 px-8 hover:text-white hover:bg-[hsl(198,93%,71%)] transition-all duration-300 ease-in-out"
            >
              CONTACT
            </a>
          </li>
        </ul>
      </div>

      {isOpen && (
        <div className="absolute w-full px-6 mt-7">
          <div className="flex justify-end md:hidden">
            <div className="w-0 h-0 border-b-[2.5rem] border-l-[2.5rem] border-b-white border-l-[transparent]"></div>
          </div>
          <ul className="bg-white text-center flex flex-col gap-8 py-9 md:hidden">
            <li>
              <a
                href="#"
                className="font-barlow font-semibold text-xl text-dark-grayish-blue"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-barlow font-semibold text-xl text-dark-grayish-blue"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="font-barlow font-semibold text-xl text-dark-grayish-blue"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#"
                className="bg-yellow font-fraunces font-bold text-sm text-desaturated-blue rounded-full py-4 px-8"
              >
                CONTACT
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
