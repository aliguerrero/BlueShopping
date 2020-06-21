//dependencias
import React from 'react';
import {BrowserRouter as Router, Link} from'react-router-dom';
import propTypes  from 'prop-types';
//estilos
import './css/App.css';
//imagenes
import logo1 from './img/logo_oficial.png';
//componentes
import Contenido from './Contenido';


class App extends React.Component {
  static propTypes = {
    children: propTypes.object.isRequired
  }
  render() {
    const {children} = this.props;
    return (
      <div className="App">
      <div className="nav"> 
        <div className="log">
          <Link to="/">
            <img src={logo1} className="logo" alt="logo" width="45px" height="45px" />
            lue Shopping
          </Link>
        </div>
        <div className="btns">
            <ul className="nav-container list">
               <li><Link to="">Tienda</Link></li>
               <li><Link to="/Registro">Registrate</Link></li>
               <li><Link to="/login">Iniciar sesion</Link></li>
             </ul>
        </div>
      </div>
     <Contenido body={children} />  
    </div>
    );
  }
}

export default App;
