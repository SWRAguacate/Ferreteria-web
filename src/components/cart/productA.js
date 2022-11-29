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

  const deleteHandle =  ()=>{
    props.remove(props.data.id)
  }

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
            <CardText>${props.data.total_producto}</CardText>
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
