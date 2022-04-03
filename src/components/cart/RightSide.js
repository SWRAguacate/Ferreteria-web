import React from 'react';
import './Rightside.css';
import { Button } from 'reactstrap';

export const RightSide = () => (
  <div id="rightside">
    <br></br>
    <br></br>
    <div
      className="container bg-dark rounded shadow"
      style={{ width: '80%', verticalAlign: 'middle' }}
    >
      <h3 style={{ color: 'white', verticalAlign: 'center' }}>
        Total de compra:
      </h3>

      <hr style={{ color: 'white' }}></hr>
      <br></br>
      <h5 style={{ color: 'white' }}> Tornillo x 1</h5>
      <h5 style={{ color: 'white' }}> Tornillo x 1</h5>
      <h5 style={{ color: 'white' }}> Tornillo x 1</h5>
      <br></br>

      <hr style={{ color: 'white' }}></hr>
      <br></br>
      <h5 style={{ color: 'white' }}>Total:</h5>
      <br></br>
      <div className='row'>
        <div className='col'>      <Button color="warning">Pagar con Paypal</Button></div>
        <div className='col'>      <Button color="info">Pagar con Tarjeta</Button></div>
      </div>

      <br></br>

    </div>
  </div>
);
