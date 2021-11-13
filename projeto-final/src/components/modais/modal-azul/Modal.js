import React from "react";
import './Modal.css'
import check from './img-modal/check-circle.svg'
import { Link } from "react-router-dom";

export default function Modal(props){
    function setandoModal(){
        props.setClassToModal("caixa-p-modal-hide")
    }

    return(
        <>
            <div className={props.classToModal}>
                <div className="caixa-i-modal">
                    <div className="caixa-title-modal">
                        <h4>Tudo pronto!</h4>
                        <div className="svg-modal">
                            <img className="img-check" src={check} alt="check-img"/>
                        </div>
                    </div>
                    <p>
                        Parabéns, você conseguiu adotar o seu gatinho! 
                        Este é o endereço onde ele te espera (Avenida dos Gatos, 333).
                        Clique em OK, para adquirir o certificado de adoção do seu gatinho!
                    </p>
                    <Link to="/certificado"><button onClick={setandoModal} className="botao-modal">OK</button></Link>
                </div>
            </div>
        </>
    )
}