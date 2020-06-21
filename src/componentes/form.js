//dependencias
import React from 'react';
//estilos
import './css/form.css';


class Form extends React.Component {
  render() {
    return (
    	<div className="box">
    		<h1>Contactanos</h1>
    		
    		<form>
    		 <div className="form-group">
			    <label>Nombre</label>
			    <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Escribe tu nombre" />
			  </div>
			  <div className="form-group">
			    <label>Correo electronico</label>
			    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
			  </div>
			  <div className="form-group">
			    <label>Mensaje</label>
			    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
			  </div>
			</form>
			<div className="btn1">
	          <a href="...">Enviar</a> 
	        </div>
    	</div>
    );
  }
}
export default Form;