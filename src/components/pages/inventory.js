import React from 'react';
import { NavSp } from './../navsp/IndexNavSp';
import Inventario from './../inventario/Inventario';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer'

class Inventory extends React.Component {
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
      <Inventario></Inventario>

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

export default Inventory;
