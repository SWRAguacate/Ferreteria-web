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
      someKey: 'someValue',
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

        <ProductA id={"1"} title="Producto" description="Descripcion" quantity="1" productId="1" callbackM={this.cllbckProductMessage}></ProductA>
        <ProductA id={"2"} title="Producto" description="Descripcion" quantity="1" productId="2" callbackM={this.cllbckProductMessage}></ProductA>
        <ProductA id={"3"} title="Producto" description="Descripcion" quantity="1" productId="3" callbackM={this.cllbckProductMessage}></ProductA>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default LeftSide;
