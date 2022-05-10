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
import { Link } from 'react-router-dom';


class ProductA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      status:false,
      type:TYPESHOW,
      prevtype:TYPESHOW,
      data:{},
      someKey: 'someValue'
    };
  }

  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        status: true,
        data: this.props.data,
      });
      this.forceUpdate();
    } else if (this.props.id) {
      const response = await fetch(`http://localhost:3000/api/v1/products/${this.props.id}`);
    }
    const respJson = await response.Json();
    if (respJson.success) {
      this.setState({
        status: true,
        data: respJson.Data,
      });
      this.forceUpdate();
    }
  }

  render() {
    const finalData = this.state.fakeData !== null ? this.state.fakeData:this.state.data;

    const {nombre,descripcion} = finalData;
    return this.state.status === true?(
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={productImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-6 ">
              <CardTitle tag="h5">{nombre}</CardTitle>
              <CardText>
                {descripcion}
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
                <Link to="/viewProduct">
          <Button color="warning">Ver producto</Button>
            </Link>
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
    ):(<div></div>)
  }

}

export default ProductA;
