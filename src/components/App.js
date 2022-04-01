import React from 'react';
import {Button} from 'reactstrap'

export const App = (props) => (
  <div>
    <h1> {props.title} </h1>
    <label> {props.children} </label>
    <Button color='danger'> Btn rojo </Button>
  </div>
);
