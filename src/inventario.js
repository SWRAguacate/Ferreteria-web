import React from 'react';
import ReactDOM from 'react-dom';
import { MenuSp } from './components/headersp/IndexHeaderSp';
import { NavSp } from './components/navsp/IndexNavSp';
import { Inventario } from './components/inventario/Inventario';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <MenuSp></MenuSp>
    <br></br>
    <br></br>
    <NavSp></NavSp>
    <Inventario></Inventario>

    <br></br>
    <br></br>
    <br></br>
  </div>,

  document.getElementById('appInventario')
);
