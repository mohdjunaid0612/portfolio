import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const SkillBar = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000, // make it longer for smoother scroll
    autoplay: true,
    autoplaySpeed: 0, // works with `cssEase: "linear"`
    cssEase: "linear", // essential for smooth scroll
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // small tablets and large phones
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // mobile phones
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const skills = [
    "ReactJs",
    "NextJs",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "WordPress",
    "Shopify",
    "Figma",
    "Adobe XD",
    "Photoshop",
    "GSAP",
  ];
  return (
    <section className="md:py-3 py-2 bg-primary">
      <Slider {...settings}>
        {skills.map((skill) => (
          <div className="p-2">
            <div>
              <h4 className="md:text-4xl text-2xl font-bold text-center">
                <i className="fab fa-asterisk me-2"></i> {skill}
              </h4>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default SkillBar;
