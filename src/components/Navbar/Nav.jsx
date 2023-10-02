import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="max-md:hidden">
      <ul className="flex flex-row gap-8 flex-wrap  justify-center align-middle">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-orange-600 transition-all ${
              isActive ? "text-orange-700" : "text-gray-400"
            }`
          }
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            `hover:text-orange-600 transition-all ${
              isActive ? "text-orange-700" : "text-gray-400"
            }`
          }
        >
          <li>About</li>
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `hover:text-orange-600 transition-all ${
              isActive ? "text-orange-700" : "text-gray-400"
            }`
          }
        >
          <li>Contact</li>
        </NavLink>

        <NavLink
          to="/github"
          className={({ isActive }) =>
            `hover:text-orange-600 transition-all ${
              isActive ? "text-orange-700" : "text-gray-400"
            }`
          }
        >
          <li>Github</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
