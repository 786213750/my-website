import React from 'react'
import { useNav } from "../customHooks/useNav";
import "./Page.css";
import "../styles/Skills.css";

const Skills = () => {
  const skillsRef = useNav("Skills");
  return (
    <section ref={skillsRef} id="skillsContainer">
        SKILLS
    </section>
  )
}

export default Skills