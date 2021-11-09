import React from "react"
 import gato from  "../Certificado/fotos/gato.png"
 import "./Certificado.css"
 import CAT from "../Certificado/fotos/CAT.png"
 import teste from "../Certificado/fotos/teste.jpg"

export default function certificado(props) {
    return(
        <>
        <div className="container">
            <img className="gato" src={gato} alt="garfield"/>
            
        </div>
        <div className="teste">
        <h1>CERTIFICADO DE ADOÇÃO</h1>
        </div>
        <div>
        <img className=" carimbo" src={CAT} alt="Cat"/>
        </div>
        <div className="perfil1">
            <img className="perfil" src={teste} alt="teste"/>
        </div>
        </>
    )
}

