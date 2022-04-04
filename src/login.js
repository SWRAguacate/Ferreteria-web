import React from 'react';
import ReactDOM from 'react-dom';
import { Menu } from './components/header/Header';
import {Pie} from './components/footer/Footer'
import {LeftSide} from "./components/login/LeftSide"
import {RightSide} from "./components/login/RightSide"
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <div>
    <Menu></Menu>
    <br></br>
    <br></br>
    <div className='container bg-dark rounded shadow' style={{width:"80%", verticalAlign:"middle"}}>

    <div className='row' >
      <div className='col' style={{paddingRight:"0%",paddingLedt:"0%"}}>
        <LeftSide ></LeftSide>
      </div>
      <div className='col' style={{paddingRight:"0%",paddingLedt:"0%"}}>
        <RightSide></RightSide>
      </div>
    </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <Pie></Pie>
  </div>

  ,document.getElementById('app'));
