import React from 'react';
import './css/categoria.css';
import tecno from './icons/tecno.ico';
import belleza from './icons/belleza.ico';
import constru from './icons/construccion.ico';
import deporte from './icons/deporte.ico';
import herra from './icons/herramienta.ico';
import hogar from './icons/hogar.ico';
import moda from './icons/moda.ico';
import oficina from './icons/oficina.ico'; 

class Categoria extends React.Component {
  render() {
    return (
      <div  className="container">
      	<h1 className="text-center">Categoria</h1>

      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={tecno} className="img" alt="" />
      			<div className="text">Tecnología</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={oficina} className="img" alt="" />
      			<div className="text">Oficina</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
	      		<img src={hogar} className="img" alt="" />
      			<div className="text">Hogar</div>
      		</a>

      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={herra} className="img" alt="" />
      			<div className="text">Herramientas</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={constru} className="img" alt="" />
      			<div className="text">Contrucción</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={moda} className="img" alt="" />
      			<div className="text">Moda</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={belleza} className="img" alt="" />
      			<div className="text">Belleza</div>
      		</a>
      		
      	</div>
      	<div className="containeri">
      		<a href="..." className="div-img">
      			<img src={deporte} className="img" alt="" />
      			<div className="text">Deporte</div>
      		</a>
      		
      	</div>
      </div>
    );
  }
}
export default Categoria;