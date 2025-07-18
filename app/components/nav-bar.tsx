import { Link, NavLink } from "react-router";

export const Navbar = () => {
  return (
    <header className="fixed top-0 z-100 w-full">
      <nav
        aria-label="main navigation"
        className="m-[min(5vw,_1.5rem)] mlb-[1.3rem] flex items-center justify-between min-bs-[min(7vw,_4rem)] lg:m-[min(5vw,_2rem)] lg:mlb-4"
      >
        <Link to="/">
          <img
            src="/images/nav-logo.svg"
            alt="nav-logo"
            className="-mis-2 w-20 sm:w-25 md:w-27 lg:w-[min(6vw,_10rem)]"
            loading="eager"
            width="102"
            height="55"
          />
        </Link>
        {/* navigation button */}
        <div className="flex h-12 flex-none cursor-pointer flex-col items-center justify-center rounded-full bg-primary-200 pli-4 plb-0 space-b-1 md:h-14 md:pli-5 md:plb-4 lg:h-[min(3.1vw,_4rem)] lg:bg-transparent lg:space-b-2">
          <div className="h-0.5 w-4 bg-secondary-800 lg:w-[min(3vw,_3rem)]"></div>
          <div className="h-0.5 w-4 bg-secondary-800 lg:w-[min(3vw,_3rem)]"></div>
        </div>
        <NavLink
          to="/"
          className="inline-flex h-12 items-center justify-center rounded-[30vw] bg-primary-100 pli-4 plb-0 font-antonio text-base leading-[120%] font-bold tracking-[.01vw] text-secondary-800 uppercase transition-[background-color_0.3s_cubic-bezier(.455,_.03,_.515,_.955)] delay-75 hover:bg-secondary-500 md:h-14 md:pli-6 md:plb-4 lg:h-[min(3.1vw,_4rem)] lg:pli-[min(1.9vw,_2rem)]"
        >
          find in stores
        </NavLink>
      </nav>
    </header>
  );
};
