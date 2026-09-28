import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import axios from "axios";
import { MyStore } from "../../State/useContext";

const Navbar = () => {
  const [log, setLog] = useState();
  const {setAccessToken}=useContext(MyStore)
  const navigate = useNavigate();
const logout = async () => {
  try {
    const res = await axios.post(
      "/api/auth/logout",
      {},
      {
        withCredentials: true,
      }
    );

   localStorage.removeItem("accessToken");
setAccessToken(null);
navigate("/");
  } catch (error) {
    console.log(error.response?.data);
  }
};
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

          <button
            onClick={logout}
            className="rounded-xl px-5 py-2.5 text-sm font-medium text-gray-400 transition hover:bg-white/5 hover:text-white"
          >
            LogOut
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;