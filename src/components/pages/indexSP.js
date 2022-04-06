import React from 'react';
import { MenuSp } from './../headersp/IndexHeaderSp';
import { Pedidos } from './../orders/Orders';
import { NavSp } from './../navsp/IndexNavSp';

class IndexSP extends React.Component {
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
      <Pedidos></Pedidos>

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

export default IndexSP;
