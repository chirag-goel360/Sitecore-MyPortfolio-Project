import React from 'react';
import { Text } from '@sitecore-jss/sitecore-jss-react';
import '../../assets/css/bootstrap.css';
import '../../assets/css/font-awesome.css';
import '../../assets/css/fakeLoader.css';
import '../../assets/css/owl.carousel.css';
import '../../assets/css/owl.theme.default.css';
import '../../assets/css/magnific-popup.css';
import '../../assets/css/style.css';

const NavBar = (props) => (
  <div>
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <a href="#" className="navbar-brand">
          <h2>
            <Text field={props.fields.title}></Text>
          </h2>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo"
          aria-controls="navbarTogglerDemo"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div id="navbarTogglerDemo" className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="#home" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About
              </a>
            </li>
            <li className="nav-item">
              <a href="#resume" className="nav-link">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#blog" className="nav-link">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
);

export default NavBar;
