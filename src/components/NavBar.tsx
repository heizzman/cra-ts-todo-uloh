import React from "react";
import { Section } from "../common";
import { NavLink } from "react-router-dom";
import { ABOUT_ROUTE, TODO_ROUTE } from "../utils/consts";

const NavBar: React.FC = () => {

  return (<Section>
    <NavLink style={white} to={TODO_ROUTE}>
      Todo
    </NavLink>
    <NavLink style={white} to={ABOUT_ROUTE}>
      About
    </NavLink>
  </Section>
  );
}

const white = { color: "white", padding: "1rem", fontSize: "1.2rem" }

export default NavBar;
