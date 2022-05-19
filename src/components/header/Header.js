import React, { useContext, Component } from 'react';
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
import { Context } from '../../context/Context';

function MenuNav() {
  const TYPELOGGED = 'logged';
  const TYPEUNLOGGED = 'unlogged';
  const TYPELOGGEDSU = 'loggedsu';
  const { dispatch, isFetching } = useContext(Context);
  const isLogged = TYPELOGGED;
  const isUnlogged = TYPEUNLOGGED;
  const isLoggedSU = TYPELOGGEDSU;
  const { user } = useContext(Context);

  const Logout = () => {
    dispatch({ type: 'LOGOUT' });
  };
  const idSU = '623689f4a06940d1cd7d98a3';
  let headerP;
  if (user == null) {
    headerP = (
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to={'/'} className="nav-link">
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/login'} className="nav-link">
            Iniciar sesion
          </Link>
        </NavItem>
      </Nav>
    );
  } else if (user.Data._id == idSU) {
    headerP = (
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to={'/'} className="nav-link">
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/indexSP'} className="nav-link">
            Inventario
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/login'} className="nav-link" onClick={Logout}>
            Cerrar sesion
          </Link>
        </NavItem>
      </Nav>
    );
  } else if (user.Data._id != null) {
    headerP = (
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to={'/'} className="nav-link">
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/cart'} className="nav-link">
            Carrito
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/login'} className="nav-link" onClick={Logout}>
            Cerrar sesion
          </Link>
        </NavItem>
      </Nav>
    );
  }else{
    headerP = (
      <Nav className="me-auto" navbar>
        <NavItem>
          <Link to={'/'} className="nav-link">
            Inicio
          </Link>
        </NavItem>
        <NavItem>
          <Link to={'/login'} className="nav-link" onClick={Logout}>
            Cerrar sesion
          </Link>
        </NavItem>
      </Nav>
    );
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md" light>
        <NavbarBrand href="/">
          <img src={logo} thumbnail style={{ width: '50px' }}></img>
        </NavbarBrand>
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          {headerP}

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

export default MenuNav;
