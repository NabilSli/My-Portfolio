// eslint-disable-next-line no-unused-vars
import React from "react";
import { NavLink } from "react-router-dom";
import { home, cv } from "../routes";

import ContactModal from "./contacModal";

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

          <ContactModal />

          <li>
            <NavLink to={cv.path} className="navAnchor">
              CV
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
