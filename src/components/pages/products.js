import React from 'react';
import { MenuSp } from './../headersp/IndexHeaderSp';
import { NavSp } from './../navsp/IndexNavSp';
import {Productos} from './../productos/Productos'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (<div>
      <MenuSp></MenuSp>
      <br></br>
      <br></br>
      <NavSp></NavSp>
      <Productos></Productos>
      <br></br>
      <br></br>
      <br></br>
    </div>);
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Products;
