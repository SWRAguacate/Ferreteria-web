import ReactDOM from 'react-dom'
import React,{useContext, useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Index from './components/pages/index';
import Cart from './components/pages/cart';
import Login from './components/pages/login';
import Register from './components/pages/register';
import IndexSP from './components/pages/indexSP';
import Inventory from './components/pages/inventory';
import Orders from './components/pages/orders';
import Products from './components/pages/products';
import Search from './components/pages/search';
import ViewProduct from './components/pages/viewProduct';

import { Context } from './context/Context';

function App() {
  const {dispatch,isFetching} = useContext(Context);
  const { user } = useContext(Context);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Index />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route exact path="/cart" element={user? <Cart />: <Login />}></Route>
          <Route exact path="/indexSP" element={user? <IndexSP />: <Login />}></Route>
          <Route exact path="/inventory" element={user? <Inventory />: <Login />}></Route>
          <Route exact path="/orders" element={user?<Orders />: <Login />}></Route>
          <Route exact path="/products" element={user?<Products />: <Login />}></Route>
          <Route exact path="/search" element={<Search />}></Route>
          <Route exact path="/viewProduct/:productId" element={<ViewProduct />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
