import ArrowDown from "../assets/images/icon-arrow-down.svg";

import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="h-screen bg-mobile-background bg-no-repeat bg-cover bg-center md:bg-desktop-background">
      <Navbar />

      <h1 className="text-center text-white text-4xl md:text-5xl mx-auto md:max-w-3xl font-fraunces font-black mt-20 tracking-widest">
        WE ARE CREATIVES
      </h1>

      <img
        src={ArrowDown}
        alt="down arrow"
        className="mx-auto mt-[3.25rem] md:mt-24"
      />
    </header>
  );
};

export default Header;
