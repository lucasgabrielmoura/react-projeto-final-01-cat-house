import React, { useEffect, useState } from "react";
import "./Cadastro.css";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Modal from "../modais/modal-vermelho/Modal-v";
import ModalY from '../modais/modal-yellow/Modal-y'
import {Link} from 'react-router-dom'

function Cadastro(props) {

    useEffect(() => {
        document.title = "Cadastro"
    })

    const [classModal, setClassModal] = useState("caixa-p-modal-hide-v")
    const [classModalY, setClassModalY] = useState("caixa-p-modal-hide-y")

    function mudarModal() {
        setClassModal("caixa-p-modal-v")
    }
    function mudarModalY() {
        setClassModalY("caixa-p-modal-y")
    }

    const [rota, setRota] = useState('/cadastro')

    function validador(e) {
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var telefone = document.getElementById("telefone").value
        const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const reCharacter = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
        
        if (nome === "" || reCharacter.test(nome) === false || email === "" || reEmail.test(email) === false || telefone === "") {
            mudarModal()
        }else {
            console.log()
            window.localStorage.setItem('nomeDoDono', nome);
        }

    }

    function mudarLink(){
        var nome = document.getElementById("nome").value
        var email = document.getElementById("email").value
        var telefone = document.getElementById("telefone").value

        const reEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        const reCharacter = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;


        if (nome === "" || reCharacter.test(nome) === false  || email === "" || reEmail.test(email) === false || telefone === "") {
            console.log()
            setRota("/cadastro")
        }else {
            setRota("/adocao")
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
                        <input onChange={mudarLink}  className="input" type="text" id="nome" autocomplete="off" required />
                        <label className="label">Nome</label>
                    </div>
                    <div className="grupo">
                        <input onChange={mudarLink} className="input" type="text" id="email" autocomplete="off" required />
                        <label className="label">Email</label>
                    </div>
                    <div className="grupo">
                        <input onChange={mudarLink}  className="input" type="number" id="telefone" required />
                        <label className="label">Telefone</label>
                    </div>

                    <div>
                        <Link className="link-decoration" to={rota}><button className="button" type="submit" onClick={validador}>Continuar</button></Link>
                    </div>
                    <div>
                        <button onClick={mudarModalY} className="button" type="button">Cancelar</button>
                    </div>
                </div>
            </form>
            <ModalY classToModalY={classModalY} setClassToModalY={setClassModalY} />
            <Modal classToModal={classModal} setClassToModal={setClassModal} />
        </section>
    )
}
export default Cadastro;