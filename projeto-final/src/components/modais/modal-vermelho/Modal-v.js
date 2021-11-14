import React from "react";
import './Modal-v.css'
import check from './img-modal/x-octagon.svg'

export default function Modal(props){
    function setandoModal(){
        props.setClassToModal("caixa-p-modal-hide-v")
    }

    return(
        <>
            <div className={props.classToModal}>
                <div className="caixa-i-modal-v">
                    <div className="caixa-title-modal-v">
                        <h4>Ops!</h4>
                        <div className="svg-modal-v">
                            <img className="img-check" src={check} alt="check-img"/>
                        </div>
                    </div>
                    <p>
                    Houve algum erro nos campos preenchidos, mas não se preocupe, clique em OK e verifique os campos preenchidos para obter o certificado do seu animal em mãos!
                    </p>
                    <button onClick={setandoModal} className="botao-modal-v">OK</button>
                </div>
            </div>
        </>
    )
}