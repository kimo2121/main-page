import React from "react";
import "./Navbar.css";
import {
  HashRouter as Router,
  Link,
  // Route,
  //  Switch
} from "react-router-dom";
import logo1 from '../../assests/logo1.svg'
import logo2 from '../../assests/logo2.svg'

const Navbar: React.FC = () => {
  return (
    <Router>
      <div className="navbar">
        <div style={{ display: "flex", alignItems: "center" }}>
          <img src={logo1} alt="logo" />
          <img src={logo2} alt="logo" />
        </div>
        <div className="nav-links">

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
