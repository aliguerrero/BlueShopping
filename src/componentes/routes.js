import React from 'react';
import {BrowserRouter as Router, Route, Switch} from'react-router-dom';

//Componentes
import App from './App';
import Login from './login';
import Registro from './Registro';
import inicio from './Inicio';
import Page404 from './page404';

const AppRoutes = () =>(

	<App>
		<Switch>
			<Route exact path="/" component={inicio}/>
			<Route exact path="/Registro" component={Registro}/>
			<Route exact path="/login" component={Login}/>
			<Route component={Page404}/>
		</Switch>
	</App>
);

export default AppRoutes;