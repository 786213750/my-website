import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProjectList } from "../data/ProjectStaticData";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import ReactMarkdown from "react-markdown";

const ProjectDisplay = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = ProjectList[id];
  const navigateToProjects = () => {
    navigate("/", { state: { fromProjectItem: true } });
  };
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(project.file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, [project.file]);

  return (
    <div className="project">
      <img src={project.image} alt={project.name} />
      <div className="test" onClick={navigateToProjects}>
        <h1>"click me to test"</h1>
      </div>
      <div className="content">
        <ReactMarkdown children={content} />
      </div>

      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <GitHubIcon />
    </div>
  );
};

export default ProjectDisplay;
