import React from 'react';
import ReactDOM from 'react-dom';
import { MenuSp } from './components/headersp/IndexHeaderSp';
import { NavSp } from './components/navsp/IndexNavSp';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Productos } from './components/productos/Productos';

ReactDOM.render(
  <div>
    <MenuSp></MenuSp>
    <br></br>
    <br></br>
    <NavSp></NavSp>
    <Productos></Productos>
    <br></br>
    <br></br>
    <br></br>
  </div>,

  document.getElementById('appProductos')
);
