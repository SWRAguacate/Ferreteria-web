import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import Results from './../search/results';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      someKey: 'someValue'
    };
  }

  render() {
    return ( <div>
      <MenuNav logged={2}></MenuNav>
      <br></br>
      <Results></Results>
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

export default Search;
