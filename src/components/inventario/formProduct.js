import React, { Component } from 'react'
import {
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';

export class FormProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      data: {
        nombre: "Test",
        precio: 0,
        imagen: "http://placeimg.com/640/480",
        descripcion: "Test",
        color: "Test",
        modelo: "Test",
        tipo: "Test",
        marca: "Test",
        material: "Test",
        garantia: "Test",
        capacidad_tamanio: "Test",
        categoria: [
            "Test",
            "Test"
        ],
        cantidad: 0
      }
    };
  }

  onChangeInput(callback, e){
    const name = e.target.name;
    const value = e.target.value;
    callback(name, value);
  }

  render() {
    const { nombre, precio, imagen, descripcion, color, modelo, tipo, marca, material, garantia, capacidad_tamanio, categoria, cantidad } = this.props.data || this.state.data
    return (
      <Container>
        <Row xs="3">
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Nombre:</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder={nombre}
                type="text"
                onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Precio:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="precio"
                name="precio"
                placeholder={precio}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Descripcion:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="descripcion"
                name="descripcion"
                placeholder={descripcion}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Material:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="material"
                name="material"
                placeholder={material}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Color:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
              id="color" name="color" placeholder={color} type="text" />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Garantía:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="garantia"
                name="garantia"
                placeholder={garantia}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Modelo:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="modelo"
                name="modelo"
                placeholder={modelo}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Capacidad/tamaño:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="capacidad_tamanio"
                name="capacidad_tamanioo"
                placeholder={capacidad_tamanio}
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Tipo:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
              id="tipo" name="tipo" placeholder={tipo} type="text" />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Categoría:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="categoria"
                name="categoria"
                placeholder={ categoria.toString() }
                type="text"
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Marca:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
              id="marca" name="marca" placeholder={marca} type="text" />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Foto:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
              id="imagen" name="imagen" placeholder={imagen} type="text" />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Existencias:</Label>
              <Input
              onChange={(e) => this.onChangeInput(this.props.changeCallback, e)}
                id="cantidad"
                name="cantidad"
                placeholder={cantidad || 0}
                type="text"
              />
            </FormGroup>
          </Col>
          </Row>
      </Container>
    )
  }
}
