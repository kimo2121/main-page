import React, { useState } from "react";
import * as FiIcons from "react-icons/fi";
import * as AiIcons from "react-icons/ai";
import "./NavBurgerMenu.css";
import { Link } from "react-router-dom";
import * as IoIcons from "react-icons/io";
import { IconContext } from "react-icons";
import logo1 from "../../assests/logo1.png";
import logo2 from "../../assests/logo2.png";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

function NavBurgerMenu() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  const navItems = [
    "Marketplace",
    "Activity",
    "Resources",
    "Upload",
    " Connect Wallet ",
  ];
  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        {sidebar && <div className="backdrop"></div>}
        <div className="burger-menu-component">
          <div className="navbar burger-navbar">
            <div className="burger-navbar-logo flex items-center">
              <img src={logo1} alt="logo" className="" />
              <img src={logo2} alt="logo" className="" />
            </div>
            <div>
              <FiIcons.FiMenu
                onClick={showSidebar}
                className="burger-icon"
                color="white"
                size={25}
              />
            </div>
          </div>
          <nav className={sidebar ? "burger-menu active" : "burger-menu"}>
            <AiIcons.AiOutlineClose
              onClick={showSidebar}
              className={sidebar ? "x-icon active" : "x-icon"}
              size="25"
            />
            <div className="burger-navbar-logo flex items-center">
              <img src={logo1} alt="logo" className="" />
              <img src={logo2} alt="logo" className="" />
            </div>
            <div className="burger-nav-links">
              <Router>
                {navItems.map((item, indx) => (
                  <Link key={indx} to="/">
                    {item}{" "}
                  </Link>
                ))}
              </Router>
            </div>
          </nav>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default NavBurgerMenu;
