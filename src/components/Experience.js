import React from "react";
import { useNav } from '../customHooks/useNav';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Page.css';


const Experience = ({ experiences }) => {

  const expRef = useNav('Experience');
  return (
    <section ref={expRef} id='expContainer'>
      <h1>Experience</h1>
      <div className="experience-container">
        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1}>
          {experiences.map((experience, index) => (
            <div className='experience-content' key={index}>
              <a href={experiences[index].website} target="_blank" rel="noopener noreferrer">
                <h3>{experiences[index].position}</h3>
                <p>
                  {experiences[index].company} - {experiences[index].location}
                </p>
              </a>
              <ul>
                {experiences[index].bullets.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}


export default Experience;
