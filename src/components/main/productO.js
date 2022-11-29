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
    <Card className="card border-dark me-2" style={{height: '25em', backgroundColor: "#E5E4E2", borderStyle: "solid", borderWidth: "2px 2px", borderRadius: "5px"}}>
      <CardImg alt="Card image cap" src={props.data.imagen} top width="90%" height="40%" />
      <CardBody>
        <CardTitle tag="h5">{props.data.nombre}</CardTitle>
        <CardText tag="h6">Precio:&nbsp;<abbr style={{color: "black", fontWeight: 700}}>${props.data.precio}</abbr></CardText>
        <CardText>{props.data.descripcion}</CardText>
        <Link to={`/viewProduct/${props.data?.id}`}>
          <Button color="warning">Ver producto</Button>
        </Link>
      </CardBody>
    </Card>
  );
}

export default ProductO;
