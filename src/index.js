import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './components/header/Header';
import PieFooter from './components/footer/Footer'
import LeftSide from './components/cart/LeftSide';
import RightSide from './components/cart/RightSide';


import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <MenuNav></MenuNav>
    <br></br>
    <br></br>
    <div className="container">
      <div className="row">
        <div className="col-sm-8">
          <LeftSide></LeftSide>
        </div>
        <div className="col-sm-4">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <PieFooter></PieFooter>
  </div>,

  document.getElementById('app')
);
