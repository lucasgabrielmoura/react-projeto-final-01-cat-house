import React, { useEffect, useState } from "react";
import "./Cadastro.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from "../modais/modal-vermelho/Modal-v";



function Cadastro (){

    useEffect(() => {
        document.title = "Cadastro"
    })

    const [classModal, setClassModal] = useState("caixa-p-modal-hide")

    function mudarModal(){
        setClassModal("caixa-p-modal")
    }

    return(
        <section className="section">
            <Header/>
            <Footer/>
            <form className="form">
                <div className="form2">
                    <div>
                        <h1 className="title">Registro</h1>
                    </div>

                    <div className="grupo">
                        <input className="input" type="text" required />
                        <label className="label">Nome</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="email" required />
                        <label className="label">Email</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="password" required />
                        <label className="label">Senha</label>
                    </div>

                    <div>
                        <button className="button" type="submit">Enviar</button>
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