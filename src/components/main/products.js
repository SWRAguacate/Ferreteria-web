import React from 'react';
import './products.css';
import productImage from './img/placeholder.jpg';

import ProductA from './productA';
import ProductO from './productO';
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
  CardGroup,
  CardImg,
} from 'reactstrap';

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
    };
  }

  render() {
    return (
      <div>
        <div id="products">
          <div id="so" className="row">
            <h3>Super ofertas:</h3>
          </div>
          <br></br>
          <div className="container">
            <CardGroup>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
            </CardGroup>
          </div>
          <br></br>
          <div id="lm" className="row">
            <h3>Lo mas vendido:</h3>
          </div>
          <br></br>
          <div className="container">
            <CardGroup>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
              <ProductO title="Producto" category="Categoria" description="Descripcion" productId="1"></ProductO>
            </CardGroup>
          </div>
          <br></br>
          <div id="tp" className="row">
            <h3>Todos los productos:</h3>
          </div>
          <br></br>
        </div>
        <div className="container">
          <ProductA title="Producto" description="Descripcion" productId="1"></ProductA>
          <ProductA title="Producto" description="Descripcion" productId="1"></ProductA>
          <ProductA title="Producto" description="Descripcion" productId="1"></ProductA>
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

export default Products;
