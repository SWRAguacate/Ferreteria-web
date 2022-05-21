import React, { Component } from 'react';
import { Button, Col, Container, Row, ButtonGroup } from 'reactstrap';
import { FormProduct } from './formProduct';
import {InventoryPlaceHolder} from './placeholder';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEDELETE = 'delete';

export class RowInventory extends Component {
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

  async deleteButton() {
    const response = await fetch(`http://localhost:3000/api/v1/products/${this.props.id}`,
    {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
    const respJson = await response.json();
    if(respJson.success) {
      this.setState({
        type: TYPEDELETE,
        prevType: this.state.type,
        fakeData: null,
        status: false
      });
      this.notifyParent();
      this.forceUpdate();
    } else alert(respJson.message);
  }

  notifyParent() {
    const word =
    this.state.type === TYPESHOW
      ? " cargando "
      : this.state.type === TYPEEDIT
      ? " modificado "
      : this.state.type === TYPEDELETE
      ? " eliminado "
      : "";

    const message = `Se ha ${word} el producto`;
    alert(message);
    this.props.callbackMessage(message, this.state.fakeData);
  }

  changeInput(name, value) {
    this.fakeData = this.state.data;
    if(name == 'categoria') {
      value = value.split(',')
      this.fakeData[name] = value;
    } else
      this.fakeData[name] = value;
  }

  updateProduct() {
    const {
      nombre,
      precio,
      imagen,
      descripcion,
      color,
      modelo,
      tipo,
      marca,
      material,
      garantia,
      categoria,
      capacidad_tamanio,
      cantidad,
    } = this.fakeData || {};

    return fetch(`http://localhost:3000/api/v1/products/${this.props.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        nombre,
        precio,
        imagen,
        descripcion,
        color,
        modelo,
        tipo,
        marca,
        material,
        garantia,
        capacidad_tamanio,
        categoria,
        cantidad,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  }

  async saveBDButton(type, prevType) {
    const response = await this.updateProduct();

    const respJson = await response.json();
    if (respJson.success) {
      this.notifyParent();
      this.setState({
        type,
        prevType,
        fakeData: this.fakeData,
      });
    } else alert(respJson.message);
  }

  editButton(type, prevType) {
    this.setState({
      type,
      prevType,
      fakeData: null,
    });
  }

  async componentDidMount() {
    if (this.props.data) {
      this.setState({
        status: true,
        data: this.props.data,
      });
      this.forceUpdate();
    } else if (this.props.id) {
      const response = await fetch(
        `http://localhost:3000/api/v1/products${this.props.id}`
      );
      const respJson = await response.json();
      if (respJson.success) {
        this.setState({
          status: true,
          data: respJson.Data,
        });
        this.forceUpdate();
      }
    }
  }

  render() {
    const isShow = this.state.type === 'show';
    const isDelete = this.state.type === 'delete';
    const isEdit = this.state.type === 'edit';

    const finalData =
      this.state.fakeData != null ? this.state.fakeData : this.state.data;

    const { _id, nombre, cantidad } = finalData;

    const button = isEdit ? (
      <Button
        style={{ width: '5em' }}
        color="success"
        onClick={() => this.saveBDButton(TYPESHOW, TYPEEDIT)}
      >
        {' '}
        Guardar cambios{' '}
      </Button>
    ) : isShow ? (
      <Button
        style={{ width: '6em', margin: '5px' }}
        size="sm"
        color="warning"
        onClick={() => this.editButton(TYPEEDIT, TYPESHOW)}
      >
        {' '}
        Editar{' '}
      </Button>
    ) : (
      <div></div>
    );

    return (
      <Container>
        {isEdit ? (
          <>
            <FormProduct
              data={finalData}
              changeCallback={this.changeInput.bind(this)}
            ></FormProduct>
            <Col>
              <ButtonGroup className="container" style={{ marginTop: '5.5%' }}>
                {button}
              </ButtonGroup>
              <br></br>
              <br></br>
              <br></br>
            </Col>
          </>
        ) : isShow ? (
          <Row>
            <Col>{_id}</Col>
            <Col>{nombre}</Col>
            <Col>{cantidad || 0}</Col>
            <Col>
              {button}
              <Button
                style={{ width: '6em', margin: '5px' }}
                size="sm"
                color="danger"
                onClick={() => this.deleteButton()}
              >
                Eliminar{' '}
              </Button>
            </Col>
          </Row>
        ) : this.state.type === TYPEDELETE ? (
          <div></div>
        ) : (
          <InventoryPlaceHolder></InventoryPlaceHolder>
        )}
      </Container>
    );
  }
}
