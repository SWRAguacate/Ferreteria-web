import React from 'react';
import "./footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

class PieFooter extends React.PureComponent{
  render(){
    return   <div>
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>Desarrolladores:</h4>
            <hr></hr>
            <ul className='list-unstyled'>
              <li>Fernando Moncayo</li>
              <li>Oscar Eduardo</li>
              <li>Valeria Osiris</li>
              <li>Mauricio Espinosa</li>
            </ul>
          </div>
          <div className="col">
            <h4>Repositorio:</h4>
            <hr></hr>
            <ul className='list-unlysted'>
              <li><a class="mt-0 text-white" href="https://github.com/SWRAguacate/Ferreteria-web" target="_blank" >Repositorio del proyecto</a></li>
            </ul>
          </div>
          <div className="col">
            <h4>NOMBRE:</h4>
            <hr></hr>
            <ul>
              <li>Monterrey, Nuevo Leon</li>
              <li> NOMBRE@gmail.com</li>
              <li>8112298194</li>
            </ul>
          </div>
          <div className="col">
            <h4>Redes:</h4>
            <hr></hr>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
        <hr></hr>
        <div className='row'>
        <div className='terms' >
        <p className='col-sm'>
          &copy;{new Date().getFullYear()} NOMBRE | DERECHOS RESERVADOS | TERMINOS DE SERVICIO
        </p>
        </div>
      </div>

      </div>

    </div>

    </div>;
  }
}

export default PieFooter;
