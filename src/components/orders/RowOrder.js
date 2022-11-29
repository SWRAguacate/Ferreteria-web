import React, { Component } from 'react';
import { ButtonGroup, Button, Col, Container, Label, Row } from 'reactstrap';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEDELETE = 'delete';

export class RowOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      status: false,
      type: TYPESHOW,
      prevType: TYPESHOW,
      data: this.props.data,
      fakeData: null,
    };
  }

  updateOrder() {
    const {
      id_usuario,
      nombre,
      fecha,
      total_pedido,
      codigo,
      productos,
      estatus,
    } = this.fakeData || {};

    return fetch(`http://localhost:3000/api/v1/orders/${this.props.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        id_usuario,
        nombre,
        fecha,
        total_pedido,
        codigo,
        productos,
        estatus,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  async saveBDButton(est) {
    this.fakeData = this.state.data;
    this.fakeData.estatus = est;
    const response = await this.updateOrder();
    const respJson = await response.json();
    if (respJson.success) {
      this.setState({
        data: this.state.data,
      });
      this.forceUpdate();
    } else alert(respJson.message);
  }

  render() {
    const { _id, nombre, id_usuario, estatus } = this.state.data;
    const entregado = estatus === 0;
    const expirado = estatus === -1;
    const pendiente = estatus === 1;

    const Buttons = pendiente ? (
      <ButtonGroup className="container">
        <Button
          style={{ width: '6em', margin: '5px' }}
          size="sm"
          color="success"
          onClick={() => this.saveBDButton(0)}
        >
          Entregado{' '}
        </Button>
        <Button
          style={{ width: '6em', margin: '5px' }}
          size="sm"
          color="danger"
          onClick={() => this.saveBDButton(-1)}
        >
          Cambiar a expirado{' '}
        </Button>
      </ButtonGroup>
    ) : expirado ? (
      <ButtonGroup className="container">
        <Button
          style={{ width: '6em', margin: '5px' }}
          size="sm"
          color="success"
          onClick={() => this.saveBDButton(0)}
        >
          Entregado{' '}
        </Button>
        <Button
          style={{ width: '6em', margin: '5px' }}
          size="sm"
          color="warning"
          onClick={() => this.saveBDButton(1)}
        >
          Cambiar a pendiente{' '}
        </Button>
      </ButtonGroup>
    ) : entregado ? (
      <Label className="container" style={{ margin: '5px', color: 'green', fontWeight: '700' }}>Producto entregado</Label>
    ) : (
      <div></div>
    );

    return (
      <Container>
        <Row style={{border: '1px solid #000000', height: '5em', alignItems: 'center'}}>
          <Col>{_id}</Col>
          <Col style={{ fontWeight: '700' }}>{nombre || 'Nombre default'}</Col>
          <Col>{id_usuario}</Col>
          <Col>{Buttons}</Col>
        </Row>
      </Container>
    );
  }
}
