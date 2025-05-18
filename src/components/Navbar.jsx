import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

const NavBar = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">
      <NavLink to="/">
        <img className="h-9" src={assets.logo} alt="logo" />
      </NavLink>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-8">
        <NavLink
          to="/"
          className="hover:text-primary transition-colors duration-300"
        >
          Home
        </NavLink>

        <NavLink
          to="/"
          className="hover:text-primary transition-colors duration-300"
        >
          All Products
        </NavLink>
        <NavLink
          to="/"
          className="hover:text-primary transition-colors duration-300"
        >
          Contact
        </NavLink>

        <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
          <input
            className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500"
            type="text"
            placeholder="Search products"
          />
          <img src={assets.search_icon} alt="search" className="h-4 w-4" />
        </div>

        <div className="relative cursor-pointer">
          <img
            src={assets.nav_cart_icon}
            alt="cart"
            className="w-6 opacity-80"
          />
          <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">
            3
          </button>
        </div>

        <button className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
          Login
        </button>
      </div>

      <button
        onClick={() => (open ? setOpen(false) : setOpen(true))}
        aria-label="Menu"
        className="sm:hidden"
      >
        {/* Menu Icon SVG */}
        <img src={assets.menu_icon} alt="menu" className="" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`${
          open ? "flex" : "hidden"
        } absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}
      >
        <NavLink
          to="/"
          onClick={() => setOpen(false)}
          className="block hover:text-primary transition-colors duration-300"
        >
          Home
        </NavLink>
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="block hover:text-primary transition-colors duration-300"
        >
          All Products
        </a>
        <a
          href="#"
          onClick={() => setOpen(false)}
          className="block hover:text-primary transition-colors duration-300"
        >
          My Orders
        </a>
        <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
          Login
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
