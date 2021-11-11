import React from "react";
import './Modal.css'

export default function Modal(){
    return(
        <>
            <div className="caixa-p-modal">
                <div className="caixa-i-modal">
                    <div>
                        <h4>Erro</h4>
                        <img />
                    </div>
                    <p>Sua senha está errada, clique no ok para ajeitar</p>
                </div>
            </div>
        </>
    )
}