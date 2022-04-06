import React from 'react';
import './products.css';
import productImage from './img/placeholder.jpg';
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
import { Link } from 'react-router-dom';

class ProductO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      someKey: 'someValue',
      title: this.props.title,
      category: this.props.category,
      description: this.props.description,
      productId: this.props.productId
    };
  }

  render() {
    return (
      <Card>
        <CardImg alt="Card image cap" src={productImage} top width="100%" />
        <CardBody>
          <CardTitle tag="h5">{this.props.title}</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {this.state.category}
          </CardSubtitle>
          <CardText>
            {this.state.description}
          </CardText>
          <Link to="/viewProduct">
          <Button color="warning">Ver producto</Button>
            </Link>

        </CardBody>
      </Card>
    );
  }

  componentDidMount() {
    this.setState({
      someKey: 'otherValue',
    });
  }
}

export default ProductO;
