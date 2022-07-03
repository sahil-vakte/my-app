// import logo from './logo.svg';
import React from "react";
import "./App.css";
import Home from "../src/Components/Home/home";
import Navbar from "./Components/Navbar/Navbar";
import Partner from "./Components/Partner/partner";

function App() {
  return (
    <div className="Shopify">
      <Navbar/>
     <Home/>
     <Partner/>
    </div>
  );
}


export default App;
