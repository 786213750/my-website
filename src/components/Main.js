import React from "react";
import experiences from "../data/ExperienceStaticData";
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
      <Experience experiences={experiences} />
      <Projects />
    </NavProvider>
  </main>
);

export default Main;
