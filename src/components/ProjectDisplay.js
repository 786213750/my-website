import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../data/ProjectStaticData";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";

const ProjectDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectList[id];
  const navigateToProjects = () => {
    navigate("/", { state: { fromProjectItem: true } });
  };
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <div className="test" onClick={navigateToProjects}>
        <h1>"click me to test"</h1>
      </div>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
