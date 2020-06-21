import React from 'react';
import propTypes from 'prop-types';


class Contenido extends React.Component {
	static propTypes = {
    body: propTypes.object.isRequired
  }
  render() {
  	const {body} = this.props;
    return (
    	<div>
    		{body}
    	</div>
    );
  }
}
export default Contenido;