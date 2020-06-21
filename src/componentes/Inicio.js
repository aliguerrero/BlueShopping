//dependencias
import React from 'react';

//componentes
import Card from './Card';
import MyParallax from './parallax';
import MyParallax2 from './SecondParallax';
import Categoria from './Categoria';
import Form from './form';
import Footer from './Footer';


class inicio extends React.Component {
  render() {
    return (
    	<>
		 <div className="parallax">
		     <MyParallax />
		  </div>

		  <div className="card">
		    <Card />
		  </div> 

		  <MyParallax2 />

		  <Categoria />
		  
		  <Form />
		  <Footer /> 
		</>
    );
  }
}
export default inicio;
