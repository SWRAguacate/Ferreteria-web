import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';

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

  render() {
    const isShow = this.props.type === 'show';
    const isDelete = this.props.type === 'delete';
    const isEdit = this.props.type === 'edit';

    const finalData =
      this.state.fakeData != null ? this.state.fakeData : this.state.data;

    const { _id, nombre, id_usuario, estatus } = finalData;
    return (
      <Container>
          <Row>
            <Col>{_id}</Col>
            <Col>{nombre || "Nombre default"}</Col>
            <Col>{id_usuario}</Col>
            <Col>{estatus || "true"}</Col>
          </Row>
      </Container>
    )
  }
}
