import React from 'react';
import './Leftside.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const LeftSide = () => (
  <div>
    <br></br>

    <Form style={{ width: '80%', marginLeft: '10%', marginTop: '10%' }}>
      <h2 style={{ color: 'white' }}>Registro de usuario</h2>
      <br></br>
      <br></br>

      <FormGroup>
        <Label for="username" style={{ color: 'white' }}>
          Nombre:
        </Label>
        <Input id="id_name" name="username" type="text" />
      </FormGroup>

      <FormGroup>
        <Label for="email" style={{ color: 'white' }}>
          Correo electronico:
        </Label>
        <Input id="id_email" name="email" type="email" />
      </FormGroup>

      <FormGroup>
        <Label for="password" style={{ color: 'white' }}>
          Contraseña:
        </Label>
        <Input id="id_password" name="password" type="password" />
      </FormGroup>

      <FormGroup>
        <Label for="confirm" style={{ color: 'white' }}>
          Confirmar contraseña:
        </Label>
        <Input id="id_passwordc" name="confirm" type="password" />
      </FormGroup>
      <br></br>
      <div class="d-grid">
        <Button type="submit" color="success">
          Registrar
        </Button>
      </div>
      <br></br>
      <div class="my-3 text-white">
        <span>
          ¿Ya tienes una cuenta? <a href="../src/register.html">Inicia sesion aquí</a>
        </span>
      </div>

      <br></br>
    </Form>
  </div>
);
