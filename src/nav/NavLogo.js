import React, { useContext } from "react";
import { NavContext } from "../context/NavContext";
import { ReactComponent as LogoSvg } from "../svg/TJ-logo2.svg";

const NavLogo = ({ navLinkId, scrollToId }) => {
  const { setActiveNavLinkId } = useContext(NavContext);

  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <span id={navLinkId} onClick={handleClick} className="logo">
      <LogoSvg />
    </span>
  );
};

export default NavLogo;
