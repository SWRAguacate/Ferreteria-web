import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from "./../register/LeftSide";
import RightSide from "./../register/RightSide";
import 'bootstrap/dist/css/bootstrap.min.css';

class Register extends React.Component {
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
      <div className='container bg-dark rounded shadow' style={{width:"80%", verticalAlign:"middle"}}>

      <div className='row' >
        <div className='col' style={{paddingRight:"0%",paddingLedt:"0%"}}>
          <LeftSide ></LeftSide>
        </div>
        <div className='col' style={{paddingRight:"0%",paddingLedt:"0%"}}>
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

export default Register;
