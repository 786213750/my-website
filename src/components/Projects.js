import React from 'react'
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "./Projects.css";

const Projects = () => {
 const projectsRef = useNav("Projects");
 return (
    <section ref={projectsRef} id="projectsContainer">
        Projects
    </section>
  )
}

export default Projects