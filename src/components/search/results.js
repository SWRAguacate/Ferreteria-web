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

export const Results = () => (
  <div>
    <div id="tp" className="row">
        <h3>Resultados:</h3>
    </div>
    <br></br>
    <div className="container">
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={productImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-6 ">
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
              <div className="row">
                <div className="col-sm-5"><Button color="warning">Ver producto</Button></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5"> <Button color="success">Añadir al carrito</Button></div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={productImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-6 ">
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
              <div className="row">
                <div className="col-sm-5"><Button color="warning">Ver producto</Button></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5"> <Button color="success">Añadir al carrito</Button></div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
      <Card color="light">
        <CardBody>
          <div className="row">
            <div className="col-sm-3">
              <img src={productImage} thumbnail style={{ width: '100%' }}></img>
            </div>
            <div className="col-sm-6 ">
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
              <div className="row">
                <div className="col-sm-5"><Button color="warning">Ver producto</Button></div>
                <div className="col-sm-1"></div>
                <div className="col-sm-5"> <Button color="success">Añadir al carrito</Button></div>
                <div className="col-sm-6"></div>
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  </div>
);
