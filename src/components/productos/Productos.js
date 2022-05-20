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

const TYPESHOW = "show";
const TYPEEMPTY = "empty";
const TYPEEDIT = "edit";

class Productos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [],
      type: TYPESHOW,
      prevType: TYPESHOW,
    };
  }

  render() {
    const isShow = this.state.type === TYPESHOW;

    return isShow? (
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
        <FormGroup style={{ marginTop: '2%', marginBottom: '2%' }}>
          <Label for="exampleEmail"> Foto:</Label>
          <Input id="Foto" name="Foto" placeholder="Imagen" type="text" />
        </FormGroup>
      </Col>
      <Col className="block-example border border-0 border-dark container">
        <ButtonGroup className="container" style={{ marginTop: '5.5%' }}>
          <Button color="success">Alta</Button>
        </ButtonGroup>
      </Col>
    </Row>
  </Container>
  ) : (<div></div>) }

  componentDidMount() {
    //fetch(`http://localhost:3000/api/v1/products/${this.props.id_u}`)
    fetch(`http://localhost:3000/api/v1/products/623e4ee0ab625a77bd27a691`)
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            product: respJson.Data,
          });
          this.forceUpdate();
        }
      });
  }
}

export default Productos;
