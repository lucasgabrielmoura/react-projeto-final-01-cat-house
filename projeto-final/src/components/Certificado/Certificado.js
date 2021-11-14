 import React, { useEffect } from "react"
 import gato from  "../Certificado/fotos/garfield.png"
 import "./Certificado.css"
 import CAT from "../Certificado/fotos/CAT.png"
 import teste from "../Certificado/fotos/teste.jpg"

 

export default function Certificado(props) {

    useEffect(() => {
        document.title = "Certificado"
    })

    const codigoCertificado = (min, max) =>    
        Math.floor(Math.random() * (min, max))
    const numeros = codigoCertificado(3487578, 578975478)

    let nomeDoGato = window.localStorage.getItem('nomeDoGato');
    let nomeDoDono = window.localStorage.getItem('nomeDoDono');
    let dataGato = window.localStorage.getItem('dataGato');
    let imagem = window.localStorage.getItem('imagem');

    return(

        <>
        <div className="container">
        <div className="garf">
        </div>
        <div className="teste">
        <h1 className="titulo">CERTIFICADO DE ADOÇÃO</h1>
        <p>{numeros}</p>
        </div>
        <div>
        <img className=" carimbo" src={CAT} alt="Cat"/>
        </div>
        <div className="perfil1">
            <img className="perfil" src={teste} alt="teste"/>
            
        </div>
        </div>
        </>
    )
}

