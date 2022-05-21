import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export class InventoryPlaceHolder extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue',
    };
  }

  render() {
    return (
      <div>
        <div
          className="container bg-dark rounded shadow"
        >
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
            <div className="col" style={{  verticalAlign: 'middle' }}>
              <br></br>
              <br></br>
              <h3 style={{ color: 'white', verticalAlign: 'middle' }}>
                Sin productos disponibles
              </h3>
              <br></br>
              <br></br>
            </div>
          </div>

          <br></br>
          <br></br>
          <br></br>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}
