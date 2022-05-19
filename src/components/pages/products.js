import React from 'react';
import { MenuSp } from './../headersp/IndexHeaderSp';
import { NavSp } from './../navsp/IndexNavSp';
import Productos from './../productos/Productos'
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer'

class Products extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (<div>
      <MenuNav></MenuNav>
      <br></br>
      <br></br>
      <NavSp></NavSp>
      <Productos type={'show'}></Productos>
      <br></br>
      <br></br>
      <br></br>
      <PieFooter></PieFooter>
    </div>);
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Products;
