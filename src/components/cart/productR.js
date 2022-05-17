import React from 'react';
import './Rightside.css';

const TYPESHOW = 'show';
const TYPEDELETE = 'delete';
class ProductR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      status: false,
      type: props.type,
      prevtype: TYPESHOW,
      data: {},
      someKey: 'someValue',
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
        `http://localhost:3000/api/v1/carts/product/${this.props.id}`
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

    const finalData =
      this.state.fakeData !== null ? this.state.fakeData : this.state.data;

    const { nombre, cantidad } = finalData;
    return isShow ? (
      <h5 style={{ color: 'white' }}>
        {' '}
        {nombre} x {cantidad}
      </h5>
    ) : isDelete ? (
      <div></div>
    ) : (
      <div></div>
    );
  }
}

export default ProductR;
