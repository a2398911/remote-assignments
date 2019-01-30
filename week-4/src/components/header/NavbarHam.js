import React from 'react';

const NavbarHam = props => (
  <>
    <div className="navbar-ham" onClick={props.showNavbarMenu}>
      <span className="navbar-hamLine"></span>
      <span className="navbar-hamLine"></span>
      <span className="navbar-hamLine"></span>
    </div>
  </>
);

export default NavbarHam;