import React, { useState } from "react";
import Galeria from "./components/galeria/Galeria";
import {Switch, Route} from 'react-router-dom'
import Sobre from "./components/sobre/Sobre";

export default function App() {
  const [dados, setDados] = useState({
    url:"",
    nome:"",
    data:"",
  })
  return (
        <>
          <Switch>
            <Route exact path='/galeria' render={(props) => <Galeria setDados={setDados} />}/>
          </Switch>
          <Sobre/>
        </>
  );
}


