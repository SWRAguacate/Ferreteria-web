import React, { Component } from 'react';
import {
  Row,
} from 'reactstrap';
import FormProduct from './formProduct';
import Placeholder from './placeholder';
import { RowInventory } from './RowInventory';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEDELETE = 'delete';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      status: false,
      type: TYPESHOW,
      prevType: TYPESHOW,
      data: {},
      fakeData: null,
    };
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
    const isEdit = this.state.type === TYPEEDIT;
    const isShow = this.state.type === TYPESHOW;

    const finalData = this.state.fakeData != null ? this.state.fakeData : this.state.data;

    return this.state.status === true ? (
      <RowInventory data={finalData}></RowInventory>
    ) : (<Placeholder></Placeholder>)
  }
}

export default Product;
