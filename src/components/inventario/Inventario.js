import React from 'react';
import './Inventario.css';
import {
  Table,
  nav,
  input,
  Button,
  Container,
  Row,
  Col,
  CardBody,
} from 'reactstrap';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEEMPTY = 'empty';

class Inventario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [],
      //type: this.props.type,
      type: TYPEEDIT,
    };
  }

  changeInput(name, value) {
    this.fakeData = this.state.data;
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
      capacidad_tamanio,
      categoria,
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

  notifyParent() {}

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
    }
  }

  editButton(type, prevType) {
    this.setState({
      type,
      prevType,
      fakeData: null,
    });
  }

  render() {
    const isShow = this.state.type === 'show';
    const isEmpty = this.state.type === 'empty';
    const isEdit = this.state.type === 'edit';

    const button = isEdit ? (
      <Button
        style={{ width: '6em', margin: '5px' }}
        size="sm"
        color="warning"
        onClick={() => this.saveBDButton(TYPESHOW, TYPEEDIT)}
      >
        {' '}
        Editar{' '}
      </Button>
    ) : isShow ? (
      <Button
        style={{ width: '6em', margin: '5px' }}
        size="sm"
        color="primary"
        onClick={() => this.editButton(TYPEEDIT, TYPESHOW)}
      >
        {' '}
        Guardar{' '}
      </Button>
    ) : (
      <div></div>
    );

    return (
        <Container>
          {this.state.products.map((product, index) => (
            <Row>
              <Col>{product._id}</Col>
              <Col>{product.nombre}</Col>
              <Col>{product.cantidad || 0}</Col>
              <Col>
                {button}
                <Button
                  style={{ width: '6em', margin: '5px' }}
                  size="sm"
                  color="danger"
                >
                  Eliminar{' '}
                </Button>
              </Col>
            </Row>
          ))}
        </Container>
    );
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/products`)
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            products: respJson.Data,
          });
          this.forceUpdate();
        }
      });
  }
}

export default Inventario;
