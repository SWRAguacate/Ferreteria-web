import React from 'react';
import './results.css';
import productImage from './img/placeholder.jpg';
import ProductA from './productA';
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

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
    };
  }

  render() {
    return (
      <div>
        <div id="tp" className="row">
          <h3>Resultados:</h3>
        </div>
        <br></br>
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

export default Results;
