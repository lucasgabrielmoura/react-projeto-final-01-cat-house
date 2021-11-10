import React, { useState } from "react";
import Galeria from "./components/galeria/Galeria";
import {Switch, Route} from 'react-router-dom'
import Sobre from "./components/sobre/Sobre";
import Home from "./components/Home/Home";
<<<<<<< HEAD
import Cadastro from "./components/cadastro/Cadastro"
=======
import certificado from "./components/Certificado/Certificado";

>>>>>>> ebd30e92ef3fc6737f40be735e246e04780f377b

export default function App() {
  const [dados, setDados] = useState({
    url:"",
    nome:"",
    data:"",
  })
  return (
        <>
          <Switch>
<<<<<<< HEAD
              <Route path="/Home" component={Home} exact/>
              <Route path="/Galeria" render={(props) => <Galeria setDados={setDados}/>} />
              <Route path="/Cadastro" component={Cadastro} exact/>
=======
              <Route path="/" component={Home} exact/>
              <Route path="/Galeria" render={(props) => <Galeria setDados={setDados}/>} exact/>
              <Route path="/Certificado" component={certificado} exact/>
>>>>>>> ebd30e92ef3fc6737f40be735e246e04780f377b
          </Switch>
        </>
  );
}


