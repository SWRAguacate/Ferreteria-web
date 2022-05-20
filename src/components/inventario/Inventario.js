import React from 'react';
import './Inventario.css';
import {
  Container,
  Row,
  Label,
  Col,
  CardBody,
  CardHeader,
  Card,
} from 'reactstrap';
import { RowInventory } from './RowInventory';

export class Inventario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/products/`)
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

  render() {
    return (
      <Card>
        <CardHeader>
          <Container>
            <Row>
              <Col>
                <Label>Id Producto</Label>
              </Col>
              <Col>
                <Label>Nombre Producto</Label>
              </Col>
              <Col>
                <Label>Existencias Producto</Label>
              </Col>
              <Col>
                <Label>Acciones</Label>
              </Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody>
        <Container>
          {this.state.products.map((product, index) => (
            <RowInventory
            data={product}
            key={index}
            id={product._id}
            callbackMessage={() => this.props.callbackMessage}
            status={this.state.status}></RowInventory>
             ))}
        </Container>
        </CardBody>
      </Card>
    );
  }
}
