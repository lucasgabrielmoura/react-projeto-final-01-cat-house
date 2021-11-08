import React, { useEffect } from "react";
import "./Stylehome.css";
import Gato from "../Home/Img/gatinho.png";
import Gato2 from "../Home/Img/Gato2.png";
import Gato3 from "../Home/Img/Gato3.png";
import Gato4 from "../Home/Img/Gato4.png";
import Gato5 from "../Home/Img/Gato5.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Carousel from 'react-bootstrap/Carousel';



export default function Home() {

    useEffect(()=>{
        document.getElementsByTagName("a")[0].style.display = "none";
        document.getElementsByTagName("a")[1].style.display = "none";
    }, [{Carousel}]);

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
                <Carousel variant="dark" interval="4000">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Gato}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Gato2}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Gato3}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Gato4}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={Gato5}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
            <Footer />
        </>
    );
}