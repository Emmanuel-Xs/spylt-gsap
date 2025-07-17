import React from "react";
import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <header className="fixed w-full top-0 z-100">
      <nav
        aria-label="main navigation"
        className="m-[min(5vw,_1.5rem)] lg:m-[min(5vw,_2rem)] mlb-[1.3rem] lg:mlb-4 min-bs-[min(7vw,_4rem)] flex justify-between items-center"
      >
        <Link to="/">
          <img
            src="/images/nav-logo.svg"
            alt="nav-logo"
            className="w-20 sm:w-25 md:w-27 lg:w-[min(6vw,_10rem)] -mis-2"
            loading="eager"
            width="102"
            height="55"
          />
        </Link>
        {/* navigation button */}
        <div className="space-b-1 lg:space-b-2 bg-primary-200 lg:bg-transparent plb-0 pli-4 md:plb-4 md:pli-5  rounded-full h-12 md:h-14 lg:h-[min(3.1vw,_4rem)] flex justify-center items-center flex-col flex-none cursor-pointer">
          <div className="w-4 lg:w-[min(3vw,_3rem)] h-0.5 bg-secondary-800"></div>
          <div className="w-4 lg:w-[min(3vw,_3rem)] h-0.5 bg-secondary-800"></div>
        </div>
        <NavLink
          to="/"
          className="plb-0 pli-4 md:plb-4 md:pli-6 lg:pli-[min(1.9vw,_2rem)] h-12 md:h-14 lg:h-[min(3.1vw,_4rem)] text-secondary-800 uppercase bg-primary-100 text-base rounded-[30vw] font-bold inline-flex justify-center items-center hover:bg-secondary-500 leading-[120%] tracking-[.01vw] transition-[background-color_0.3s_cubic-bezier(.455,_.03,_.515,_.955)] delay-75 font-antonio"
        >
          find in stores
        </NavLink>
      </nav>
    </header>
  );
};
