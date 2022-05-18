import React from 'react';
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

class Results extends React.Component {
  constructor() {
    super();
    this.state = {
      status: false,
      products: [],
    };
  }

  render() {
    return (
      <div>


        <Form style={{ width: '80%', marginLeft: '10%' }}>
        <h4>Filtros:</h4>
          <FormGroup>
            <Label for="nombre" style={{ color: 'black' }}>
              Nombre:
            </Label>
            <Input id="id_nombre" name="nombre" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="cat" style={{ color: 'black' }}>
              Categoria:
            </Label>
            <Input id="id_cat" name="cat" type="text" />
          </FormGroup>
          <FormGroup>
            <Label for="precio" style={{ color: 'black' }}>
              Precio:
            </Label>
            <Input id="id_precio" name="precio" type="text" />
          </FormGroup>
          <div class="d-grid">
            <Link to="/">
              <Button type="submit" color="success">
                Buscar
              </Button>
            </Link>
          </div>
          <br></br>
          <h4>Resultados:</h4>

          <br></br>
        </Form>

        <br></br>
        <div className="container">
          {/*this.state.products.map((product, index) => (
            <div key={index}>
              <ProductA
                key={index}
                id={product._id}
                callbackMessage={() => this.props.callbackMessage}
                status={this.state.status}
                data={product}
              ></ProductA>
            </div>
          ))*/}
        </div>
      </div>
    );
  }

  componentDidMount() {
    /*fetch('query para traer todos los productos de busqueda')
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            products: respJson.Data,
          });
          console.log(respJson.Data);
          this.forceUpdate();
        }
      });*/
  }
}

export default Results;
