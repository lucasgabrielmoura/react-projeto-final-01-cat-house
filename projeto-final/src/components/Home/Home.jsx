import React, { useEffect, useState } from "react";
import "./Stylehome.css";
import { Link } from 'react-router-dom';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Sobre from "../sobre/Sobre";
import { Carousel } from 'react-carousel-minimal';



const data = [
  {
    image: "https://raw.githubusercontent.com/henriferi/imgs/main/gatinho.png",
  },
  {
    image: "https://raw.githubusercontent.com/henriferi/imgs/main/Gato2.png",
  },
  {
    image: "https://raw.githubusercontent.com/henriferi/imgs/main/Gato4.png",
  },
];


export default function Home() {
  const [palavra, setPalavra] = useState('tela-principal hide')
  function sendWord() {
    setPalavra('tela-principal')
  }

  useEffect(() => {
    document.title = "Home"
  })
  
  return (
    <>
      <Header />
      <div id="container">
        <div id="conteudo">
          <div id="texto">
            <h1>Cat <span>House</span></h1>
            <p>Somos uma instituição sem fins lucrativos que resgata gatos em situação de vulnerabilidade e mantém em abrigo enquanto lutamos para conseguir um lar para os mesmos. Nós da <span className="span-cat">Cat</span><span className="span-house">House</span> somos apaixonados por gatinhos e temos convicção de que você também irá ama-lós. Para conhecer seu novo amiguinho clique abaixo no botão <span className="clique-galeria">Galeria</span> e para conhecer mais sobre os fundadores e desenvolvedores clique abaixo no botão <span className="saiba-mais">Saiba mais</span>. </p>
            <div id="botoes">
              <button onClick={sendWord} className="btn2">SAIBA MAIS</button>
              <Link to="/Galeria"><button className="btn1">GALERIA</button></Link>
            </div>
          </div>
        </div>
        <div id="imagem">
          <div className="App">
            <div style={{ textAlign: "center" }}>
              <div style={{
              }}>
                <Carousel
                  data={data}
                  time={3800}
                  width="500px"
                  height="450px"
                  radius="10px"
                  slideNumber={false}
                  automatic={true}
                  dots={true}
                  pauseIconColor="black"
                  pauseIconSize="40px"
                  slideBackgroundColor="white"
                  slideImageFit="cover"
                  thumbnails={false}
                  thumbnailWidth="100px"
                  style={{
                    maxWidth: "1000px",
                    maxHeight: "1500px",
                    margin: "40px auto",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Sobre palavra={palavra} setPalavra={setPalavra} />
      <Footer />
    </>
  );
}