import React from 'react';
import './Inventario.css';
import { Table, nav, input, Button } from 'reactstrap';

const TYPESHOW = 'show';
const TYPEEDIT = 'edit';
const TYPEEMPTY = 'empty';

class Inventario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [],
      //type: this.props.type,
      type: TYPEEDIT,
    };
  }

  updateProduct() {
    const { nombre, precio, imagen, descripcion, color, modelo, tipo, marca, material, garantia, capacidad_tamanio, categoria, cantidad } = this.fakeData || {};
    return fetch(`http://localhost:3000/api/v1/products/${this.props.id}`, {
      method: "PATCH",
      body: JSON.stringify({
        nombre, precio, imagen, descripcion, color, modelo, tipo, marca, material, garantia, capacidad_tamanio, categoria, cantidad
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  }

  notifyParent() {

  }

  async saveBDButton(type, prevType) {
    const response = await this.updateProduct();

    const respJson = await response.json();
    if(respJson.success){
      this.notifyParent();
      this.setState({
        type,
        prevType,
        fakeData: this.fakeData,
      })
    }
  }

  editButton(type, prevType) {
    this.setState({
      type,
      prevType,
      fakeData: null
    });
  }

  render() {
    const isShow = this.state.type === 'show';
    const isEmpty = this.state.type === 'empty';
    const isEdit = this.state.type === 'edit';

    const button = isEdit ?
    (<Button style={{ width: '6em', margin: '5px' }} size="sm" color="warning" onClick={() => this.saveBDButton(TYPESHOW, TYPEEDIT)}> Editar </Button>) :
    isShow ?
    (<Button style={{ width: '6em', margin: '5px' }} size="sm" color="primary" onClick={() => this.editButton(TYPEEDIT, TYPESHOW)}> Guardar </Button>) :
    (<div></div>);

    return(
    <div class="container" responsive>
      <Table
        responsive
        striped
        hover
        bordered
        style={{
          width: '100%',
          color: 'orangered',
          alignItems: 'center',
        }}
      >
        <thead>
          <tr id="TablaIventario">
            <th class="text-center">Id producto</th>
            <th class="text-center">Nombre producto</th>
            <th class="text-center">Existencia</th>
            <th class="text-center">Acciones</th>
          </tr>
        </thead>
        <tbody>
            { this.state.products.map((product, index) => (
              <tr>
              <td>{product._id}</td>
              <td>{product.nombre}</td>
              <td>{product.cantidad || 0}</td>
              <td>
              {button}
              <Button
                style={{ width: '6em', margin: '5px' }}
                size="sm"
                color="danger"
              >
                Eliminar{' '}
              </Button>
            </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <nav class="">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a class="page-link">Previous</a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              1
            </a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="#">
              2
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              3
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
    );
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/products`)
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

export default Inventario;
