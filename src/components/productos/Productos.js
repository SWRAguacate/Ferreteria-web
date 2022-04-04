import React from 'react';
import './Productos.css';
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  Button,
} from 'reactstrap';

export const Productos = () => (
  <Container>
    <Row xs="2">
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Nombre:</Label>
          <Input id="Nombre" name="Nombre" placeholder="Nombre" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> ID:</Label>
          <Input id="ID" name="ID" placeholder="ID" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Categoría:</Label>
          <Input
            id="Categoria"
            name="Categoria"
            placeholder="Categoria"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Material:</Label>
          <Input
            id="Material"
            name="Material"
            placeholder="Material"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Color:</Label>
          <Input id="Color" name="Color" placeholder="Color" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Garantía:</Label>
          <Input
            id="Garantia"
            name="Garantia"
            placeholder="Garantia"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Modelo:</Label>
          <Input id="Modelo" name="Modelo" placeholder="Modelo" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Capacidad/tamaño:</Label>
          <Input
            id="Capacidad/tamanio"
            name="Capacidad/tamanio"
            placeholder="Capacidad/tamanio"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Tipo:</Label>
          <Input id="Tipo" name="Tipo" placeholder="Tipo" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Categoría:</Label>
          <Input
            id="Categoria"
            name="Categoria"
            placeholder="Categoria"
            type="text"
          />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Marca:</Label>
          <Input id="Marca" name="Marca" placeholder="Marca" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <ButtonGroup className="container" style={{ marginTop: '5.5%' }}>
          <Button color="success">Alta</Button>
          <Button color="danger">Baja</Button>
          <Button color="warning">Cambio</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
);
