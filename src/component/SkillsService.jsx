import React from "react";
import htmlImg from "../assets/images/icons/html-5.png";
import cssImg from "../assets/images/icons/css-3.png";
import bootstrapImg from "../assets/images/icons/bootstrap.png";
import reactImg from "../assets/images/icons/react.png";
import javaImg from "../assets/images/icons/java-script.png";
import wordpressImg from "../assets/images/icons/wordpress.png";
import shopifyImg from "../assets/images/icons/social.png";
import figmaImg from "../assets/images/icons/figma.png";

const SkillsService = () => {
  const skills = [
    {
      name: "HTML 5",
      img: htmlImg,
      desc: "Structure and organize web content with semantic elements.",
    },
    {
      name: "CSS 3",
      img: cssImg,
      desc: "Style and design responsive, visually rich websites.",
    },
    {
      name: "Bootstrap",
      img: bootstrapImg,
      desc: "Rapidly develop responsive layouts using a grid system and UI components.",
    },
    {
      name: "ReactJs",
      img: reactImg,
      desc: "Build dynamic, component-based user interfaces efficiently.",
    },
    {
      name: "JavaScript",
      img: javaImg,
      desc: "Core scripting language for adding interactivity to websites.",
    },
    {
      name: "WordPress",
      img: wordpressImg,
      desc: "Design and manage custom websites using the world’s leading CMS.",
    },
    {
      name: "Shopify",
      img: shopifyImg,
      desc: "Build and customize powerful eCommerce stores.",
    },
    {
      name: "Figma",
      img: figmaImg,
      desc: "Design UI/UX prototypes collaboratively in the cloud.",
    },
  ];
  return (
    <>
      {skills.map((skill) => (
        <div className="p-7 text-center border border-zinc-300 rounded-lg bg-white group hover:shadow-lg ease-in duration-300">
          <div className="w-20 p-4 bg-gray-200 rounded-full m-auto group-hover:bg-primary ease-in duration-300">
            <img src={skill.img} alt={skill.name} />
          </div>
          <h3 className="md:text-2xl text-xl font-bold my-4">{skill.name}</h3>
          <p className="text-zinc-500">{skill.desc}</p>
        </div>
      ))}
    </>
  );
};

export default SkillsService;
