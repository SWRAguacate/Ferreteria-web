import React, { useContext, Component } from 'react';
import MenuNav from './../header/Header';
import PieFooter from './../footer/Footer';
import LeftSide from './../cart/LeftSide';
import RightSide from './../cart/RightSide';
import CartUser from './../cart/Cart';
import Placeholder from '../cart/placeholder';
import { Context } from '../../context/Context';
function Cart() {
  const { dispatch, isFetching } = useContext(Context);
  const { user } = useContext(Context);
  return (
    <div>
      <MenuNav type="logged"></MenuNav>
      <br></br>
      <br></br>
      <div className="container">
        <CartUser></CartUser>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <PieFooter></PieFooter>
    </div>
  );
}

export default Cart;
