import React from "react";
import { Link } from "react-router-dom";

const SocialLink = () => {
  return (
    <div>
      <ul>
        <Link to="/" target="_blank" className="text-primary text-lg px-3">
          <i className="fab fa-facebook-f"></i>
        </Link>
        <Link
          to="https://x.com/ZaroonJunaid786"
          target="_blank"
          className="text-primary text-lg px-3"
        >
          <i className="fab fa-x-twitter"></i>
        </Link>
        <Link
          to="https://github.com/mohdjunaid0612"
          target="_blank"
          className="text-primary text-lg px-3"
        >
          <i className="fab fa-github"></i>
        </Link>
        <Link
          to="https://www.linkedin.com/in/zaroon-junaid-3b5609144/"
          target="_blank"
          className="text-primary text-lg px-3"
        >
          <i className="fab fa-linkedin-in"></i>
        </Link>
      </ul>
    </div>
  );
};

export default SocialLink;
