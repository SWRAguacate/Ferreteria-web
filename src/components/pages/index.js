import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer'

import Deals from './../main/deals';
import Products from './../main/products';

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (<div>
      <MenuNav type="unlogged"></MenuNav>
      <Products></Products>
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

export default Index;
