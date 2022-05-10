import React from 'react';
import './Rightside.css';

class ProductR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id:"",
      status:false,
      type:TYPESHOW,
      prevtype:TYPESHOW,
      data:{},
      someKey: 'someValue'
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
      const response = await fetch(`http://localhost:3000/api/v1/products/${this.props.id}`);
    }
    const respJson = await response.Json();
    if (respJson.success) {
      this.setState({
        status: true,
        data: respJson.Data,
      });
      this.forceUpdate();
    }
  }

  render() {

    const finalData = this.state.fakeData !== null ? this.state.fakeData:this.state.data;

    const {nombre,cantidad} = finalData;
    return <h5 style={{ color: 'white' }}> {nombre} x {cantidad}</h5>
  }


}

export default ProductR;
