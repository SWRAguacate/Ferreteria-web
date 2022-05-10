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
import cartImage from './img/placeholder.jpg';

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
    const isShow = this.state.type === TYPESHOW;

    const finalData = this.state.fakeData !== null ? this.state.fakeData:this.state.data;

    const {nombre,descripcion,cantidad} = finalData;
    return this.state.status === true(
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={cartImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-1 "></div>
            <div className="col-sm-5 ">
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
                    <Input id="id_cantidad" name="cantidad" type="number" value={cantidad}/>
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

  removeProduct(){
    console.log("Eliminar producto")
  }


}

export default ProductA;
