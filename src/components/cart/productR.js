import React from 'react';
import './Rightside.css';

class ProductR extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someValue',
      title:this.props.title,
      quantity:this.props.quantity
    };
  }

  render() {
    return <h5 style={{ color: 'white' }}> {this.state.title} x {this.state.quantity}</h5>
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default ProductR;
