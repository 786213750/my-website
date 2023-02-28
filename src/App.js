import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
//import Skills from './components/Skills';
import Experience from './components/Experience';

//import Education from './components/Education';
//import Contact from './components/Contact';
//import Footer from './components/Footer';
import './App.css';
import experiences from './data/ExperienceStaticData';



function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<Experience experiences={experiences} />} />
        </Routes>
      </div>
    </Router>
  );
}




export default App;