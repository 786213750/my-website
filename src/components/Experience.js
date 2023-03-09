import React from "react";
import { useTrail, animated } from 'react-spring';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const config = { mass: 5, tension: 2000, friction: 500 };

const Experience = ({ experiences }) => {
  const trail = useTrail(experiences.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });
  const expRef = useNav('Experience');
  return (
    <section ref={expRef} id='expContainer'>
      <h1>Experience</h1>
      <div className="experience-container">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={experiences[index].company}
            className="experience-item"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
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
          </animated.div>
        ))}
      </div>
    </section>
  );
};


export default Experience;
