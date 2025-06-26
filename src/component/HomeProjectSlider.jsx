import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProjectSlider from "react-slick";
import { project } from "../project";
import { Link } from "react-router-dom";

const HomeProjectSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // make it longer for smoother scroll
    autoplay: true,
    //autoplaySpeed: 500, // works with `cssEase: "linear"`
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: true,
  };

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(project);
  }, []);
  return (
    <>
      <ProjectSlider {...settings}>
        {projects.map((project) => (
          <div className="itemProject px-3" key={project.id}>
            <div className="innerProject bg-white hover:bg-emerald-50 ease-in duration-300 rounded-lg">
              <div className="rounded-t-lg bg-sky-50">
                <img
                  src={project.image}
                  alt={project.name}
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-5 h-auto lg:h-[340px]">
                <div>
                  <span
                    className={`${project.bgColor} inline-block w-[12px] h-[12px] rounded-full me-2`}
                  ></span>
                  <span
                    className={`${project.capBg} ${project.capBorder} ${project.capText} text-xs font-medium  rounded-full border py-1 px-2`}
                  >
                    {project.type}
                  </span>
                </div>
                <h4 className="my-4 text-xl font-semibold">{project.name}</h4>
                <p className="text-gray-600 text-sm">{project.des}</p>
                <h3 className="mt-5 text-sm font-semibold text-zinc-500">
                  <i class="fa fa-tools"></i> Tools
                </h3>
                <ul className="flex mt-3 flex-wrap">
                  {project.tech_stack.map((data) => (
                    <li className="rounded-full border px-2.5 py-0.5 font-semibold focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-slate-300 text-xs bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors m-1">
                      {data}
                    </li>
                  ))}
                </ul>
                <hr className="my-3" />
                <div className="flex items-center justify-between">
                  <p className="text-sm">
                    <strong>Status</strong>:{" "}
                    <span
                      className={`${project.liveBg} ${project.liveText} text-xs font-medium  rounded-full py-1 px-3`}
                    >
                      {project.status}
                    </span>
                  </p>
                  <Link
                    to={project.link}
                    target="_blank"
                    className="bg-zinc-700 text-white px-4 hover:bg-black py-2 rounded-full font-semibold text-xs"
                  >
                    Live Preview
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ProjectSlider>
    </>
  );
};

export default HomeProjectSlider;
