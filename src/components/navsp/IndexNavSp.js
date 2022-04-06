import React from 'react';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';

export const NavSp = () => (
  <>
    <ul class="nav nav-tabs nav-fill">
      <li class="nav-item">
      <Link to={'/orders'} className="nav-link">
                  Pedidos
                </Link>
      </li>
      <li class="nav-item">
                <Link to={'/products'} className="nav-link">
                  Productos
                </Link>
      </li>
      <li class="nav-item">
      <Link to={'/inventory'} className="nav-link">
                  Inventario
                </Link>
      </li>
    </ul>
  </>
);
