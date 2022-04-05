import React from 'react';
import './Leftside.css';
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
import cartImage from './img/placeholder.jpg';

class ProductA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.title,
      description: this.props.description,
      quantity: this.props.quantity,
      productId: this.props.productId,
      someKey: 'someValue'
    };
  }

  removeProduct(){
    const element = document.getElementById("1");
    //element.remove();
  }

  render() {
    return (
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={cartImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-1 "></div>
            <div className="col-sm-5 ">
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

              <Button onClick={this.removeProduct()} color="danger">Eliminar del carrito</Button>
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
