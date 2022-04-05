import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/header/Header';
import { Pie } from './components/footer/Footer';
import { ViewProduct } from './components/viewproduct/ViewproductLefta';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Menu></Menu>
    <br></br>
    <ViewProduct></ViewProduct>
    <br></br>
    <br></br>
    <br></br>
    <Pie></Pie>
  </div>,

  document.getElementById('app')
);
