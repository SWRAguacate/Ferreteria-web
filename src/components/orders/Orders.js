import React from 'react';
import './Orders.css';
import { Card, CardBody, CardHeader, Col, Container, Label, Row, Table } from 'reactstrap';
import {RowOrder} from './RowOrder';

export class Pedidos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      orders: []
    };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/orders/`)
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            orders: respJson.Data,
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
                <Label>No.pedido</Label>
              </Col>
              <Col>
                <Label>Nombre cliente</Label>
              </Col>
              <Col>
                <Label>ID cliente</Label>
              </Col>
              <Col>
                <Label className="container">Estatus</Label>
              </Col>
            </Row>
          </Container>
        </CardHeader>
        <CardBody>
        <Container>
          {this.state.orders.map((order, index) => (
            <RowOrder
            data={order}
            key={index}
            id={order._id}
            type = 'show'
            callbackMessage={() => this.props.callbackMessage}
            status={this.state.status}></RowOrder>
             ))}
        </Container>
        </CardBody>
      </Card>
    );
  }
};
