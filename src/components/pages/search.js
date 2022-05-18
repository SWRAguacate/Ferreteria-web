import React from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import Results from './../search/results';

import Placeholder from '../search/placeholder';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEDELETE = 'delete';
class Search extends React.Component {
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
    return (
      <div>
        <MenuNav logged={2}></MenuNav>
        <br></br>
        {isShow ? (
          <div>
            <Results></Results>
          </div>
        ) : (
          isEdit(<Placeholder></Placeholder>)
        )}
        <br></br>
        <br></br>
        <br></br>
        <PieFooter></PieFooter>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default Search;
