import React from "react";
import './Modal-v.css'
import check from './img-modal/x-octagon.svg'

export default function Modal(props){
    function setandoModal(){
        props.setClassToModal("caixa-p-modal-hide")
    }

    return(
        <>
            <div className={props.classToModal}>
                <div className="caixa-i-modal">
                    <div className="caixa-title-modal">
                        <h4>Ops!</h4>
                        <div className="svg-modal">
                            <img className="img-check" src={check} alt="check-img"/>
                        </div>
                    </div>
                    <p>
                        Houve algum errozinho nos campos preenchidos, mas não se preocupe, clique em OK 
                        e verifique os campos preenchidos, jaja você terá o certificado do seu bixinho em mãos!
                    </p>
                    <button onClick={setandoModal} className="botao-modal">OK</button>
                </div>
            </div>
        </>
    )
}