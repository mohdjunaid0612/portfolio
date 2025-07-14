import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";
import SocialLink from "./SocialLink";

const Header = () => {
  const menus = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About Me",
      link: "/",
    },
    {
      name: "Skills",
      link: "/",
    },
    {
      name: "Projects",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];

  const [isActive, setIsActive] = useState(false);
  return (
    <header className="bg-[rgba(0,0,0,.8)] z-20 md:py-3 py-2 w-full border-b-2 border-black backdrop-blur fixed top-0 left-0">
      <div className="container mx-auto md:px-4 px-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-3">
              <img src={logo} alt="Mohd Junaid" className="w-[50px]" />
              <h2 className="text-white text-3xl font-semibold">Mohd Junaid</h2>
            </div>
            <div className="menus ms-4 hidden md:block">
              <ul>
                {menus.map((menu) => (
                  <Link
                    className="text-white px-3 md:px-4 hover:text-primary font-medium"
                    to={menu.link}
                  >
                    {menu.name}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SocialLink />
            </div>
            <button
              onClick={() => setIsActive(!isActive)}
              className="bg-zinc-800 text-white hover:bg-primary hover:text-black text-lg w-[40px] h-[40px] rounded-full"
            >
              <i className="fa-solid fa-grip"></i>
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          isActive ? "active" : ""
        } fixed top-0 right-0 translate-x-full md:w-96 ease-in h-screen overflow-auto bg-black z-20 p-9 transition-transform duration-300`}
      >
        <div className="text-right">
          <button
            onClick={() => setIsActive(!isActive)}
            className="text-white md:mb-4 text-2xl border w-[40px] h-[40px] rounded-full hover:bg-primary hover:text-black hover:border-0"
          >
            <i className="fas fa-xmark -translate-y-px"></i>
          </button>
        </div>
        <div className="itemContactSide border-b border-zinc-700 py-5 md:my-5 text-center">
          <div className="block md:hidden border-b border-zinc-700 md:pb-0 pb-5">
            <ul>
              {menus.map((menu) => (
                <li>
                  <Link
                    className="text-white inline-block py-2 md:px-4 hover:text-primary text-lg font-medium"
                    to={menu.link}
                  >
                    {menu.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="md:text-4xl text-3xl md:mt-0 mt-5 text-primary">
            <i className="fa-solid fa-phone-volume"></i>
          </p>
          <h4 className="text-2xl mt-5 text-white font-semibold">Phone</h4>
          <Link
            className="text-lg font-bold inline-block mt-3 text-zinc-400"
            to="tel:7042860653"
          >
            +91 70428 60653
          </Link>
        </div>
        <div className="itemContactSide border-b border-zinc-700 py-5 md:my-5 text-center">
          <p className="md:text-4xl text-3xl text-primary">
            <i className="fa-solid fa-envelope"></i>
          </p>
          <h4 className="text-2xl mt-5 text-white font-semibold">Email</h4>
          <Link
            className="text-lg font-bold inline-block mt-3 text-zinc-400"
            to="mailto:mohdjunaid0612@gmail.com"
          >
            mohdjunaid0612@gmail.com
          </Link>
        </div>
        <div className="itemContactSide border-b border-zinc-700 py-5 md:my-5 text-center">
          <p className="md:text-4xl text-3xl text-primary">
            <i className="fa-solid fa-map-marker-alt"></i>
          </p>
          <h4 className="text-2xl mt-5 text-white font-semibold">Address</h4>
          <p className="text-md font-semibold inline-block mt-3 text-zinc-400">
            C-636, Shani Bazar, JJ Colony Hastsal Road, Near Rajan Shoes Store,
            Uttam Nagar East 110059
          </p>
        </div>
        <p className="mt-3 text-white text-xl font-semibold text-center">
          Stay Connected
        </p>
        <div className="text-center mt-4">
          <SocialLink />
        </div>
      </div>
    </header>
  );
};

export default Header;
