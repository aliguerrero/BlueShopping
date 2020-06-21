import React from 'react';
import styled from 'styled-components';



const Button = styled.button`
  display: inline-block;
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
  display: table;
  float: left;
`;
const boton = styled(Button)`
  color: white;
  border-color: white;
`;

class BtnLink extends React.Component {
  render() {
    return (
      
	    <boton>{this.props.name}</boton>
	 
    );
  }
}
export default BtnLink;