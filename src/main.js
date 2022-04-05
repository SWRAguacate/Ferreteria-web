import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './components/header/Header';
import PieFooter from './components/footer/Footer'
import Deals from './components/main/deals';
import Products from './components/main/products';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <MenuNav></MenuNav>
    <br></br>
    <br></br>
    <div className="container">
    <Deals></Deals>
    </div>
    <Products></Products>
    <br></br>
    <br></br>
    <br></br>
    <PieFooter></PieFooter>
  </div>,

  document.getElementById('app')
);
