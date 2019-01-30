import React from 'react';
import Navbar from './Navbar';

const Header = props => (
  <>
    <header className="header">
      <Navbar showNavbarMenu={props.showNavbarMenu} NavbarMenuStatus={props.NavbarMenuStatus} />
    </header>
  </>
);

export default Header;