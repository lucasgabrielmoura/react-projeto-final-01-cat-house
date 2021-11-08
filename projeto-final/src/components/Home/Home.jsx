import React, { useEffect } from "react";
import "./Stylehome.css";
import Gato from "../Home/Img/gatinho.png";
import Gato2 from "../Home/Img/Gato2.png";
import Gato3 from "../Home/Img/Gato3.png";
import Gato4 from "../Home/Img/Gato4.png";
import Gato5 from "../Home/Img/Gato5.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




export default function Home() {
    return(
        <>
            <Header />
            <div id="container">
                <div id="conteudo">
                    <div id="texto">
                        <h1>Cat <span>House</span></h1>
                        <p>Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123 Testando 123, testando 123, testando 123</p>
                        <div id="botoes">
                            <button className="btn2">SAIBA MAIS</button>
                            <button className="btn1">GALERIA</button>
                        </div>
                    </div>
                </div>
                <div id="imagem">
                </div>
            </div>
            <Footer />
        </>
    );
}