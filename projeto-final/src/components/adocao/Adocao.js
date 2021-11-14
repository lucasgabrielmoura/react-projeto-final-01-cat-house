import React, { useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from "../modal/Modal";
import "../cadastro/Cadastro.css"

function Adocao (){

    const [classModal, setClassModal] = useState("caixa-p-modal-hide")

    function mudarModal(){
        setClassModal("caixa-p-modal")
    }

    return(
        <section className="section">
            <Header/>
            <Footer/>
            <form className="form" id="formulario">
                <div className="form2">
                    <div>
                        <h1 className="title">Adoção</h1>
                    </div>

                    <div className="grupo">
                        <input className="input" type="text" id="nome" autocomplete="off" required />
                        <label className="label">Digite o nome para seu gato</label>
                    </div>
                    <div className="grupo">
                        <label className="dataNome">Data de adoção</label>
                        <input className="input" type="date" id="data" required />
                    </div>
                    <div>
                        <button className="button" type="submit">Finalizar</button>
                    </div>
                    <div>
                        <button className="button" type="reset">Cancelar</button>
                    </div>
                </div>
            </form>
            <Modal classToModal = {classModal} setClassToModal={setClassModal}/>
        </section>
    )
}
export default Adocao;