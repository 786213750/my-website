import React from "react";
import { useNav } from "../customHooks/useNav";
import Flickity from "react-flickity-component";
import "flickity/dist/flickity.min.css";
import "./Page.css";
import "./Experience.css";
//import BlankLogo from "../images/blank.png";

const Experience = ({ experiences }) => {
  const FlickityOptions = {
    pageDots: false,
    groupCells: "65%",
    wrapAround: false,
    imagesLoaded: true,
  };

  const expRef = useNav("Experience");
  return (
    <section ref={expRef} id="expContainer">
      <h3>Experience</h3>
      <Flickity
        className={"expCarousel"}
        elementType={"div"}
        options={FlickityOptions}
        disableImagesLoaded={false}
      >
        {experiences.map((experience, index) => (
          <div className="carouselCell" key={index}>
            <div className="cellInner">
              <div className="cardTitle">
                <a
                  href={experience.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={experience.logo} alt="" />
                </a>
                <div>
                  <p>{experience.position}
                  </p>
                  {experience.company} <br />
                  {experience.startDate} - {experience.endDate}<br />
                </div>
              </div>
              <div className="cardContent">
                <ul>
                  {experience.bullets.map((responsibility, idx) => (
                    <li key={idx}>{responsibility}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Flickity>
    </section>
  );
};

export default Experience;
