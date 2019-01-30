import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const NavbarMenu = props => (
  <>
    <ul className="navbar-menu">
      <li className="closed-button" onClick={props.showNavbarMenu} >X</li>
      <li className="navbar-item">Item 1</li>
      <li className="navbar-item">Item 2</li>
      <li className="navbar-item">Item 3</li>
      <li className="navbar-item">Item 4</li>
    </ul>
  </>
)

export default NavbarMenu;