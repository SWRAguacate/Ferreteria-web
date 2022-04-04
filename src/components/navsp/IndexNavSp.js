import React from 'react';
import { NavLink } from 'reactstrap';

export const NavSp = () => (
  <>
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
        <a
          class="nav-link active"
          aria-current="page"
          href="/src/index.js"
          style={{ color: 'orangered', width: '100%' }}
        >
          Pedidos
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/src/index.js" style={{ color: 'orangered' }}>
          Productos
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/src/index.js" style={{ color: 'orangered' }}>
          Inventario
        </a>
      </li>
    </ul>
  </>
);
