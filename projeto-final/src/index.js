import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
<<<<<<< HEAD
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import Cadastro from './components/cadastro/Cadastro';

=======
import {BrowserRouter} from 'react-router-dom'
>>>>>>> cb71e21c4746a2ec4b75780d1e6e8ed2df3678ef

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Cadastro />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
