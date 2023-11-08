import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "./Home.css";

const Home = () => {
  const homeRef = useNav("Home");
  const location = useLocation(); // Use useLocation to get the current location object
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the navigation state indicates to scroll to the projects section
    if (location.state?.fromProjectItem) {
      const projectsContainer = document.getElementById("projectsContainer");
      if (projectsContainer) {
        // Scroll to the projects container
        projectsContainer.scrollIntoView({ behavior: "smooth" });
      }
      // Replace the current state to avoid scrolling on refresh
      navigate(location.pathname, { ...location, state: {} });
    }
  }, [location, navigate]);
  return (
    <section ref={homeRef} id="homeContainer">
      <div className="home-content">
        <h1>
          Hi, I'm Thomas Jian.
          <br />
          <Typewriter
            options={{
              strings: ["Machine Learning Engineer", "Full Stack Developer"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="home-links">
          <a
            href="https://github.com/786213750"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="home-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/thomas-jian/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="home-icon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
