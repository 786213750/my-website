import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
//import './About.css';

function About() {

  const aboutRef = useNav('About');
  return (
    <section ref={aboutRef} id='aboutContainer'>
      <div>
        <h3>About Me</h3>
          <p>
            I am a machine learning engineer with experience developing automated ML platforms and
            model serving microservices with low latency and high request frequency.
            I have worked with a variety of technologies, including Python, Go, SQL,
            TensorFlow, Keras, PySpark, Docker, Kubernetes, GCP, and AWS.
            I am skilled in front-end development using React, HTML, and CSS,
            and have experience building analytical dashboards. I hold a Bachelor
            of Mathematics degree from the University of Waterloo, with a major in Applied Mathematics
            and a minor in Statistics. In my free time, I enjoy exploring new technologies and contributing
            to open-source projects on GitHub.
        </p>
      </div>   
    </section>
  );
}

export default About;
