import React, { Component } from 'react'
import { Card, CardBody, CardHeader, Col, Container, Label, Row } from 'reactstrap';
import Inventario from './Inventario';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEDELETE = 'delete';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      status: false,
      type: TYPESHOW,
      prevType: TYPESHOW,
      data: {},
      fakeData: null,
    };
  }

  render() {
    const button = isEdit ?
    (<Button style={{ width: '6em', margin: '5px' }} size="sm" color="warning" onClick={() => this.saveBDButton(TYPESHOW, TYPEEDIT)}> Editar </Button>) :
    isShow ?
    (<Button style={{ width: '6em', margin: '5px' }} size="sm" color="primary" onClick={() => this.editButton(TYPEEDIT, TYPESHOW)}> Guardar </Button>) :
    (<div></div>);

    const isEdit = this.state.type === TYPEEDIT;
    const isShow = this.state.type === TYPESHOW;

    return (
      <Card>
        <CardHeader>
          <Container>
            <Row>
              <Col md={4}><Label>Id Producto</Label></Col>
              <Col md={4}><Label>Nombre Producto</Label></Col>
              <Col md={4}><Label>Existencias Producto</Label></Col>
              <Col md={4}><Label>Acciones</Label></Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody>
                {
                  isEdit ? (
                    <FormProduct></FormProduct>
                  ) : (
                    <Inventario></Inventario>
                  )
                }
        </CardBody>
        <nav class="">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      </Card>
    )
  }
}

export default Product;
