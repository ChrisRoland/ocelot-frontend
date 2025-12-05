import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
      {/* NAVBAR (always visible) */}
      <div className="fixed top-0 left-0 z-50 flex items-center justify-between h-20 bg-black px-6 w-full custom-container">
        <Link to="/">
          <img
            src="https://ocelotgroup.org/_next/static/media/ocelot_logo.ca0992e6.png"
            alt="logo"
            className="h-10"
          />
        </Link>

        {/* MOBILE ICON */}
        <div className="lg:hidden">
            {isNavOpen ? (
                <button onClick={() => setIsNavOpen(false)}>
                <svg
                    width="28"
                    height="28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white"
                >
                    <path
                    d="M6 6l12 12M18 6L6 18"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    />
                </svg>
                </button>
            ) : (
                <button onClick={() => setIsNavOpen(true)}>
                <svg
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                >
                    <path
                    d="M4 7h16M4 17h16"
                    stroke="#fff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    />
                </svg>
                </button>
            )}
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center gap-10 text-white">
          <Link className="hover:text-blue-400" to="/about">About Us</Link>
          <Link className="hover:text-blue-400" to="/services">Services</Link>
          <Link className="hover:text-blue-400" to="/projects">Projects</Link>

          <Link to="/contact" className="bg-blue-300 px-6 py-2 rounded-lg text-black font-semibold">
            Contact us
          </Link>
        </div>
      </div>

      {/* MOBILE OVERLAY MENU */}
      
        <div
            className={`
                flex lg:hidden fixed top-0 left-0 w-full bg-black z-10 
                overflow-hidden  flex-col px-10 pt-28
                transition-all duration-1000
                ${isNavOpen ? "h-screen" : "h-0"}
            `}
        >
          <div className="flex flex-col gap-6 text-white text-2xl">
            <Link onClick={() => setIsNavOpen(false)} to="/about">About Us</Link>
            <Link onClick={() => setIsNavOpen(false)} to="/services">Services</Link>
            <Link onClick={() => setIsNavOpen(false)} to="/projects">Projects</Link>
          </div>

          {/* CONTACT BUTTON AT BOTTOM */}
          <div className="mt-auto mb-10">
            <Link
              to="/contact"
              onClick={() => setIsNavOpen(false)}
              className="block w-full text-center bg-blue-300 text-black py-3 rounded-lg text-xl font-semibold"
            >
              Contact us
            </Link>
          </div>
        </div>
    </>
  );
};

export default Navbar;
