import React from 'react';

//imagenes
import logo from './img/x.png';

//estilos
import './css/page404.css'


class Page404 extends React.Component {
  render() {
    return (
    	<div className="page-1">
    		<div className="page-2">
    			<img src={logo} alt="" width="90px" height="90px" />
	    		<h1>Page 404 ERROR</h1>
	        No podemos encontrar la página que estás buscando
    		</div>	
    	</div>
    );
  }
}
export default Page404;