import React from "react";
import Layout from "../layout/Layout";
import bannerVideo from "../assets/images/banner/video-bg.mp4";
import { Link } from "react-router-dom";
import imgProfile from "../assets/images/mohd-junaid.jpg";
import imgLaptop from "../assets/images/img.jpg";
import SkillBar from "../component/SkillBar";
import SkillsService from "../component/SkillsService";
import careerPath from "../assets/images/img2.jpg";
import ExperienceTimeline from "../component/ExperienceTimeline";

const Home = () => {
  return (
    <Layout>
      <div className="heroSection relative">
        <video
          className="h-[100vh] w-screen object-cover"
          autoPlay
          muted
          playsInline
          loop
        >
          <source src={bannerVideo} />
        </video>
        <div className="bannerText absolute top-0 start-0 w-[100%] pt-[8rem] flex items-center">
          <div className="container mx-auto md:px-4 px-3">
            <div className="flex w-full gap-4 items-center">
              <div className="w-[60%] pe-6">
                <p className="text-sm text-white uppercase">
                  <i className="fab fa-asterisk me-2 text-primary"></i> Welcome
                  to my creative portfolio
                </p>
                <h1 className="text-7xl mt-4 text-white font-medium">
                  Hi, I'm{" "}
                  <strong className="text-primary italic">Mohd Junaid</strong>
                </h1>
                <p className="text-2xl text-white mt-3 italic">
                  Frontend Developer with <strong>7+ years</strong> of
                  experience
                </p>
                <p className="mt-3 text-md text-white">
                  I specialize in crafting high-performance, SEO-optimized, and
                  mobile-friendly websites using React, Next.js, WordPress,
                  Shopify and Bootstrap/Tailwind. Focused on clean code, fast
                  load times, and delivering user-centric digital experiences
                  that drive results.
                </p>
                <Link
                  to="/"
                  className="bg-zinc-700 text-white rounded-full mt-6 inline-block text-md py-4 px-8 font-semibold uppercase tracking-widest hover:bg-primary hover:text-black"
                >
                  Hire Me
                </Link>
              </div>
              <div className="w-[30%] text-right relative">
                <div className="w-[450px] h-[450px] p-2 border-2 border-primary rounded-full">
                  <img
                    className="w-[100%] h-[100%] grayscale  object-cover rounded-full"
                    src={imgProfile}
                    alt="Mohd Junaid"
                  />
                </div>
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white absolute top-0 animation-translate">
                  <i className="fa-brands fa-react text-4xl text-sky-500"></i>
                </div>
                <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center bg-white absolute bottom-0 right-0 animation-translate2">
                  <i className="fa-brands fa-bootstrap text-4xl text-violet-600"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkillBar />
      <section className="py-20">
        <div className="container mx-auto md:px-4 px-3">
          <div className="flex justify-between items-center">
            <div className="w-[48%] relative">
              <div className="w-[80%] ml-auto mr-0">
                <img
                  src={imgLaptop}
                  alt="Working on laptop"
                  className="w-full rounded-3xl"
                />
              </div>
              <div className="w-[50%] absolute top-40">
                <img
                  src={imgProfile}
                  alt="Mohd Junaid"
                  className="w-full rounded-3xl border-8 border-white"
                />
              </div>
              <div className="absolute right-5 -bottom-10 flex animateX shadow-2xl">
                <div className="w-[100px] h-[100px] bg-primary p-4 rounded-l-xl">
                  <div className="w-16 h-16 bg-black rounded-full flex justify-center items-center text-primary text-2xl">
                    <i className="fa fa-phone-volume"></i>
                  </div>
                </div>
                <div className="bg-zinc-800 p-4 rounded-r-xl">
                  <p className="text-white font-medium text-lg">Contact Me</p>
                  <Link
                    to="tel:7042860653"
                    className="text-2xl text-white font-bold"
                  >
                    +91 70428 60653
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-[48%]">
              <p className="text-sm uppercase font-semibold">
                <i className="fab fa-asterisk me-2 text-primary"></i> About
                Intro
              </p>
              <h2 className="text-5xl mt-5 leading-tight">
                Crafting{" "}
                <span className="text-primary font-extrabold">
                  Stories Through
                </span>{" "}
                Design Mastery
              </h2>
              <p className="mt-5">
                Creative and detail-oriented <strong>Frontend Developer</strong>{" "}
                with building responsive, accessible, and high-performance
                websites. Strong expertise in{" "}
                <strong>
                  HTML5, CSS3 (Sass/SCSS), JavaScript (ES6+), React.js, and
                  Next.js
                </strong>{" "}
                with hands-on integration of REST APIs and{" "}
                <strong>Figma-to-code workflows.</strong> Proven track record of
                collaborating with backend teams to translate UI/UX into
                seamless user experiences
              </p>
              <div className="flex mt-5 justify-between">
                <div>
                  <h4 className="text-4xl text-primary font-extrabold text-center">
                    7+
                  </h4>
                  <p className="mt-2">Years of Experience</p>
                </div>
                <div>
                  <h4 className="text-4xl text-primary font-extrabold text-center">
                    100+
                  </h4>
                  <p className="mt-2">Project Complete</p>
                </div>
                <div>
                  <h4 className="text-4xl text-primary font-extrabold text-center">
                    98%
                  </h4>
                  <p className="mt-2">Client Reach</p>
                </div>
              </div>
              <Link className="bg-primary rounded-full mt-8 inline-block text-md py-4 px-8 font-semibold uppercase tracking-widest hover:bg-secondary hover:text-black hover:text-white">
                More About
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto md:px-4 px-3">
          <div className="flex justify-center">
            <div className="w-[60%]">
              <p className="text-sm uppercase font-semibold text-center">
                <i className="fab fa-asterisk me-2 text-primary"></i> My Skills
              </p>
              <h3 className="text-5xl leading-tight text-center mt-5">
                Bringing UI/UX to Life with{" "}
                <span className="text-primary font-extrabold">
                  Modern Frontend
                </span>{" "}
                Magic
              </h3>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <SkillsService />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto md:px-4 px-3">
          <div className="flex justify-center">
            <div className="w-[60%]">
              <p className="text-sm uppercase font-semibold text-center">
                <i className="fab fa-asterisk me-2 text-primary"></i> Career
                Journey
              </p>
              <h3 className="text-5xl leading-tight text-center mt-5">
                Timeline of My Career <br className="hidden md:block" />
                <span className="text-primary font-extrabold">
                  Growth & Progress
                </span>
              </h3>
            </div>
          </div>
          <div className="flex mt-10 justify-between gap-5">
            <div className="lg:w-[70%]">
              <ExperienceTimeline />
            </div>
            <div className="lg:w-[40%] sticky top-20 self-start">
              <img
                src={careerPath}
                alt="Career Timeline"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
