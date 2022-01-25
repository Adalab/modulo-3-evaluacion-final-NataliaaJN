import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom'; //en el futuro cuando tengas acceso a la configuración de tu servidor y puedas usar el sistema moderno de rutas-> cambiar HashRouter por BrowserRouter
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);