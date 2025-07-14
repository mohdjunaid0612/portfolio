import React from "react";
import logo from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer md:py-12 py-8 bg-zinc-950">
      <div className="container mx-auto md:px-4 px-3">
        <div className="flex flex-wrap items-center justify-between border-b pb-6 border-zinc-800">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Mohd Junaid" className="w-[50px]" />
            <h2 className="text-white text-3xl font-semibold">Mohd Junaid</h2>
          </div>
          <div className="flex md:gap-6 gap-3 mt-6 md:mt-0 flex-wrap">
            <div className="flex items-center">
              <Link
                to="tel:7042860653"
                className="md:text-xl text-md font-semibold text-white pe-2"
              >
                <i className="fa fa-phone-volume md:text-2xl text-xl text-primary me-3"></i>{" "}
                +91 70428 60653
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="mailto:mohdjunaid0612@gmail.com"
                className="md:text-xl text-md font-semibold text-white pe-2"
              >
                <i className="fa fa-envelope md:text-2xl text-xl text-primary me-3"></i>{" "}
                mohdjunaid0612@gmail.com
              </Link>
            </div>
            <div className="flex items-center">
              <Link
                to="tel:7042860653"
                className="md:text-xl text-md font-semibold text-white pe-2"
              >
                <i className="fa fa-map-marker-alt md:text-2xl text-xl text-primary me-3"></i>{" "}
                Uttam Nagar New Delhi - 59
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-b pb-6 border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="pe-12">
              <p className="md:text-xl text-md text-white font-semibold">
                Crafting clean, responsive interfaces with a focus on user
                experience. Let's build something beautiful.
              </p>
              <p className="text-gray-200 md:text-md text-sm mt-4">
                I'm a passionate Frontend Developer and UI/UX Designer dedicated
                to creating intuitive, responsive, and visually appealing
                digital experiences. I specialize in turning complex ideas into
                clean and user-friendly interfaces. Whether it's a landing page
                or a full-scale web app, I focus on both aesthetics and
                performance. Let's connect and bring your vision to life.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="border-r border-zinc-800">
                <h4 className="text-xl text-white font-semibold">
                  Quick Links
                </h4>
                <ul className="mt-7">
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm  font-medium hover:text-primary"
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Serivces
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm  font-medium hover:text-primary"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="md:border-r border-zinc-800">
                <h4 className="text-xl text-white font-semibold">Services</h4>
                <ul className="mt-7">
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Frontend Development
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Website Redesign
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Landing Page Design
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="/"
                      className="text-white text-sm font-medium hover:text-primary"
                    >
                      Figma to Code
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl text-white font-semibold">
                  Social Media
                </h4>
                <ul className="md:mt-7 flex md:block justify-content-center md:gap-0 gap-4">
                  <li className="my-4 text-center md:text-left">
                    <Link
                      to="/"
                      target="_blank"
                      className="text-sm px-3 text-center md:text-left text-white hover:text-primary"
                    >
                      <i className="fab fa-facebook-f text-primary me-3"></i>
                      Facebook
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="https://x.com/ZaroonJunaid786"
                      target="_blank"
                      className="text-sm px-3 text-white hover:text-primary"
                    >
                      <i className="fab fa-x-twitter text-primary me-3"></i>
                      Twitter
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="https://github.com/mohdjunaid0612"
                      target="_blank"
                      className="text-sm px-3 text-white hover:text-primary"
                    >
                      <i className="fab fa-github text-primary me-3"></i>
                      GitHub
                    </Link>
                  </li>
                  <li className="my-4">
                    <Link
                      to="https://www.linkedin.com/in/zaroon-junaid-3b5609144/"
                      target="_blank"
                      className="text-sm px-3 text-white hover:text-primary"
                    >
                      <i className="fab fa-linkedin-in text-primary me-3"></i>
                      Linkedin
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <p className="text-center text-sm md:text-md text-white">
            &copy; {year} Mohd Junaid - Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
