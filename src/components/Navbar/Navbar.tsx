import React from "react";
import "./Navbar.css";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

const Navbar = () => {
  return (
    <Router>
      <div className="navbar">
        <div className="logo"></div>
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
