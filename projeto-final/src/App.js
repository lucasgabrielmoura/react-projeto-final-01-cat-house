import React from "react";
import Galeria from "./components/galeria/Galeria";
import {Switch, Route} from 'react-router-dom'
import Home from "./components/Home/Home";
import Cadastro from "./components/cadastro/Cadastro"
import Certificado from "./components/Certificado/Certificado";
import Adocao from './components/adocao/Adocao'



export default function App() {
  return (
        <>
          <Switch>
              <Route path="/Galeria" render={(props) => <Galeria/>} exact/>
              <Route path="/Cadastro" render={(props) => <Cadastro/>} exact/>
              <Route path="/Adocao" render={(props) => <Adocao/>} exact/>
              <Route path="/" component={Home} exact/>
              <Route path="/Certificado" component={Certificado} exact/>
          </Switch>
        </>
  );
}


