//depencencias
import React from 'react';
//estilos
import './css/registro.css';

class Registro extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {email: '', password: '',nombre: '',apellido: '',id: 'V', cedula: ''};

	    this.handleChange = this.handleChange.bind(this)
	    this.handleClick = this.handleClick.bind(this);
	}

	handleChange (e) {
	    const name = e.target.name;
	    const value = e.target.value;
	    this.setState({
	      [name]: value
	    })
	};
	handleClick(e) {
	    e.preventDefault();
	    console.log('E-mail: '+this.state.email);
	    console.log('clave: '+this.state.password);
	    console.log('Nombre: '+this.state.nombre+' '+this.state.apellido);
	    console.log('cedula: '+this.state.id+this.state.cedula);
	}
  render() {
    return (
    	<div className="regis">

    		<form className="formu">

    			<h2>Registro nuevo usuario</h2>
			  <div className="form-row">
			    <div className="form-group col-md-6">
			      <label htmlFor="inputEmail4">Correo electronico</label>
			      <input name="email" type="email" className="form-control" id="inputEmail4"  required  value={this.state.email} onChange={this.handleChange}/>
			    </div>
			    <div className="form-group col-md-6">
			      <label htmlFor="inputPassword4">Contraseña</label>
			      <input name="password" type="password" className="form-control" id="inputPassword4"  required  value={this.state.password} onChange={this.handleChange}/>
			    </div>
			  </div>
			  <div className="form-group">
			    <label htmlFor="inputAddress">Nombre</label>
			    <input name="nombre" type="text" className="form-control" id="inputAddress" placeholder="Ingresa tu Nombre"  required  value={this.state.nombre} onChange={this.handleChange}/>
			  </div>
			  <div className="form-group">
			    <label htmlFor="inputAddress2">Apellido</label>
			    <input name="apellido" type="text" className="form-control" id="inputAddress2" placeholder="Ingresa tu Apellido"  required  value={this.state.apellido} onChange={this.handleChange}/>
			  </div>
			  <div className="form-row">
			    <div className="form-group col-md-3">
			      <label htmlFor="inputState">#</label>
			      <select name="id" id="inputState" className="form-control" required  value={this.state.id} onChange={this.handleChange}>
			        <option value="V">V</option>
			        <option value="E">E</option>
			      </select>
			    </div>
			    <div className="form-group col-md-9">
			      <label htmlFor="inputCity">Identificacion</label>
			      <input name="cedula" type="number" className="form-control" id="inputCity"  required  value={this.state.cedula} onChange={this.handleChange}/>
			    </div>
			   
			  </div>
			  <div className="form-group">
			    <div className="form-check">
			      <input className="form-check-input" type="checkbox" id="gridCheck" />
			      <label className="form-check-label" htmlFor="gridCheck">
			        Acepto los <a href="...">terminos y condiciones</a>.
			      </label>
			    </div>
			  </div>
			  <button className="btn btn-primary" onClick={this.handleClick}>Registrar</button>
			</form>
    	</div>
    );
  }
}
export default Registro;