import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from "./../login/LeftSide";
import RightSide from "./../login/RightSide";
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return (<div>
      <MenuNav  type="unlogged"></MenuNav>
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

export default Login;
