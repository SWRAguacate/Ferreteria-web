import React from 'react';
import './products.css';
import { Link } from 'react-router-dom';
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

function ProductA(props) {
  return (
    <Card className="card border-dark m-2" style={{ backgroundColor: "#E5E4E2", borderStyle: "solid", borderWidth: "2px 2px", borderRadius: "5px"}}>
      <CardBody>
        <div className="row">
          <div className="col-4">
            <img className="center" src={props.data.imagen}
              style={{ width: '100%', height: "12em"}}
            ></img>
          </div>
          <div className="col-6">
            <CardTitle tag="h5">{props.data.nombre}</CardTitle>
            <CardText>{props.data.descripcion}</CardText>
            <CardText>Precio:&nbsp;<abbr style={{color: "black", fontWeight: 700}}>${props.data.precio}</abbr></CardText>
            <Link to={`/viewProduct/${props.data?.id}`}>
              <Button color="warning">Ver producto</Button>
            </Link>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductA;
