import React from "react";
import logo from "../../assets/Images/logo1.jpg";
import "../Navbar/Navbar.css";

const Navbar = () => {
  return (
    <div className="bodypage">
      <header className="Shopify-header">
        <ul>
        <div>

        </div>
          <img src={logo} className="Shopify-logo" alt="logo" />
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Sell
            </a>
            <div className="dropdown-content">
              <a href="#">Sell Everywhere</a>
              <a href="#">Online Store</a>
              <a href="#">International ecommerce</a>
              <a href="#">Omnichannel commerce</a>
              <a href="#">Headless commerce</a>
              <a href="#">Campaigns and flash sales</a>
              <a href="#">Retail and point of Sale</a>
              <a href="#">B2B ecommerce</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Manage
            </a>
            <div className="dropdown-content">
              <a href="#">Manage Complexity</a>
              <a href="#">Automation</a>
              <a href="#">Shipping</a>
              <a href="#">Payments</a>
            </div>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Integrate
            </a>
            <div className="dropdown-content">
              <a href="#">Integrate Systems</a>
              <a href="#">Automation</a>
              <a href="#">Headless Commerce</a>
              <a href="#">Partners</a>
            </div>
          </li>
          <li>
            <a className="dropbtn" href="#">
              Migrate
            </a>
          </li>
          <li className="dropdown">
            <a href="#" className="dropbtn">
              Integrate
            </a>
            <div className="dropdown-content">
              <a href="#">Shopify Plus Platform</a>
              <a href="#">Customer Stories</a>
              <a href="#">Merchant Success</a>
              <a href="#">Pricing</a>
              <a href="#">Upgrade to shopify plus</a>
            </div>
          </li>
          <li>
            <a className="dropbtn" href="#">
              Blog
            </a>
          </li>
          <li>
            <a className="Navbar" href="#">
              Let's Talk
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Navbar;
