import React from 'react';
import './Inventario.css';
import { Table, nav, input, Button } from 'reactstrap';

class Inventario extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      products: [],
      type: this.props.type,
    };
  }
  render() {
    const isShow = this.state.type === 'show';
    const isEmpty = this.state.type === 'empty';

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
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <Button
                style={{ width: '6em', margin: '5px' }}
                size="sm"
                color="danger"
              >
                Baja{' '}
              </Button>
              <Button
                style={{ width: '6em', margin: '5px' }}
                size="sm"
                color="warning"
              >
                Cambio
              </Button>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td justify-content-center class="mh-100">
              <form
                class="container row align-items-center"
                id="form"
                method="Post"
              >
                <input
                  style={{}}
                  type="number"
                  className="block-example border border-0 border-dark container"
                />
              </form>
            </td>
          </tr>
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
    fetch(`http://localhost:3000/api/v1/inventories`)
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
