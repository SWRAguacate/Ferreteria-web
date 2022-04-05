import React from 'react';
import './Rightside.css';
import { Button } from 'reactstrap';
import ProductR from './productR';

class RightSide extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (
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
          <ProductR title="Producto" quantity="1"></ProductR>
          <ProductR title="Producto" quantity="1"></ProductR>
          <ProductR title="Producto" quantity="1"></ProductR>
          <br></br>

          <hr style={{ color: 'white' }}></hr>
          <br></br>
          <h5 style={{ color: 'white' }}>Total:</h5>
          <br></br>
          <div className="row">
            <div className="col">
              <Button color="warning">Pagar con Paypal</Button>
            </div>
            <div className="col">
              <Button color="info">Pagar con Tarjeta</Button>
            </div>
          </div>

          <br></br>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default RightSide;
