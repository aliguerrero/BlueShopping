//dependencias
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router} from'react-router-dom';

//Routes
import AppRoutes from './componentes/routes';
//estilo
import './css/index.css';

import * as serviceWorker from './componentes/serviceWorker';

render(
  <React.StrictMode>
    <Router>
    	<AppRoutes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
