import React from 'react';
import ReactDOM from 'react-dom';
import MenuNav from './components/header/Header';
import PieFooter from './components/footer/Footer'
import LeftSide from "./components/register/LeftSide"
import RightSide from "./components/register/RightSide"
import 'bootstrap/dist/css/bootstrap.min.css'


ReactDOM.render(
  <div>
    <MenuNav></MenuNav>
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
    <PieFooter></PieFooter>
  </div>


  ,document.getElementById('app'));
