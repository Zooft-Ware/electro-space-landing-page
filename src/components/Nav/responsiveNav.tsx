import React from "react";

export default function ResponsiveNav() {
  return (
    <div className={`nav__menu ${showMenu ? "show-menu" : ""}`} id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink to="/" className="nav__link" onClick={closeMenuOnMobile}>
            Home
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/news" className="nav__link" onClick={closeMenuOnMobile}>
            News
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/about-us"
            className="nav__link"
            onClick={closeMenuOnMobile}
          >
            About Us
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/favorite"
            className="nav__link"
            onClick={closeMenuOnMobile}
          >
            Favorite
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink
            to="/location"
            className="nav__link"
            onClick={closeMenuOnMobile}
          >
            Location
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/get-started" className="nav__link nav__cta">
            Get Started
          </NavLink>
        </li>
      </ul>
      <div className="nav__close" id="nav-close" onClick={toggleMenu}>
        <IoClose />
      </div>
    </div>
  );
}
