import React, { useContext, useState, useEffect, useCallback } from 'react';
import {
  Form,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import ProductA from './productA';
import Placeholder from './placeholder';
import cartImage from './img/placeholder.jpg';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './Rightside.css';
import ProductR from './productR';
import { func } from 'joi';

function CartUser() {
  const [cart, setCart] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch, isFetching } = useContext(Context);
  const { user } = useContext(Context);

  const fetchCart = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/carts?id=${user.Data._id}`
      );
      if (!response.ok) {
        throw new Error('An error has ocurred');
      }

      const data = await response.json();
      const DATAARRAY = data.Data;
      const remapedCart = DATAARRAY.map((cartu) => {
        return {
          id: cartu._id,
          id_producto: cartu.id_producto,
          nombre: cartu.nombre,
          descripcion: cartu.descripcion,
          imagen: cartu.imagen,
          precio: cartu.precio,
          cantidad: cartu.cantidad,
          total_producto: cartu.total_producto,
        };
      });
      console.log(remapedCart);
      setCart(remapedCart);
      //console.log(remapedCart);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setIsLoading(false);
  }, []);



  const removeElementFromStateArray = (hookArray, hookSetter, idelement) => {
    let array = [...hookArray];
    let indexItemDelete = null;
    array.forEach( (a, index ) => {
    if(a.id == idelement){
      indexItemDelete = index;
    }
    });
    if(indexItemDelete!=null) {
    array.splice(indexItemDelete, 1);
    hookSetter(array);

    //codigo para borrar de la bd
    }
  }

  const removeProduct =(idCart)=>{
    removeElementFromStateArray(cart,setCart,idCart);
  }

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    setCart([]);
    console.log(cart);
  }, []);

  const handleSubmit = async (e) => {
    const res = await fetch(`http://localhost:3000/api/v1/carts/${user.Data._id}`, {
      method: 'del',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'token-value',
      },
      body: JSON.stringify(obj),
    });
    if (!res.ok) {
      console.log('Salio mal');
    } else {
      navigate('/');
    }
  };

  return (
    <div className="row">
      <div className="col-sm-8" LEFTSIDE>
        <div>
          <div className="row">
            <div className="col-sm-5">
              <h2>Carrito de compras</h2>
            </div>
            <div className="col-sm-3">
              <Link to="/">
                <Button color="warning">Seguir comprando</Button>
              </Link>
            </div>
          </div>
          {cart.map((p) => (
            <ProductA key={p.id} data={p} remove={removeProduct}></ProductA>
          ))}
        </div>
      </div>

      <div className="col-sm-4" RIGHTSIDE>
        <div id="rightside">
          <br></br>
          <br></br>
          <div
            className="container bg-dark rounded shadow"
            style={{ width: '80%', verticalAlign: 'middle' }}
          >
            <h3 style={{ color: 'white', verticalAlign: 'center' }}>
              Total de compra:
            </h3>

            <hr style={{ color: 'white' }}></hr>
            <br></br>
            {cart.map((p) => (
              <ProductR key={p.id} data={p}></ProductR>
            ))}

            <br></br>

            <hr style={{ color: 'white' }}></hr>
            <br></br>
            <h5 style={{ color: 'white' }}>Total:</h5>
            <br></br>

            <Form>
              <div className="row">
                <div className="col">
                  <Button type="submit" color="warning">
                    Pagar con Paypal
                  </Button>
                </div>
                <div className="col">
                  <Button type="submit" color="info">
                    Pagar con Tarjeta
                  </Button>
                </div>
              </div>
            </Form>

            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
