import React from 'react';
import { MenuSp } from './../headersp/IndexHeaderSp';
import { NavSp } from './../navsp/IndexNavSp';
import { Inventario } from './../inventario/Inventario';

class Inventory extends React.Component {
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
      <Inventario></Inventario>

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

export default Inventory;
