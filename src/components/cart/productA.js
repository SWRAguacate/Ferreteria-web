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

const TYPESHOW = 'show';
const TYPEDELETE = 'delete';
function ProductA(props) {
  /*async componentDidMount() {
    if (this.props.data) {
      this.setState({
        status: true,
        data: this.props.data,
      });
      this.forceUpdate();
    } else if (this.props.id) {
      const response = await fetch(
        `http://localhost:3000/api/v1/carts/product/${this.props.id}`
      );
      const respJson = await response.json();
      if (respJson.success) {
        this.setState({
          status: true,
          data: respJson.Data,
        });
        this.forceUpdate();
      }
    }
  }*/

  /*const isShow = this.state.type === 'show';
  const isDelete = this.state.type === 'delete';*/
  const deleteHandle =  ()=>{
    props.remove(props.data.id)
  }

  //const finalData =this.state.fakeData !== null ? this.state.fakeData : this.state.data;

  //const { id_usuario,id_producto,nombre, descripcion, imagen, precio, cantidad, total_producto } = finalData;
  //const { nombre, descripcion, cantidad } = finalData;
  return (
    <Card color="light">
      <CardBody>
        <div className="row">
          <div className="col-sm-3">
            <img src={props.data.imagen} thumbnail style={{ width: '100%' }}></img>
          </div>
          <div className="col-sm-1 "></div>
          <div className="col-sm-5 ">
            <CardTitle tag="h5">{props.data.nombre}</CardTitle>
            <CardText>{props.data.descripcion}</CardText>
            <CardText>{props.data.total_producto}$</CardText>
          </div>
          <div className="col-sm-3 ">
            <div className="row">
              <div className="col-sm-7">
                <CardText>Cantidad:{props.data.cantidad}</CardText>
              </div>
            </div>

            <Button onClick={deleteHandle} color="danger">
              Eliminar del carrito
            </Button>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductA;
