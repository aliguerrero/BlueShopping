import React from 'react';
import './css/login.css';
import B from './img/b.png';

class Login extends React.Component {
	constructor(props) {
	    super(props);
	    this.state = {email: '', password: ''};

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
	}

  render() {
    return (
    	<>
		    <div className="fondo">
		    	<form className=" login-f" >
				  <div className="text-center mb-4">
				    <img className="mb-4" src={B} alt="" width="72" height="72"/>
				    <h1 className="h3 mb-3 font-weight-normal">Shopping</h1>
				    <p>Si aun no te has registrado. Presiona aqui<a className="link" href="..."> Registrate</a>.</p>
				  </div>

				  <div className="form-label-group">
				   <label htmlFor="inputEmail">Correo electronico</label>
				    <input type="email" name="email" id="inputEmail" className="form-control" placeholder="Correo electronico" required autoFocus value={this.state.email} onChange={this.handleChange} />
				   
				  </div>

				  <div className="form-label-group">
				  <label htmlFor="inputPassword">Contraseña</label>
				    <input type="password" name="password" id="inputPassword" className="form-control" placeholder="Contraseña" required  value={this.state.password} onChange={this.handleChange} />
				    
				  </div>

				  <div className="checkbox mb-3">
				    <label>
				      <input type="checkbox" value="remember-me"/> Recuerdame
				    </label>
				  </div>
				   <button className="btn btn-primary" onClick={this.handleClick}>Ingresar </button>
				  
				 </form>
		    </div>
    	</>
    );
  }
   
}

export default Login;