import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from './../cart/LeftSide';
import RightSide from './../cart/RightSide';
import Placeholder from '../cart/placeholder';

const TYPESHOW = 'show';
const TYPEDIT = 'edit';
const TYPEDELETE = 'delete';
class Cart extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      status: false,
      type: TYPESHOW,
      prevType: TYPESHOW,
      data: {},
      fakeData: null,

    };
  }

  render() {
    const isEdit = this.state.type === TYPEEDIT;
    const isShow = this.state.type === TYPESHOW;
    return this.state.status === true ? (
      <div>
        <MenuNav></MenuNav>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-8">
              <LeftSide data={this.state.data}></LeftSide>
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
      </div>
    ) : this.state.type === TYPEDELETE ? (
      <div>
        <MenuNav></MenuNav>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <Placeholder></Placeholder>
            </div>
            <div className="col-sm-2"></div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <PieFooter></PieFooter>
      </div>
    ) : (
      <div>
        <MenuNav></MenuNav>
        <br></br>
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-sm-2"></div>
            <div className="col-sm-8">
              <Placeholder></Placeholder>
            </div>
            <div className="col-sm-2"></div>
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
    if(this.props.data){
      this.setState({
       status:true,
       data:this.props.data,
      });
      this.forceUpdate();
    }
    else {
      const response = await fetch("url de la api para traer porductos")
    }
    const respJson = await response.Json();
    if(respJson.success){
      this.setState({
        status:true,
        data:respJson.Data,
      });
      this.forceUpdate();
    }


  }
}

export default Cart;
