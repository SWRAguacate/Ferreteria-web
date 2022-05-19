import React from 'react';
import './Orders.css';
import { Table } from 'reactstrap';

export const Pedidos = () => (
  <div class="container">
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
        <tr>
          <th class="text-center">No.pedido</th>
          <th class="text-center">Nombre cliente</th>
          <th class="text-center">ID cliente</th>
          <th class="text-center">Estatus</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
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
