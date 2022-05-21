import React, { useContext, useState, useEffect, useCallback } from 'react';
import './results.css';
import productImage from './img/placeholder.jpg';
import ProductA from './productA';
import { Link } from 'react-router-dom';
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
  Form,
  CardGroup,
  CardImg,
} from 'reactstrap';
import Placeholder from './placeholder';

function Results() {
  const [search, setSearch] = useState([]);
  const [formValues, setFormvalues] = useState(search);
  const [isLoading, setIsLoading] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState(null);

  const initialValues = { nombre: '', precio: '' };

  const searchProducts = useCallback(async () => {});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormvalues({ ...formValues, [name]: value });
  };

  let ph = <Placeholder></Placeholder>;

  const SubmitHandler = async (e) => {
    e.preventDefault();
    const obj = { nombre: formValues.nombre, precio: formValues.precio };
    console.log(obj);
    const res = await fetch('http://localhost:3000/api/v1/products/search', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': 'token-value',
      },
      body: JSON.stringify(obj),
    });
    if (!res.ok) {
      setSearch([]);
      console.log('Salio mal');
    } else {
      const data = await res.json();
      const DATAARRAY = data.Data;
      const remapedSearch = DATAARRAY.map((cartu) => {
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
      console.log(remapedSearch);
      setSearch(remapedSearch);
      console.log(data);
    }
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  return (
    <div>
      <Form
        style={{ width: '80%', marginLeft: '10%' }}
        onSubmit={SubmitHandler}
      >
        <br></br>
        <h4>Filtros:</h4>
        <br></br>
        <FormGroup>
          <Label for="nombre" style={{ color: 'black' }}>
            Nombre:
          </Label>
          <Input
            id="nombre"
            name="nombre"
            type="text"
            value={formValues.nombre}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="precio" style={{ color: 'black' }}>
            Precio:
          </Label>
          <Input
            id="precio"
            name="precio"
            type="text"
            value={formValues.precio}
            onChange={handleChange}
          />
        </FormGroup>
        <div class="d-grid">
          <Button type="submit" color="success">
            Buscar
          </Button>
        </div>
        <br></br>
        <h4>Resultados:</h4>

        <br></br>
      </Form>

      <br></br>
      <div className="container">
        {search.length == 0 && ph}
        {search.map((p) => (
          <ProductA key={p.id} data={p}></ProductA>
        ))}
      </div>
    </div>
  );
}

export default Results;
