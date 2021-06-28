import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'

const App: React.FC = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
