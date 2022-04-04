import React from 'react';
import './ViewProductLeft.css';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  img,
  Button,
  Table,
} from 'reactstrap';
import licuadora from './licuadora.jpg';

export const ViewProduct = () => (
  <Container>
    <Row xs="3" style={{ height: '50%' }}>
      <Col className="block-example border border-0 border-dark container col-sm-5">
        <img style={{ width: '100%' }} src={licuadora}></img>
      </Col>
      <Col className="block-example border border-0 border-dark container ">
        <a style={{ fontWeight: 'bold', fontSize: '1.5em' }}>
          Licuadora color Plata y envase de vidrio{' '}
        </a>
        <br></br>
        <a style={{ fontSize: '1.0em' }}>#76277272 </a>
        <br></br>
        <br></br>
        <a style={{ fontSize: '2.4em', color: 'red', fontWeight: 'bold' }}>
          $799.99
        </a>

        <div
          class="input-group"
          style={{
            width: '40%',
          }}
        ></div>
      </Col>
      <Col className="block-example border border-0 border-dark container col-sm-2">
        <Input
          class="row justify-content-end"
          type="number"
          style={{
            textAlign: 'center',
            width: '100%',
            marginRight: '2%',
            alignContent: 'flex-end',
            borderRadius: '4px',
          }}
        />
        <span class="input-group-btn">
          <Button style={{ width: '100%', marginTop: '5px' }}>
            Agregar al Carrito
          </Button>
        </span>
      </Col>
    </Row>
    <br></br>
    <br></br>

    <div>
      <h2 style={{ fontWeight: 'bold', fontSize: '1.5em', marginLeft: '1%' }}>
        Especificaciones
      </h2>

      <Table bordered responsive striped>
        <thead id="TablaVproduct">
          <tr>
            <th scope="row">Color</th>
            <td>Plata</td>
            <th scope="row">Material</th>
            <td>Vidrio</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Modelo</th>
            <td>Mark</td>
            <th scope="row">Tipo</th>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Marca</th>
            <td>Mark</td>
            <th scope="row">Garantia</th>
            <td>@mdo</td>
          </tr>
          <tr>
            <th scope="row">Capacidad/Tamano</th>
            <td>Mark</td>
            <th scope="row">Categoria</th>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  </Container>
);
