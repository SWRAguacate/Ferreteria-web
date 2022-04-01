import React from 'react';
import { Button } from 'reactstrap'

export const App = (props) => (
  <div>
    <h1> {props.title} </h1>
    <label> {props.children} </label>
    <Button color='danger'> Btn rojo </Button>
  </div>
);

//export function App(props) {
//  return (
//    <div>
//      <h1> {props.title} </h1>
//      <label> {props.children} </label>
//    </div>
//  );
//};

//class PureComponent extends React.PureComponent {
//  render() {
//    return <p>{this.state.someKey}</p>;
//  }
//}

//export default PureComponent;

//import React from 'react';

//class App extends React.Component {
//  constructor() {
//    super();
//    this.state = {
//      someKey: 'someValue'
//    };
//  }

//  render() {
//    return <p>{this.state.someKey}</p>;
//  }

//  componentDidMount() {
//    this.setState({
//      someKey: 'otherValue'
//    });
//  }
//}

//export default App;

