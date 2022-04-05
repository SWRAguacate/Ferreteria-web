import React from 'react';
import './results.css';
import productImage from './img/placeholder.jpg';
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
  CardImg
} from 'reactstrap';


class ProductA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someValue',
      title: this.props.title,
      description: this.props.description,
      productId: this.props.productId
    };
  }

  render() {
    return (
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={productImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-6 ">
              <CardTitle tag="h5">{this.state.title}</CardTitle>
              <CardText>
                {this.state.description}
              </CardText>
            </div>
            <div className="col-sm-3 ">
              <div className="row">
                <div className="col-sm-6">
                  <CardText>Cantidad:</CardText>
                </div>
                <div className="col-sm-5">
                  <FormGroup>
                    <Input id="id_cantidad" name="cantidad" type="number" />
                  </FormGroup>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-5">
                  <Button color="warning">Ver producto</Button>
                </div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5">
                  {' '}
                  <Button color="success">Añadir al carrito</Button>
                </div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default ProductA;
