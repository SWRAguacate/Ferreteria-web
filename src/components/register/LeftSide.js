import React,{useContext, useState,useEffect } from 'react';

import './Leftside.css';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Link,useNavigate} from 'react-router-dom';
import { valid } from 'joi';
import { values } from 'regenerator-runtime';
import {Context} from '../../context/Context'

function LeftSide( ) {

    const {dispatch,isFetching} = useContext(Context);

    const initialValues = { correo: "", contrasenia: "", nombre: "",confirm:""};
    const [formValues, setFormvalues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
      const {name, value} = e.target;
      setFormvalues({...formValues, [name]:value});
    };


    const handleSubmit = async(e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      const obj = {nombre:formValues.nombre,correo:formValues.correo,contrasenia:formValues.contrasenia}
      const res = await fetch("http://localhost:3000/api/v1/users/", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          "x-access-token": "token-value",
        },
        body: JSON.stringify(obj),
      });
      if (!res.ok) {
        console.log("Salio mal");

      }else{
        const data = await res.json();
        dispatch({type:"LOGIN_SUCCESS",payload:data})
        navigate('/');
        console.log(res)
      }


      //
    };

    useEffect(()=>{
      console.log(formErrors);
      if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues);
      }
    },[formErrors])

    const validate = (e) => {
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

      if(!formValues.nombre){
        errors.nombre = "Se requiere un nombre."
      }
      else if(formValues.nombre < 10){
        errors.nombre = "Se requiere un nombre de 10 caracteres o mas."
      }
      if(!formValues.correo){
        errors.correo = "Se requiere un correo."
      }else if(regex.test(formValues.correo)){
        errors.correo = "Este no es un correo valido."
      }
      if(!formValues.contrasenia){
        errors.contrasenia = "Se requiere una contraseña."
      }
      if(!formValues.confirm){
        errors.confirm = "Se requiere confirmar la contraseña."
      }
      if(formValues.contrasenia != formValues.cpass){
        errors.confirm = "La confirmacion de la contraseña y la contraseña tienen que ser la misma."
      }
      return errors;
    }

    //No te escuchas, disc

    return (
      <div>
        <br></br>
        {Object.keys(formErrors).length === 0 && isSubmit}
        <Form style={{ width: '80%', marginLeft: '10%', marginTop: '10%' }} onSubmit={handleSubmit}>
          <h2 style={{ color: 'white' }}>Registro de usuario</h2>
          <br></br>
          <br></br>

          <FormGroup>
            <Label for="nombre" style={{ color: 'white' }}>
              Nombre:
            </Label>
            <Input
              id="nombre"
              name="nombre"
              type="text"
              value={formValues.nombre}
              onChange = {handleChange}
            />
            <p style={{color:'white'}}>{formErrors.nombre}</p>
          </FormGroup>

          <FormGroup>
            <Label for="correo" style={{ color: 'white' }}>
              Correo electronico:
            </Label>
            <Input
              id="correo"
              name="correo"
              type="email"
              value={formValues.correo}
              onChange = {handleChange}
            />
             <p style={{color:'white'}}>{formErrors.correo}</p>
          </FormGroup>

          <FormGroup>
            <Label for="contrasenia" style={{ color: 'white' }}>
              Contraseña:
            </Label>
            <Input
              id="contrasenia"
              name="contrasenia"
              type="password"
              value={formValues.contrasenia}
              onChange = {handleChange}
            />
             <p style={{color:'white'}}>{formErrors.contrasenia}</p>
          </FormGroup>

          <FormGroup>
            <Label for="confirm" style={{ color: 'white' }}>
              Confirmar contraseña:
            </Label>
            <Input
              id="confirm"
              name="confirm"
              type="password"
              value={formValues.confirm}
              onChange = {handleChange}
            />
             <p style={{color:'white'}}>{formErrors.confirm}</p>
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
              ¿Ya tienes una cuenta?{' '}
              <Link to={'/login'} className="nav-link">
                Inicia sesion
              </Link>
            </span>
          </div>

          <br></br>
        </Form>
      </div>
    );
  }



export default LeftSide;
