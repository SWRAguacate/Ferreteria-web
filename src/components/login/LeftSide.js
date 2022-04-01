import React from 'react';
import './Leftside.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';

export const LeftSide = () => (
  <div>
    <br></br>

    <Form style={{ width: '80%', marginLeft: '10%', marginTop: '10%' }}>
      <h2 style={{ color: 'white' }}>Inicia Sesión</h2>
      <br></br>
      <br></br>

      <FormGroup>
        <Label for="email" style={{ color: 'white' }}>
          Correo electronico:
        </Label>
        <Input id="id_email" name="email" type="email" />
      </FormGroup>
      <FormGroup>
        <Label for="contrasenia" style={{ color: 'white' }}>
          Contraseña:
        </Label>
        <Input id="id_password" name="password" type="password" />
      </FormGroup>
      <br></br>
      <div class="d-grid">
        <Button type="submit" color="success">
          Iniciar Sesión
        </Button>
      </div>
      <br></br>
      <div class="my-3 text-white">
        <span>
          ¿No tienes cuenta? <a href="../src/register.html">Regístrate aquí</a>
        </span>
      </div>

      <br></br>
    </Form>
  </div>
);
