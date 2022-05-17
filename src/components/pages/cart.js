import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from './../cart/LeftSide';
import RightSide from './../cart/RightSide';
import Placeholder from '../cart/placeholder';
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      status: false,
      data: {},
      fakeData: null,

    };
  }

  render() {

    return  (
      <div>
        <MenuNav></MenuNav>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <LeftSide id_u ="623689f4a06940d1cd7d98a3" type="show"></LeftSide>
            </div>
            <div className="col-sm-4">
              <RightSide id_u ="623689f4a06940d1cd7d98a3" type="show"></RightSide>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <PieFooter></PieFooter>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue'
    });
  }
}

export default Cart;
