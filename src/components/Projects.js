import React from 'react'
import { useNav } from "../customHooks/useNav";
import { ProjectItem } from "./";
import "./Page.css";
import "./Projects.css";

const Projects = ({projects}) => {
 const projectsRef = useNav("Projects");
 return (
    <section ref={projectsRef} id="projectsContainer">
        {projects.map((project, idx) => {
          return (
            <ProjectItem id={idx} name={project.name} image={project.image} />
          );
        })};
    </section>
  )
}

export default Projects