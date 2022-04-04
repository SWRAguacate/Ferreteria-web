import React from 'react';
import ReactDOM from 'react-dom';
import { MenuSp } from './components/headersp/IndexHeaderSp';
import { Pedidos } from './components/orders/Orders';
import { NavSp } from './components/navsp/IndexNavSp';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <MenuSp></MenuSp>
    <br></br>
    <br></br>
    <NavSp></NavSp>

    <br></br>
    <br></br>
    <br></br>
  </div>,

  document.getElementById('appSP')
);
