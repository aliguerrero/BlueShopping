import React from 'react';
import './css/Footer.css';
import logo   from './img/b.png';
import redes1 from './icons/redes1.ico';
import redes2 from './icons/redes2.ico';
import redes3 from './icons/redes3.ico';
import redes4 from './icons/redes4.ico'; 

class Footer extends React.Component{
	render(){
		return(
			<div className="container-f">
				
				<div className="box-f2">
					
					<h2>Contactanos</h2>
					<ul>
						<li>blueshopping@gmail.com</li>
						<li>(+58) 412 444 5467</li>
						<li><a href="...">www.blueshopping.com</a></li>
					</ul>
					<ul className="lista-red">
						<li><a href="..."><img src={redes1} alt="" /> Google+</a></li>
						<li><a href="..."><img src={redes2} alt="" /> Facebook</a></li>
						<li><a href="..."><img src={redes3} alt="" /> Instagram</a></li>
						<li><a href="..."><img src={redes4} alt="" /> YouTube</a></li>
					</ul>
				</div>
				<div className="box-f2">
					<h2>Forma parte de nosotros</h2>
					<ul>
						<li><a href="...">Iniciar sesion</a></li>
						<li><a href="...">Registrate</a></li>
						<li><a href="...">acerca de</a></li>
						<li><a href="...">Soporte tecnico</a></li>
					</ul>
				</div>
				<div className="box-f2">
					<h2>Ofertas</h2>
					<ul>
						<li><a href="...">Ofertas especiales</a><p className="text-p">Ofertas especiales para el dia del padre.</p></li>
						<li><a href="...">Descuentos de hasta 50%</a><p className="text-p">Muchos descuentos durante el mes.</p></li>
						<li><a href="...">DayBlue</a><p className="text-p">Las mejores ofertas en muchos articulos.</p></li>
					</ul>
				</div>
				<div className="box-f2 bf">
					<img src={logo} alt="" width="150px" height="150px" />
				</div>
				<div className="box-f3">
					<p className="text-f">©2020 Content is available under these <a href="...">licenses</a>.</p>
				</div>
			</div>
		);
	}
}

export default Footer;