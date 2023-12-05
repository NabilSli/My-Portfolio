import React from "react";
import { NavLink } from "react-router-dom";
import { home, projects } from "../routes";

function Header() {
  return (
    <header className="header">
      <h2 className="headerTitle">SLIMANI Nabil</h2>
      <nav>
        <ul className="navMenu">
          <li>
            <NavLink to={home.path} activeclassname="activeLink">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink to={projects.path} className="navAnchor">
              Mes Projets
            </NavLink>
          </li>
          <li>
            <p className="navAnchor">Contact</p>
          </li>
          <li>
            <p className="navAnchor">CV</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
