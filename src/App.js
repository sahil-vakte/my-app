// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Home from "../src/Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="Shopify">
      <Navbar/>
     <Home/>
    </div>
  );
}

export default App;
