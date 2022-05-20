import React from 'react';
import './Rightside.css';

const TYPESHOW = 'show';
const TYPEDELETE = 'delete';
function ProductR(props) {
  return(<h5 style={{ color: 'white' }}>
    {props.data.nombre} x {props.data.cantidad}
  </h5>);
}

export default ProductR;
