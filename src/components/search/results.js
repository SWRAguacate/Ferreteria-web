import React from 'react';
import './results.css';
import productImage from './img/placeholder.jpg';
import ProductA from './productA';
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
        <div id="tp" className="row">
          <h3>Resultados:</h3>
        </div>
        <br></br>
        <div className="container">
          {this.state.products.map((product, index) => (
              <div key={index}>
                <ProductA
                  key={index}
                  id={product._id}
                  callbackMessage={() => this.props.callbackMessage}
                  status={this.state.status}
                  data={product}
                ></ProductA>
              </div>
            ))}

        </div>
      </div>
    );
  }

  componentDidMount() {
    fetch('query para traer todos los productos de busqueda')
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
      });
  }
}

export default Results;
