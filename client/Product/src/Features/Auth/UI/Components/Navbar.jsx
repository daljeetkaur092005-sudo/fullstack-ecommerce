import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-white/10 bg-[#080812] px-6 py-4 text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between">

        {/* Logo */}
        <h1 className="text-2xl font-bold">
          <span className="text-purple-500">My</span>
          <span className="text-cyan-400">Store</span>
        </h1>

        {/* Navigation */}
        <div className="flex items-center gap-3">

          <NavLink
            to="/main"
            className={({ isActive }) =>
              `rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-cyan-400 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/main/product"
            className={({ isActive }) =>
              `rounded-xl px-5 py-2.5 text-sm font-medium transition ${
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-cyan-400 text-white"
                  : "text-gray-400 hover:bg-white/5 hover:text-white"
              }`
            }
          >
            Product
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;

