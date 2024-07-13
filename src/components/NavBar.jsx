import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

const NavBar = () => {
  return (
    // Header component
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      {/* Nav Bar */}
      <nav className="w-full flex screen-max-width">
        {/* Logo */}
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />

        {/* Nav List Container */}
        <div className="flex flex-1 justify-center max-sm:hidden">
          {/* Nav List Items */}
          {navLists.map((nav) => (
            <div
              key={nav}
              className="px-5 text-sm cursor-pointer text-gray hover:text-white transition-all"
            >
              {nav}
            </div>
          ))}
        </div>

        {/* Nav Icon Container */}
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          {/* Nav Icons */}
          <img src={searchImg} alt="Search Icon" width={18} height={18} />
          <img src={bagImg} alt="Buy Icon" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
