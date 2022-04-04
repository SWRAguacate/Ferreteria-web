import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/header/Header';
import { Pie } from './components/footer/Footer';
import { LeftSide } from './components/cart/LeftSide';
import { RightSide } from './components/cart/RightSide';
import {Deals} from './components/main/deals';
import {Products} from './components/main/products';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Menu></Menu>
    <br></br>
    <br></br>
    <div className="container">
    <Deals></Deals>
    </div>
    <Products></Products>
    <br></br>
    <br></br>
    <br></br>
    <Pie></Pie>
  </div>,

  document.getElementById('app')
);
