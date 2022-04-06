import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from './../cart/LeftSide';
import RightSide from './../cart/RightSide';

class Cart extends React.Component {
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
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <LeftSide></LeftSide>
          </div>
          <div className="col-sm-4">
            <RightSide></RightSide>
          </div>
        </div>
      </div>
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

export default Cart;
