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

class MenuNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: props.logged,
    };
  }

  render() {
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
                <NavLink href="/components/">Inicio</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Perfil/">Iniciar sesion</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Carrito/">Carrito</NavLink>
              </NavItem>
            </Nav>
            <NavbarText>
              <div className="row">
                <div className="col-sm-6">
                  <Input />
                </div>
                <div className="col-sm-5">
                  <Button color="primary">Buscar</Button>
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
