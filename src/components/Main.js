import React from "react";
import ExperienceList from "../data/ExperienceStaticData";
import ProjectList from "../data/ProjectStaticData";
import { Home, About, Experience, Skills, Projects } from "./";
import NavProvider from '../context/NavContext';
import { Nav } from '../nav';

const Main = () => (
  <main>
    <NavProvider>
      <Nav />
      <Home />
      <About />
      <Skills />
      <Experience experiences={ExperienceList} />
      <Projects projects={ProjectList} />
    </NavProvider>
  </main>
);

export default Main;
