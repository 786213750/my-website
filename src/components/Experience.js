import React from "react";
import { Typography, Link } from "@material-ui/core";
import { useTrail, animated } from 'react-spring';

const config = { mass: 5, tension: 2000, friction: 500 };

const Experience = ({ experiences }) => {
  const trail = useTrail(experiences.length, {
    config,
    opacity: 1,
    x: 0,
    height: 80,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div className="section">
      <h2>Experience</h2>
      <div className="experience-container">
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={experiences[index].company}
            className="experience-item"
            style={{
              ...rest,
              transform: x.interpolate((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <a href={experiences[index].website} target="_blank" rel="noopener noreferrer">
              <h3 style={{ color: '#2D6AEF' }}>{experiences[index].position}</h3>
              <p style={{ color: 'grey' }}>
                {experiences[index].company} - {experiences[index].location}
              </p>
            </a>
            <ul style={{ listStyleType: 'disc', marginLeft: '1.5rem' }}>
              {experiences[index].bullets.map((responsibility, idx) => (
                <li key={idx}>{responsibility}</li>
              ))}
            </ul>
          </animated.div>
        ))}
      </div>
    </div>
  );
};


export default Experience;
