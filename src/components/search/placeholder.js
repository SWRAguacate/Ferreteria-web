import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from "styled-components";


const HeaderPlaceHolder = styled.h2`
color: white;
`;
const DivPlaceHolder = styled.div`
width: 80%;
vertical-align:middle;
`;

class Placeholder extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
    };
  }

  render() {
    return (
      <div>
        <DivPlaceHolder>
          <br></br>
          <br></br>
          <br></br>
          <HeaderPlaceHolder>Sin Resultados</HeaderPlaceHolder>
          <br></br>
          <br></br>
          <br></br>
        </DivPlaceHolder>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default Placeholder;
