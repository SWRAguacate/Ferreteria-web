import React, { useContext, useState, useEffect, useCallback } from 'react';
import './ViewProductLeft.css';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  img,
  Button,
  Table,
} from 'reactstrap';
import licuadora from './licuadora.jpg';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { Context } from '../../context/Context';

function ViewProductLeft() {
  const { productId } = useParams();

  const initialValues = { cantidad: ""};
  const [formValues, setFormvalues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [product, setProduct] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { dispatch, isFetching } = useContext(Context);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormvalues({...formValues, [name]:value});
  };


  const fetchProduct = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `http://localhost:3000/api/v1/products/${productId}`
      );
      if (!response.ok) {
        throw new Error('An error has ocurred');
      }

      const data = await response.json();
      const DATAARRAY = data.Data;
      const arrayD = [];
      arrayD.push(DATAARRAY);
      const remapedP = arrayD.map((p) => {
        return {
          id: p._id,
          nombre: p.nombre,
          descripcion: p.descripcion,
          imagen: p.imagen,
          precio: p.precio,
          color: p.color,
          modelo: p.modelo,
          tipo: p.tipo,
          marca: p.tipo,
          material: p.material,
          garantia: p.garantia,
          capacidad: p.capacidad_tamanio,
          categoria: p.categoria,
        };
      });
      setProduct(remapedP);
      //console.log(remapedCart);
    } catch (error) {
      console.log(error);
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  useEffect(() => {
  }, [product]);


  const submitHandler = async(e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
      setIsSubmit(true);
      const obj = {id_usuario:user.Data._id,
        id_producto:product[0]?.id,
        nombre:product[0]?.nombre,
        descripcion:product[0]?.descripcion,
        imagen:product[0]?.imagen,
        precio:parseFloat(product[0]?.precio),
        cantidad:parseInt(formValues.cantidad),
        total_producto:parseFloat(product[0]?.precio*formValues.cantidad)}
      console.log(obj);
      const res = await fetch("http://localhost:3000/api/v1/carts", {
        method: "post",
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
          "x-access-token": "token-value",
        },
        body: JSON.stringify(obj),
      });
      if (!res.ok) {
        console.log("Salio mal");

      }
      else{
        navigate("/cart");
      }
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
    }
  },[formErrors])

  const validate = (e) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if(parseInt(formValues.cantidad) < 0){
      errors.nombre = "Se requiere una cantidad positiva."
    }
    return errors;
  }

  return (
    <Container>
      <Row xs="3" style={{ height: '50%' }}>
        <Col className="block-example border border-0 border-dark container col-sm-5">
          <img style={{ width: '100%' }} src={product[0]?.imagen}></img>
        </Col>
        <Col className="block-example border border-0 border-dark container ">
          <a style={{ fontWeight: 'bold', fontSize: '3em' }}>
            {product[0]?.nombre}
          </a>
          <br></br>
          <a style={{ fontSize: '1.0em' }} hidden>#{product[0]?.id} </a>
          <a style={{ fontSize: '1.0em' }}>Precio por unidad: </a>
          <br></br>
          <br></br>
          <a style={{ fontSize: '2.4em', color: 'red', fontWeight: 'bold' }}>
            ${product[0]?.precio}
          </a>

          <div
            class="input-group"
            style={{
              width: '40%',
            }}
          ></div>
        </Col>
        {
        user ? (
        <Col className="block-example border border-0 border-dark container col-sm-2">
          <Form onSubmit={submitHandler}>
            <span for="cantidad" fontWeight="700"> Unidades: </span>
            <Input
            id='cantidad'
            name='cantidad'
              class="row justify-content-end"
              type="number"
              style={{
                textAlign: 'center',
                width: '100%',
                marginRight: '2%',
                alignContent: 'flex-end',
                borderRadius: '4px',
              }}
              value={formValues.cantidad}
              onChange = {handleChange}
            />
            <p style={{color:'white'}}>{formErrors.cantidad}</p>
            <span class="input-group-btn">
              <Button style={{ width: '100%', marginTop: '5px' }} className="btn-warning" type="submit">
                Agregar al Carrito
              </Button>
            </span>
          </Form>
        </Col>) : null
      }
      </Row>
      <br></br>
      <br></br>

      <div>
        <h2 style={{ fontWeight: 'bold', fontSize: '1.5em', marginLeft: '1%' }}>
          Especificaciones
        </h2>

        <Table bordered responsive striped>
          <thead id="TablaVproduct">
            <tr>
              <th scope="row">Color</th>
              {product[0]?.color == null && <td>N/A</td>}
              {product[0]?.color != null && <td>{product[0]?.color}</td>}
              <th scope="row">Material</th>
              {product[0]?.material == null && <td>N/A</td>}
              {product[0]?.material != null && <td>{product[0]?.material}</td>}
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Modelo</th>
              {product[0]?.modelo == null && <td>N/A</td>}
              {product[0]?.modelo != null && <td>{product[0]?.modelo}</td>}
              <th scope="row">Tipo</th>
              {product[0]?.tipo == null && <td>N/A</td>}
              {product[0]?.tipo != null && <td>{product[0]?.tipo}</td>}
            </tr>
            <tr>
              <th scope="row">Marca</th>
              {product[0]?.marca == null && <td>N/A</td>}
              {product[0]?.marca != null && <td>{product[0]?.marca}</td>}
              <th scope="row">Garantia</th>
              {product[0]?.garantia == null && <td>N/A</td>}
              {product[0]?.garantia != null && <td>{product[0]?.garantia}</td>}
            </tr>
            <tr>
              <th scope="row">Capacidad/Tamano</th>
              {product[0]?.capacidad == null && <td>N/A</td>}
              {product[0]?.capacidad != null &&
                <td>{product[0]?.capacidad}</td>
              }
              <th scope="row">Categoria</th>
              {product[0]?.categoria == null && <td>N/A</td>}
              {product[0]?.categoria != null && (
                <td>{product[0]?.categoria}</td>
              )}
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default ViewProductLeft;
