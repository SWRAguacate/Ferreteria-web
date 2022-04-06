import React from 'react';
import { nav, button, ul, li, div, span } from 'reactstrap';
import { Link } from 'react-router-dom';

export const MenuSp = () => (
  <>
    <nav
      class="navbar navbar-expand-lg navbar-light "
      style={{ backgroundColor: '#3c3c3b' }}
    >
      <div class="container-fluid">
        <a
          class="navbar-brand"
          href="#"
          style={{ color: 'white', fontWeight: 'bold' }}
        >
          Ferreteria
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
            <Link to={'/'} className="nav-link" >
                  Inicio
                </Link>
            </li>
            <li class="nav-item">
            <Link to={'/login'} className="nav-link" >
                  Iniciar sesion
                </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
