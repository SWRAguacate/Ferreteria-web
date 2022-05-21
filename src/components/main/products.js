import React, { useContext, useState, useEffect, useCallback } from 'react';
import './products.css';
import productImage from './img/placeholder.jpg';

import ProductA from './productA';
import ProductO from './productO';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  FormGroup,
  Label,
  Input,
  CardGroup,
  CardImg,
} from 'reactstrap';

function Products() {

  const [allP, setAllP] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [saleOne, setSaleOne] = useState([]);
  const [saleTwo, setSaleTwo] = useState([]);

  const One = useCallback(async () =>{
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/cheapest`
      );
      if (!response.ok) {
        throw new Error('An error has ocurred');
      }

      const data = await response.json();
      const DATAARRAY = data.Data;
      const remapedSaleOne= DATAARRAY.map((aP) => {
        return {
          id: aP._id,
          nombre: aP.nombre,
          descripcion: aP.descripcion,
          imagen: aP.imagen,
          precio: aP.precio,
        };
      });
      console.log(remapedSaleOne)
      setSaleOne(remapedSaleOne);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  const Two = useCallback(async () =>{
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/lowStock`
      );
      if (!response.ok) {
        throw new Error('An error has ocurred');
      }

      const data = await response.json();
      const DATAARRAY = data.Data;
      const remapedSaleTwo= DATAARRAY.map((aP) => {
        return {
          id: aP._id,
          nombre: aP.nombre,
          descripcion: aP.descripcion,
          imagen: aP.imagen,
          precio: aP.precio,
        };
      });

      setSaleTwo(remapedSaleTwo);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  const allProducts = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/`
      );
      if (!response.ok) {
        throw new Error('An error has ocurred');
      }

      const data = await response.json();
      const DATAARRAY = data.Data;
      const remapedAllP = DATAARRAY.map((aP) => {
        return {
          id: aP._id,
          nombre: aP.nombre,
          descripcion: aP.descripcion,
          imagen: aP.imagen,
          precio: aP.precio,
        };
      });
      setAllP(remapedAllP);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    allProducts();
  }, [allProducts]);

  useEffect(() => {
    One();
  }, [One]);


  useEffect(() => {
    Two();
  }, [Two]);


  return (
    <div>
      <div id="products">
        <div id="so" className="row">
          <h3>Lo mas barato:</h3>
        </div>
        <br></br>
        <div className="container">
          <CardGroup>
            {
              saleOne.map((p) => (
                <ProductO key={p.id} data={p}></ProductO>
              ))
            }
          </CardGroup>
        </div>
        <br></br>
        <div id="lm" className="row">
          <h3>A punto de agotarse:</h3>
        </div>
        <br></br>
        <div className="container">
          <CardGroup>
            {
              saleTwo.map((p) => (
                <ProductO key={p.id} data={p}></ProductO>
              ))
            }
          </CardGroup>
        </div>
        <br></br>
        <div id="tp" className="row">
          <h3>Todos los productos:</h3>
        </div>
        <br></br>
      </div>
      <div className="container">
        {allP.map((p) => (
              <ProductA key={p.id} data={p}></ProductA>
            ))

        }

      </div>
    </div>
  );

}

export default Products;
