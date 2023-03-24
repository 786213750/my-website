import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import './About.css';

function About() {

  const aboutRef = useNav('About');
  return (
    <section ref={aboutRef} id='aboutContainer'>
      <div className='about-content'>
        <h3>About Me</h3>
        <p>
          I am a <b>machine learning engineer</b> with experience developing <b>automated ML platforms</b> and
          <b>model serving microservices</b> with low latency and high request frequency.
          I have worked with a variety of technologies, including <b>Python, Go, SQL,
          TensorFlow, Keras, PySpark, Docker, Kubernetes, GCP, and AWS</b>.
          I am skilled in front-end development using <b>React, HTML, and CSS</b>,
          and have experience building <b>analytical dashboards</b>. I hold a <b>Bachelor
          of Mathematics degree</b> from the University of Waterloo, with a major in Applied Mathematics
          and a minor in Statistics. In my free time, I enjoy exploring new technologies and contributing
          to open-source projects on GitHub.
        </p>

      </div>   
    </section>
  );
}

export default About;
