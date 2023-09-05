import Logo from "../assets/images/logo-green.svg";

import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPinterest,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-footer-cyan flex flex-col justify-center items-center py-20">
      <img src={Logo} alt="logo" className="w-44 mb-10" />
      <ul className="flex gap-14 mb-20">
        <li>
          <a
            href="#"
            className="font-barlow font-semibold text-lg text-cyan hover:text-white"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-barlow font-semibold text-lg text-cyan hover:text-white"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#"
            className="font-barlow font-semibold text-lg text-cyan hover:text-white"
          >
            Projects
          </a>
        </li>
      </ul>
      <div className="flex gap-7">
        <FaFacebook className="text-cyan hover:text-white cursor-pointer text-xl" />
        <FaInstagram className="text-cyan hover:text-white cursor-pointer text-xl" />
        <FaTwitter className="text-cyan hover:text-white cursor-pointer text-xl" />
        <FaPinterest className="text-cyan hover:text-white cursor-pointer text-xl" />
      </div>
    </footer>
  );
};

export default Footer;
