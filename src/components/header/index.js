import React from 'react';
import { NavLink } from 'reactstrap';


export const Menu = () => (

  <>
    <Nav>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <Bars/>
      <NavMenu>
        <NavLink to="/about" activeStyle>
          About
        </NavLink>
        <NavLink to="/services" activeStyle>
          Services
        </NavLink>
        <NavLink to="/contact-us" activeStyle>
          Contact Us
        </NavLink>
        <NavLink to="/sign-up" activeStyle>
          Sign Up
        </NavLink>
        <NavBtN>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtN>
      </NavMenu>
    </Nav>
  </>
);
