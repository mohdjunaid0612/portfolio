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
import HomeProjectSlider from "../component/HomeProjectSlider";
import bgImg from "../assets/images/bg/body-bg.jpg";

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
        <div className="bannerText absolute top-0 start-0 w-[100%] h-[100%] pt-[6rem] flex items-center">
          <div className="container mx-auto md:px-4 px-3">
            <div className="flex w-full gap-4 items-center justify-between">
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
                <div className="w-[400px] h-[400px] p-2 border-2 border-primary rounded-full">
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
                Let's Work Together
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
      <section className="py-20 bg-zinc-800">
        <div className="container mx-auto  md:px-4 px-3">
          <h3 className="text-5xl leading-tight text-white text-center mt-5">
            Highlighted{" "}
            <span className="text-primary font-extrabold">Projects</span>
          </h3>
          <p className="mt-5 text-lg text-center text-gray-300">
            Flex my skills through real work. A showcase of innovative
            solutions,
          </p>
          <p className="mt-1 text-lg text-center text-gray-300">
            cutting-edge technologies, and impactful user experiences.
          </p>
          <div className="mt-10">
            <HomeProjectSlider />
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto md:px-4 px-3">
          <div className="flex justify-center">
            <div className="w-[60%]">
              <p className="text-sm uppercase font-semibold text-center">
                <i className="fab fa-asterisk me-2 text-primary"></i> Working
                Process
              </p>
              <h3 className="text-5xl leading-tight text-center mt-5">
                Our seamless{" "}
                <span className="text-primary font-extrabold">process for</span>{" "}
                exceptional results
              </h3>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border hover:-translate-y-2 ease-in-out border-gray-200 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <div className="bg-violet-600 w-[60px] h-[60px] rounded-xl text-2xl flex justify-center items-center font-semibold text-white">
                01
              </div>
              <h4 className="text-2xl text-zinc my-5 font-semibold">
                Discovery & Direction
              </h4>
              <p className="text-gray-600 mt-3">
                I dive deep into your vision, goals, and target users. Whether
                it’s a startup idea or an enterprise overhaul, I start by asking
                the right questions to align with your mission.
              </p>
            </div>
            <div className="border hover:-translate-y-2 ease-in-out border-gray-200 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <div className="bg-yellow-400 w-[60px] h-[60px] rounded-xl text-2xl flex justify-center items-center font-semibold text-white">
                02
              </div>
              <h4 className="text-2xl text-zinc my-5 font-semibold">
                Design-Driven Planning
              </h4>
              <p className="text-gray-600 mt-3">
                Wireframes, style guides, and components—we plan it all before a
                single line of code. I translate your ideas into structured
                UI/UX blueprints.
              </p>
            </div>
            <div className="border hover:-translate-y-2 ease-in-out border-gray-200 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <div className="bg-green-500 w-[60px] h-[60px] rounded-xl text-2xl flex justify-center items-center font-semibold text-white">
                03
              </div>
              <h4 className="text-2xl text-zinc my-5 font-semibold">
                Frontend Engineering
              </h4>
              <p className="text-gray-600 mt-3">
                This is where the magic happens. I build responsive, accessible,
                lightning-fast interfaces using HTML5, SCSS, JS, and frameworks
                like Bootstrap, Alpine.js, and React.
              </p>
            </div>
            <div className="border hover:-translate-y-2 ease-in-out border-gray-200 p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-transform duration-300">
              <div className="bg-red-500 w-[60px] h-[60px] rounded-xl text-2xl flex justify-center items-center font-semibold text-white">
                04
              </div>
              <h4 className="text-2xl text-zinc my-5 font-semibold">
                Launch & Elevate
              </h4>
              <p className="text-gray-600 mt-3">
                Once it’s live, I don’t ghost. I optimize for performance, SEO,
                and accessibility—and stay on board to iterate, scale, and keep
                your product fresh.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto  md:px-4 px-3">
          <div className="relative">
            <h3 className="text-xxl text-center text-gray-500 text-center font-semibold">
              LET'S COLLABORATE
            </h3>
            <h4 className="text-9xl text-zinc-700 mt-5 text-center font-bold">
              LET'S WORK
            </h4>
            <h4 className="text-9xl text-zinc-700 mt-3 text-center font-bold">
              TOGETHER
            </h4>
            <a
              href="#"
              className="inline-block flex items-center flex-col justify-center absolute w-[150px] h-[150px] rounded-full bg-primary top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 hover:scale-110 ease-in-out duration-300"
            >
              <i className="fa fa-arrow-right d-block text-zinc-900 -rotate-45 text-xl"></i>
              <p className="font-semibold text-xl">Get in Touch</p>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
