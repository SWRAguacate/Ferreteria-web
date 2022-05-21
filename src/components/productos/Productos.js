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

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      data: {}
    };
  }

  onChangeInput(e) {
    this.fakeData = this.state.data;
    if(e.target.name == 'categoria') {
      var value = e.target.value.split(',')
      this.fakeData[e.target.name] = value;
    } else
      this.fakeData[e.target.name] = e.target.value;
  }

  createProduct() {
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

    return fetch(`http://localhost:3000/api/v1/products/`, {
      method: 'POST',
      body: JSON.stringify({
        nombre: nombre,
        precio: precio,
        imagen: imagen,
        descripcion: descripcion,
        color: color || "N/A",
        modelo: modelo || "N/A",
        tipo: tipo || "N/A",
        marca: marca || "N/A",
        material: material || "N/A",
        garantia: garantia || "N/A",
        capacidad_tamanio: capacidad_tamanio || "N/A",
        categoria: categoria || [],
        cantidad: cantidad || 0,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(e => {
      this.clear();
      alert("Producto dado de alta");
    });
  }

  clear(){
    this.fakeData = {};
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
    document.getElementById("imagen").value = "";
    document.getElementById("color").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("modelo").value = "";
    document.getElementById("tipo").value = "";
    document.getElementById("marca").value = "";
    document.getElementById("material").value = "";
    document.getElementById("garantia").value = "";
    document.getElementById("capacidad_tamanio").value = "";
    document.getElementById("categoria").value = "";
    document.getElementById("cantidad").value = "";
  }

  render() {

    return (
      <Container id="contain" >
        <Row xs="2">
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Nombre:</Label>
              <Input
                id="nombre"
                name="nombre"
                placeholder="nombre"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Precio:</Label>
              <Input
                id="precio"
                name="precio"
                placeholder="precio"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Descripcion:</Label>
              <Input
                id="descripcion"
                name="descripcion"
                placeholder="descripcion"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Material:</Label>
              <Input
                id="material"
                name="material"
                placeholder="material"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Color:</Label>
              <Input
              id="color" name="color" placeholder="color" type="text"
              onChange={(e) => this.onChangeInput(e)} />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Garantía:</Label>
              <Input
                id="garantia"
                name="garantia"
                placeholder="garantia"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Modelo:</Label>
              <Input
                id="modelo"
                name="modelo"
                placeholder="modelo"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Capacidad/tamaño:</Label>
              <Input
                id="capacidad_tamanio"
                name="capacidad_tamanio"
                placeholder="capacidad/tamaño"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Tipo:</Label>
              <Input
              id="tipo" name="tipo" placeholder="tipo" type="text"
              onChange={(e) => this.onChangeInput(e)} />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Categorías:</Label>
              <Input
                id="categoria"
                name="categoria"
                placeholder= "categoria 1,categoria 2,categoria 3,..."
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Marca:</Label>
              <Input
              id="marca" name="marca" placeholder="marca" type="text"
              onChange={(e) => this.onChangeInput(e)} />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Imagen:</Label>
              <Input
              id="imagen" name="imagen" placeholder="Url de la imagen" type="text"
              onChange={(e) => this.onChangeInput(e)} />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
              <Label for="exampleEmail"> Existencias:</Label>
              <Input
                id="cantidad"
                name="cantidad"
                placeholder="cantidad"
                type="text"
                onChange={(e) => this.onChangeInput(e)}
              />
            </FormGroup>
          </Col>
          <Col className="block-example border border-0 border-dark container">
            <ButtonGroup className="container" style={{ marginTop: '5.5%' }}>
              <Button color="success" onClick={() => this.createProduct()}>Alta</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    );
  }

  // componentDidMount() {
  //   fetch(`http://localhost:3000/api/v1/products/623e4ee0ab625a77bd27a691`)
  //     .then((response) => response.json())
  //     .then((respJson) => {
  //       if (respJson.success) {
  //         this.setState({
  //           state: true,
  //           product: respJson.Data,
  //         });
  //         this.forceUpdate();
  //       }
  //     });
  // }
}

export default Productos;
