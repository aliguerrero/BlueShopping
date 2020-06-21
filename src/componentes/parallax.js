//dependencias
import React from 'react';
import { Parallax } from 'react-parallax';
//estilos
import "./css/parallax.css"

const MyParallax = () => (
  <div>
    <Parallax bgImage={require('./img/fondo.jpg')} strength={300} >
      <div  className="contenedor">
        <h1>Ofertas</h1>
        <div className="texto">
        Hasta 50% de descuento.
        </div>
        <div className="btn1">
          <a href="...">Ver más</a> 
        </div>
      </div>
      
    <div style={{ height: '150px' }} />
    </Parallax>
  </div>
);
export default MyParallax;