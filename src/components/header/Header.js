import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Input,
  Button,
} from 'reactstrap';
import logo from './img/ferreteria.png';
import { Link } from 'react-router-dom';

const TYPELOGGED = 'logged';
const TYPEUNLOGGED = 'unlogged';
const TYPELOGGEDSU = 'loggedsu';
class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.logged,
      type: props.type,
      prevType: TYPEUNLOGGED,
    };
  }

  render() {
    const isLogged = this.state.type === TYPELOGGED;
    const isUnlogged = this.state.type === TYPEUNLOGGED;
    const isLoggedSU= this.state.type === TYPELOGGEDSU;
    return (
      <div>
        <Navbar color="dark" dark expand="md" light>
          <NavbarBrand href="/">
            <img src={logo} thumbnail style={{ width: '50px' }}></img>
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() {}} />
          <Collapse navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <Link to={'/'} className="nav-link">
                  Inicio
                </Link>
              </NavItem>
              {isLogged ? (
                <NavItem>
                  <Link to={'/cart'} className="nav-link">
                    Carrito
                  </Link>
                </NavItem>
              ) : isUnlogged ?(
                  <NavItem>
                    <Link to={'/login'} className="nav-link">
                      Iniciar sesion
                    </Link>
                  </NavItem>
                ) :isLoggedSU ?(
                  <NavItem>
                  <Link to={'/indexSP'} className="nav-link">
                    Inventario
                  </Link>
                </NavItem>
                ) :(
                  <div></div>
                )
              }


            </Nav>
            <NavbarText>
              <div className="row">
                <div className="col-sm-5">
                  <Button color="primary">
                    <Link to={'/search'} className="nav-link">
                      Buscar
                    </Link>
                  </Button>
                </div>
                <div className="col-sm-1"></div>
              </div>
            </NavbarText>
          </Collapse>
        </Navbar>
      </div>
    );
  }

  componentDidMount() {
    this.setState({});
  }
}

export default MenuNav;
