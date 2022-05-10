import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import ProductA from './productA';
import cartImage from './img/placeholder.jpg';
import { Link } from 'react-router-dom';
class LeftSide extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      products: [],
    };
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-sm-5">
            <h2>Carrito de compras</h2>
          </div>
          <div className="col-sm-3">
          <Link to="/">
          <Button color="warning">Seguir comprando</Button>
            </Link>

          </div>
        </div>
        {this.state.products.map((product, index) => (
            <div key={index}>
              <ProductA
                key={index}
                id={product._id}
                callbackMessage={() => this.props.callbackMessage}
                status={this.state.status}
                data={product}
              ></ProductA>
            </div>
          ))}
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

export default LeftSide;
