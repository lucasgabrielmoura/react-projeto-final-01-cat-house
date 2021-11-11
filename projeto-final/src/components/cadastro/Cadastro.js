import React, { useState } from "react";
import "./Cadastro.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from "../modal/Modal";
import "./Validacao"


function Cadastro (){

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
                        <h1 className="title">Registro</h1>
                    </div>

                    <div className="grupo">
                        <input className="input" type="text" id="nome" required />
                        <label className="label">Nome</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="email" id="email" required />
                        <label className="label">Email</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="number" id="numero" required />
                        <label className="label">Telefone</label>
                    </div>

                    <div>
                        <button onClick={mudarModal} className="button" type="submit">Enviar</button>
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
export default Cadastro;