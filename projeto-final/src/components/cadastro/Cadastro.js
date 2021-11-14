import React, { useEffect, useState } from "react";
import "./Cadastro.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from "../modais/modal-vermelho/Modal-v";

function Cadastro() {

    useEffect(() => {
        document.title = "Cadastro"
    })

    const [classModal, setClassModal] = useState("caixa-p-modal-hide")

    function mudarModal() {
        setClassModal("caixa-p-modal")
    }

    function validador() {
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var telefone = document.getElementById("telefone").value

        let testRegex = function () {
            let regex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
            return regex.test(email);
        }

        if (nome == "" || email == "" || telefone == "") {
            alert("Por favor verifique se todos os dados foram preechidos.");
        } else if (testRegex() === true) {
            alert("Registro Concluído");
        } else {
            alert("Email inválido");
        }

    }

    return (
        <section className="section">
            <Header />
            <Footer />
            <form className="form" id="formulario">
                <div className="form2">
                    <div>
                        <h1 className="title">Registro</h1>
                    </div>

                    <div className="grupo">
                        <input className="input" type="text" id="nome" autocomplete="off" required />
                        <label className="label">Nome</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="text" id="email" autocomplete="off" required />
                        <label className="label">Email</label>
                    </div>
                    <div className="grupo">
                        <input className="input" type="number" id="telefone" required />
                        <label className="label">Telefone</label>
                    </div>

                    <div>
                        <button className="button" type="submit" onClick={validador}>Continuar</button>
                    </div>
                    <div>
                        <button className="button" type="reset">Cancelar</button>
                    </div>
                </div>
            </form>
            <Modal classToModal={classModal} setClassToModal={setClassModal} />
        </section>
    )
}
export default Cadastro;