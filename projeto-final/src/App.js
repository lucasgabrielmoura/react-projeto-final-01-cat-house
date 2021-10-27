import React from "react";
import Galeria from "./components/galeria/Galeria";
import {BrowserRouter} from 'react-router-dom'

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Galeria />
      </div>
    </BrowserRouter>
  );
}


