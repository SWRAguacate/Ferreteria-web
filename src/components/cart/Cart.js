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

  let ph = <Placeholder></Placeholder>;
  let btn = (
    <div className="row">
      <div className="col">
        <Button type="submit" color="info">
          Pagar con Tarjeta
        </Button>
      </div>
    </div>
  );

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

  const removeElementFromStateArray = async (
    hookArray,
    hookSetter,
    idelement
  ) => {
    let array = [...hookArray];
    let indexItemDelete = null;
    array.forEach((a, index) => {
      if (a.id == idelement) {
        indexItemDelete = index;
      }
    });
    if (indexItemDelete != null) {
      array.splice(indexItemDelete, 1);

      hookSetter(array);

      const res = await fetch(
        `http://localhost:3000/api/v1/carts/delete/product/${idelement}`,
        {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'token-value',
          },
        }
      );
      if (!res.ok) {
        console.log('Salio mal');
      }
    }

    //codigo para borrar de la bd
  };

  const removeProduct = (idCart) => {
    removeElementFromStateArray(cart, setCart, idCart);
  };

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  useEffect(() => {
    if (cart.length == 0) {
      ph = <Placeholder></Placeholder>;
      btn = <div></div>;
    }
    console.log(cart);
  }, [cart]);

  useEffect(() => {
    setCart([]);
    console.log(cart);
  }, []);

  const getTotal = () => {
    if (cart.length > 0) {
      var total = 0;
      cart.forEach((a, index) => {
        total = total + a.total_producto;
      });

      return total;
    } else {
      return 0;
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let productos = [];
    var total = 0;

    var today = new Date();

    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

    cart.forEach((a, index) => {
      total = parseInt(total + a.total_producto);
      let producto = {
        id_producto: a.id_producto,
        cantidad: a.cantidad,
        precio: parseFloat(a.precio),
      };
      productos.push(producto);
    });
    const obj = {
      id_usuario: user.Data._id,
      nombre: user.Data.nombre,
      estatus: 1,
      fecha: date,
      total_pedido: total,
      codigo: 123321,
      productos: productos,
    };
    console.log(obj);
    submitDB(obj);
    /*
    }*/
  };

  const submitDB = async (obj) => {
    const res = await fetch(`http://localhost:3000/api/v1/orders`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'token-value',
      },
      body: JSON.stringify(obj),
    });
    if (!res.ok) {
      console.log('Salio mal');
    } else {
      const res2 = await fetch(
        `http://localhost:3000/api/v1/carts/${user.Data._id}`,
        {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
            'x-access-token': 'token-value',
          },
        }
      );
      if (!res2.ok) {
        console.log('Salio mal');
      }
      setCart([]);
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
          {cart.length == 0 && ph}
          {cart.length > 0 &&
            cart.map((p) => (
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
            <h5 style={{ color: 'white' }}>Total: {getTotal()}$</h5>
            <br></br>
            <form onSubmit={submitHandler}>{cart.length > 0 && btn}</form>
            <br></br>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartUser;
