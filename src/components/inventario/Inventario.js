import React from 'react';
import './Inventario.css';
import { Table, nav, input, Button } from 'reactstrap';

export const Inventario = () => (
  <div class="container" responsive>
    <Button
      color="secondary"
      size="lg"
      block
      style={{ marginTop: '2%', marginBottom: '2%' }}
    >
      Agregar existencias
    </Button>

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
          <th class="text-center">Agregar</th>
        </tr>
      </thead>
      <tbody>
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

    <nav class="fixed-bottom">
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
