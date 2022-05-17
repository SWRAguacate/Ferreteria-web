import React from 'react';

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
} from 'reactstrap';
import ProductA from './productA';
import Placeholder from './placeholder';
import cartImage from './img/placeholder.jpg';
import { Link } from 'react-router-dom';
//import from 'react-bootstrap';

const TYPESHOW = "show";
const TYPEEMPTY = "empty";

class LeftSide extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [],
      type: props.type,
      prevType: TYPESHOW,
    };
  }

  render() {
    const isShow = this.state.type === TYPESHOW;
    const isEmpty= this.state.type === TYPEEMPTY;

    return isShow? (
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
        {this.state.products.map((product, index) => (
            <div key={index}>
              <ProductA
                key={index}
                id={product._id}
                callbackMessage={() => this.props.callbackMessage}
                status={this.state.status}
                type = "show"
              ></ProductA>
            </div>
          ))}
      </div>
    ):isEmpty ?(
      <div>
        <div className="col-sm-5">
        <h2>Carrito de compras</h2>
        </div>
        <br></br>
        <br></br>
        <Placeholder></Placeholder>
      </div>
    ):(<div></div>);
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/carts?id=${this.props.id_u}`)
      .then((response) => response.json())
      .then((respJson) => {
        if (respJson.success) {
          this.setState({
            state: true,
            products: respJson.Data,
          });
          this.forceUpdate();
        }
      });
  }
}

export default LeftSide;
