import React, { useState } from "react";
import Galeria from "./components/galeria/Galeria";
import Sobre from "./components/sobre/Sobre";
import {Switch, Route} from 'react-router-dom'

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


