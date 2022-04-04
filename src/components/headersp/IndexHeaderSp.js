import React from 'react';
import { nav, button, ul, li, div, span } from 'reactstrap';

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
              <a class="nav-link" href="#" style={{ color: 'white' }}>
                Mi cuenta
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" style={{ color: 'white' }}>
                Salir
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);
