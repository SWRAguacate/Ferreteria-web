import React from 'react';
import './Rightside.css';
import { Button } from 'reactstrap';
import ProductR from './productR';

class RightSide extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      products: [],
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
          {this.state.products.map((product, index) => (
            <div key={index}>
              <ProductR
                key={index}
                id={product._id}
                callbackMessage={() => this.props.callbackMessage}
                status={this.state.status}
                data={product}
              ></ProductR>
            </div>
          ))}
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
    fetch('query para traer todos los productos del carrito de una persona')
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            products: respJson.Data,
          });
          console.log(respJson.Data);
          this.forceUpdate();
        }
      });
  }
}

export default RightSide;
