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
  CardImg,
} from 'reactstrap';
import { Link } from 'react-router-dom';

function ProductA(props) {
  console.log(props.id);
  return (

    <Card color="light">
      <CardBody>
        <div className="row">
          <div className="col-sm-3">
            <img
              src={props.data.imagen}
              thumbnail
              style={{ width: '100%' }}
            ></img>
          </div>
          <div className="col-sm-6 ">
            <CardTitle tag="h5">{props.data.nombre}</CardTitle>
            <CardText>{props.data.descripcion}</CardText>
            <CardText>{props.data.precio}</CardText>
          </div>
          <div className="col-sm-3 ">
            <div className="row">
              <div className="col-sm-5">
                <Link
                  to={`/viewProduct/${props.data?.id}`}
                  className="nav-link"
                >
                  <Button color="warning">Ver producto</Button>
                </Link>
              </div>
              <div className="col-sm-6"></div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default ProductA;
