import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './components/header/Header';
import PieFooter from './components/footer/Footer';
import Results from './components/search/results';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <MenuNav logged={2}></MenuNav>
    <br></br>
    <Results></Results>
    <br></br>
    <br></br>
    <br></br>
    <PieFooter></PieFooter>
  </div>,

  document.getElementById('app')
);
