import React from "react";
import NavLink from "./NavLink";
import NavLogo from "./NavLogo";
import { navLinks } from "./navLinks";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <NavLogo key={0} navLinkId={"Home"} scrollToId={"homeContainer"} />
      {navLinks.map(({ navLinkId, scrollToId }, idx) => (
        <NavLink key={idx + 1} navLinkId={navLinkId} scrollToId={scrollToId} />
      ))}
    </nav>
  );
};

export default Nav;
