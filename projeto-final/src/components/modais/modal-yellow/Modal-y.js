import React, {useState} from "react";
import './Modal-y.css'
import check from './img-modal/alert-octagon.svg'
import { Link } from "react-router-dom";

export default function Modal(props){
    function setandoModal(){
        props.setClassToModalY("caixa-p-modal-hide-y")
    }
    function irHome(){
        setandoModal()
    }
    function ficarCadastro(){
        setandoModal()
    }
    return(
        <>
            <div className={props.classToModalY}>
                <div className="caixa-i-modal-y">
                    <div className="caixa-title-modal-y">
                        <h4>Tem certeza?</h4>
                        <div className="svg-modal-y">
                            <img className="img-check" src={check} alt="check-img"/>
                        </div>
                    </div>
                    <p>
                        Você está a poucos passos para pegar seu bixinho, mas se quiser realmente cancelar sua adoção, 
                        clique em sim, caso queira seu animalzinho, clique em não.
                    </p>
                    <Link to='/'><button onClick={ficarCadastro} className="botao-modal-y">SIM</button></Link>
                    <button onClick={irHome} className="botao-modal-y">NÃO</button>
                </div>
            </div>
        </>
    )
}