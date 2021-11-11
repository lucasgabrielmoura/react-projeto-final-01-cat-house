import React, { useState } from "react";
import Galeria from "./components/galeria/Galeria";
import {Switch, Route} from 'react-router-dom'
import Sobre from "./components/sobre/Sobre";
import Home from "./components/Home/Home";
import Cadastro from "./components/cadastro/Cadastro"
import certificado from "./components/Certificado/Certificado";



export default function App() {
  const [dados, setDados] = useState({
    url:"",
    nome:"",
    data:"",
  })
  return (
        <>
          <Switch>
              <Route path="/Galeria" render={(props) => <Galeria setDados={setDados}/>} />
              <Route path="/Cadastro" component={Cadastro} exact/>
              <Route path="/" component={Home} exact/>
              <Route path="/Certificado" component={certificado} exact/>
          </Switch>
        </>
  );
}


