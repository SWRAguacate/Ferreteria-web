import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/header/Header';
import { Pie } from './components/footer/Footer';
import {Results} from './components/search/results';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <div>
    <Menu></Menu>
    <br></br>
    <Results></Results>
    <br></br>
    <br></br>
    <br></br>
    <Pie></Pie>
  </div>,

  document.getElementById('app')
);
