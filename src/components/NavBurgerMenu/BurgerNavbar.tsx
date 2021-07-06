import React, { useState } from "react";
import "./BurgerNavbar.css";
import { HashRouter as Router, Link } from "react-router-dom";
import logo1 from "../../assests/logo1.svg";
import logo2 from "../../assests/logo2.svg";
import { IconContext } from "react-icons";
import * as FiIcons from "react-icons/fi";

const BurgerNavbar: React.FC = () => {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);
  return (
    <Router>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="navbar">
          <span className="slider-menu-icon" onClick={showSidebar}>
            <FiIcons.FiMenu className="burger-icon" color="white" size={25} />
          </span>
          {/* <div style={{ display: "flex", alignItems: "center" }}>
            <img src={logo1} alt="logo" />
            <img src={logo2} alt="logo" />
          </div> */}
          {/* <div className="burger-nav-links">
            <Link className="market-place" to="/">
              Marketplace
            </Link>
            <Link to="/">Activity</Link>
            <Link to="/">Resources</Link>
            <Link to="/">Upload</Link>
            <Link to="/">Connect Wallet </Link>
          </div> */}
        </div>
      </IconContext.Provider>
    </Router>
  );
};

export default BurgerNavbar;
