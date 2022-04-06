import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import {ViewProductLeft} from './../viewproduct/ViewproductLefta';

class ViewProduct extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (<div>
      <MenuNav logged={2}></MenuNav>
      <br></br>
      <ViewProductLeft></ViewProductLeft>
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

export default ViewProduct;
