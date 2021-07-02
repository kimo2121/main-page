import React from "react";
import "./Navbar.css";
import {
  HashRouter as Router,
  Link,
  // Route,
  //  Switch
} from "react-router-dom";
import logo1 from "../../assests/logo1.svg";
import logo2 from "../../assests/logo2.svg";

const Navbar: React.FC = () => {
  return (
    <Router>
      <div className="h-14 flex items-center justify-left bg-nav md:px-20 px-0 md:h-20 md:justify-between">
        <div className="flex items-center">
          <img src={logo1} alt="logo" className="w-14 h-14 md:w-20 h-20" />
          <img src={logo2} alt="logo" className="w-16 h-16 md:w-20 h-20" />
        </div>
        <div className="nav-links md:hidden">
          <Link className="market-place" to="/">
            Marketplace
          </Link>
          <Link to="/">Activity</Link>
          <Link to="/">Resources</Link>
          <Link to="/">Upload</Link>
          <Link to="/">Connect Wallet </Link>
        </div>
      </div>
    </Router>
  );
};

export default Navbar;
