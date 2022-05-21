import React from 'react';
import './products.css';

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
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function ProductO(props) {
  return (
    <Card>
      <CardImg alt="Card image cap" src={props.data.imagen} top width="100%" />
      <CardBody>
        <CardTitle tag="h5">{props.data.nombre}</CardTitle>
        <CardSubtitle className="mb-2 text-muted" tag="h6">
          {props.data.precio}
        </CardSubtitle>
        <CardText>{props.data.descripcion}</CardText>
        <br></br>
        <br></br>
        <Link to={`/viewProduct/${props.data?.id}`} className="nav-link">
          <Button color="warning">Ver producto</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProductO;
