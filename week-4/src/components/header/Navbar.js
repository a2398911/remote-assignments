import React from 'react';
import NavbarMenu from './NavbarMenu';
import NavbarHam from './NavbarHam';

const Navbar = props => (
  <div className="navbar">
    <div className="navbar-logo">
      Website Title/Logo
    </div>
    <NavbarMenu showNavbarMenu={props.showNavbarMenu} />
    <NavbarHam showNavbarMenu={props.showNavbarMenu} />
  </div>
);

export default Navbar;