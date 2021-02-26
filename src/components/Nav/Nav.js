import React from "react";
import { NavLink } from "react-router-dom";
import routes from "../../services/routes";
import classes from "./Nav.module.scss";

const Navigation = () => {
  return (
    <nav className={classes.bcgr}>
      <ul className={classes.nav}>
        <li className={classes.navItems}>
          <NavLink to={routes.home}>Home Page</NavLink>
        </li>
        <li className={classes.navItems}>
          <NavLink to={routes.movies}>Movies Page </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
