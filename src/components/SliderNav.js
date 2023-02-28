import React, { useState, useEffect } from "react";
import "./SliderNav.css";

const SliderNav = ({ sections }) => {
  const [active, setActive] = useState(0);

  const handleClick = (index) => {
    setActive(index);
    const section = document.getElementById(sections[index]);
    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.pageYOffset;
    const activeSection = sections.findIndex(
      (section) => document.getElementById(section).offsetTop > scrollPosition
    );
    setActive(activeSection === -1 ? sections.length - 1 : activeSection - 1);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="slider-nav">
      <ul>
        {sections.map((section, index) => (
          <li
            key={section}
            className={active === index ? "active" : ""}
            onClick={() => handleClick(index)}
          >
            {section}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SliderNav;
