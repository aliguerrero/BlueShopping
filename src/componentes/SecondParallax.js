import React from 'react';
import { Parallax } from 'react-parallax';

import "./css/parallax.css"

const MyParallax2 = () => (
  <div>
    <Parallax bgImage={require('./img/fondo2.jpg')} strength={300} >
      <div  className="contenedor-p2">
        <h1>Compras felices</h1>
        <div className="texto-p2">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas temporibus voluptatem deserunt aut, est odio error vel, veritatis eius accusamus suscipit
        </div>
      </div>
      
    <div style={{ height: '150px' }} />
    </Parallax>
  </div>
);
export default MyParallax2;