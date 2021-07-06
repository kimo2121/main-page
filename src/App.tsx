import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBurgerMenu from "./components/NavBurgerMenu/NavBurgerMenu";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        {window.innerWidth > 1024 ? <Navbar /> : <NavBurgerMenu />}

        {/* <div style={{ height: "10vh" }} /> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
