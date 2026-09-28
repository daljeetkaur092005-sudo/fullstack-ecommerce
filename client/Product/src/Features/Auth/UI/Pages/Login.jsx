import React, { useContext } from "react";
import { useNavigate } from "react-router"
import {useForm} from "react-hook-form"
import axios from "axios"
import { MyStore } from "../../State/useContext";
const Login = () => {
    const navigate=useNavigate()
  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm();
const {setAccessToken,getMe}=useContext(MyStore)
const loginSubmit = async (data) => {
  try {
   const res = await axios.post(
  "/api/auth/login",
  data,
  {
    withCredentials: true,
  }
);
let token=res.data.data.accessToken
      localStorage.setItem("accessToken",token)
      setAccessToken(token)
      
          await getMe(token);
          console.log(token)
              navigate("/main");
  
  } catch (error) {
      console.log(error)
  }
};
  return (
    <div className="min-h-screen bg-[#050611] flex items-center justify-center p-5">

      {/* Main Container */}
      <div
        className="
          relative
          w-full
          max-w-6xl
          min-h-[650px]
          grid
          md:grid-cols-2
          overflow-hidden
          rounded-3xl
          border
          border-purple-500/20
          bg-[#0b0b18]
          shadow-[0_0_80px_rgba(139,92,246,0.15)]
        "
      >

        {/* ================= LEFT IMAGE ================= */}

        <div className="relative hidden md:block overflow-hidden">

          <img
            src="/"
            alt="Anime"
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
            "
          />

          {/* Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-[#050611]
              via-[#08071a]/50
              to-transparent
            "
          />

          {/* Purple Glow */}
          <div
            className="
              absolute
              -top-24
              -left-24
              w-80
              h-80
              bg-purple-500/30
              blur-[120px]
            "
          />

          {/* Cyan Glow */}
          <div
            className="
              absolute
              bottom-0
              right-0
              w-72
              h-72
              bg-cyan-400/20
              blur-[110px]
            "
          />

          {/* Left Content */}
          <div className="absolute bottom-10 left-10 right-10">

            <p
              className="
                text-cyan-400
                text-sm
                uppercase
                tracking-[5px]
                mb-4
              "
            >
              Welcome Back
            </p>

            <h1
              className="
                text-5xl
                lg:text-6xl
                font-bold
                text-white
                leading-tight
              "
            >
              Enter Your
              <br />

              <span className="text-purple-400">
                New World
              </span>
            </h1>

            <p className="text-gray-300 mt-5 max-w-md">
              Sign in to continue your journey and
              explore everything waiting for you.
            </p>

          </div>
        </div>


        {/* ================= RIGHT SIDE ================= */}

        <div className="flex items-center justify-center p-6 md:p-10">

          <div className="w-full max-w-md">

            {/* Logo */}
            <div className="text-center mb-8">

              <div
                className="
                  mx-auto
                  mb-4
                  w-16
                  h-16
                  rounded-2xl

                  bg-gradient-to-br
                  from-purple-600
                  via-violet-500
                  to-cyan-400

                  flex
                  items-center
                  justify-center

                  text-3xl
                  text-white

                  shadow-[0_0_35px_rgba(34,211,238,0.25)]
                "
              >
                ✦
              </div>

              <h2 className="text-3xl font-bold text-white">
                Welcome Back
              </h2>

              <p className="text-gray-400 mt-2 text-sm">
                Sign in to continue
              </p>

              {/* Divider */}
              <div className="flex items-center justify-center gap-3 mt-5">

                <span className="w-10 h-[1px] bg-purple-500/40" />

                <span className="text-cyan-400">
                  ✦
                </span>

                <span className="w-10 h-[1px] bg-purple-500/40" />

              </div>

            </div>


            {/* ================= FORM ================= */}

            <form
              onSubmit={handleSubmit(loginSubmit)}
              className="space-y-5"
            >

              {/* Email */}
              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Email
                </label>

                <input
                  {...register("email", {
                    required: "Enter your email",
                  })}
                  type="text"
                  placeholder="Enter your email"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl

                    bg-white/[0.04]

                    border
                    border-white/10

                    text-white
                    placeholder-gray-600

                    outline-none

                    transition-all
                    duration-300

                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20

                    hover:border-purple-400/40
                  "
                />

                {errors.email && (
                  <p className="text-cyan-400 text-xs mt-2">
                    {errors.email.message}
                  </p>
                )}

              </div>


              {/* Password */}
              <div>

                <label className="block text-sm text-gray-300 mb-2">
                  Password
                </label>

                <input
                  {...register("password", {
                    required: "Enter your password",
                  })}
                  type="password"
                  placeholder="Enter your password"
                  className="
                    w-full
                    px-4
                    py-3.5
                    rounded-xl

                    bg-white/[0.04]

                    border
                    border-white/10

                    text-white
                    placeholder-gray-600

                    outline-none

                    transition-all
                    duration-300

                    focus:border-cyan-400
                    focus:ring-2
                    focus:ring-cyan-400/20

                    hover:border-purple-400/40
                  "
                />

                {errors.password && (
                  <p className="text-cyan-400 text-xs mt-2">
                    {errors.password.message}
                  </p>
                )}

              </div>


              {/* Sign In Button */}
              <button
                type="submit"
                className="
                  group
                  w-full
                  py-3.5
                  rounded-xl

                  text-white
                  font-semibold

                  bg-gradient-to-r
                  from-purple-600
                  via-violet-500
                  to-cyan-400

                  shadow-[0_0_25px_rgba(34,211,238,0.20)]

                  hover:shadow-[0_0_40px_rgba(139,92,246,0.40)]

                  hover:-translate-y-0.5

                  transition-all
                  duration-300
                "
              >

                <span className="flex items-center justify-center gap-3">

                  Sign In

                  <span
                    className="
                      group-hover:translate-x-1
                      transition-transform
                    "
                  >
                    →
                  </span>

                </span>

              </button>


              {/* Divider */}
              <div className="flex items-center gap-4 py-2">

                <div className="h-px bg-white/10 flex-1" />

                <span className="text-gray-600 text-xs">
                  OR
                </span>

                <div className="h-px bg-white/10 flex-1" />

              </div>


              {/* Register */}
              <p className="text-center text-gray-400 text-sm">

                Don't have an account?{" "}

                <span
                  onClick={() => navigate("/register")}
                  className="
                    text-cyan-400
                    hover:text-purple-400
                    cursor-pointer
                    font-medium
                    transition-colors
                  "
                >
                  Register
                </span>

              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;

