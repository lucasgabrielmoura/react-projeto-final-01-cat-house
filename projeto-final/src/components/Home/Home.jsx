import React, { useState } from "react";
import "./Stylehome.css";
import {Link} from 'react-router-dom';
import Gato from "../Home/Img/gatinho.png";
import Gato2 from "../Home/Img/Gato2.png";
import Gato3 from "../Home/Img/Gato3.png";
import Gato4 from "../Home/Img/Gato4.png";
import Gato5 from "../Home/Img/Gato5.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sobre from "../sobre/Sobre";




export default function Home() {
    const[palavra, setPalavra] = useState('tela-principal hide')
    function sendWord(){
        setPalavra('tela-principal')
    }

    return(
        <>
            <Header />
            <div id="container">
                <div id="conteudo">
                    <div id="texto">
                        <h1>Cat <span>House</span></h1>
                        <p>Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123</p>
                        <div id="botoes">
                            <button onClick={sendWord} className="btn2">SAIBA MAIS</button>
                            <Link to="/Galeria"><button className="btn1">GALERIA</button></Link>
                        </div>
                    </div>
                </div>
                <div id="imagem">
                
                </div>
            </div>
            <Sobre palavra={palavra} setPalavra={setPalavra}/>
            <Footer />
        </>
    );
}