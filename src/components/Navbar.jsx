import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";  // CSS importálása

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          Guri Sörfőzde
        </Link>

        {/* navigációs linkek */}
        <div className="navbar-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Főoldal
          </NavLink>
          <NavLink
            to="/beers"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Söreink
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Kapcsolat
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
