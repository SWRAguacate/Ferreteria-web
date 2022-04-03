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

export const LeftSide = () => (
  <div>
    <div className='row'>
      <div className='col-sm-5'><h2>Carrito de compras</h2></div>
      <div className='col-sm-3'><Button color="warning">Seguir comprando</Button></div>
    </div>


    <Card color="light">
      <CardBody>
        <div className="row">
          <div className="col-sm-3">
            <img src={cartImage} thumbnail style={{ width: '100%' }}></img>
          </div>
          <div className="col-sm-1 "></div>
          <div className="col-sm-5 ">
            <CardTitle tag="h5">Producto</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

            <Button color="danger">Eliminar del carrito</Button>
          </div>
        </div>
      </CardBody>
    </Card>
    <Card color="light">
      <CardBody>
        <div className="row">
          <div className="col-sm-3">
            <img src={cartImage} thumbnail style={{ width: '100%' }}></img>
          </div>
          <div className="col-sm-1 "></div>
          <div className="col-sm-5 ">
            <CardTitle tag="h5">Producto</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

            <Button color="danger">Eliminar del carrito</Button>
          </div>
        </div>
      </CardBody>
    </Card>
    <Card color="light">
      <CardBody>
        <div className="row">
          <div className="col-sm-3">
            <img src={cartImage} thumbnail style={{ width: '100%' }}></img>
          </div>
          <div className="col-sm-1 "></div>
          <div className="col-sm-5 ">
            <CardTitle tag="h5">Producto</CardTitle>
            <CardText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
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

            <Button color="danger">Eliminar del carrito</Button>
          </div>
        </div>
      </CardBody>
    </Card>
  </div>
);
