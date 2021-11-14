import React, { useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ModalV from "../modais/modal-vermelho/Modal-v";
import ModalA from "../modais/modal-azul/Modal"
import "../cadastro/Cadastro.css"

function Adocao (props){

    const [classModalV, setClassModalV] = useState("caixa-p-modal-hide-v")
    const [classModalA, setClassModalA] = useState("caixa-p-modal-hide-a")

    function mudarModalV(){
        setClassModalV("caixa-p-modal-v")
    }
    function mudarModalA(){
        setClassModalA("caixa-p-modal-a")
    }

    function validadorGato(){
        let nomeGato = document.getElementById("nome-do-gato").value
        let data = document.getElementById("data").value
        const reCharacter = /^[A-z]{3,}$/;

        if(nomeGato === "" || reCharacter.test(nomeGato) === false || data === ""){
            mudarModalV()
        }else{
            mudarModalA()
            window.localStorage.setItem('nomeDoGato', nomeGato);
            window.localStorage.setItem('dataGato', data);
        }
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
                        <input className="input" type="text" id="nome-do-gato" autocomplete="off" required />
                        <label className="label">Nome do gato</label>
                    </div>
                    <div className="grupo">
                        <label className="dataNome">Data de adoção</label>
                        <input className="input" type="date" id="data" required />
                    </div>
                    <div>
                        <button onClick={validadorGato} className="button" type="button">Finalizar</button>
                    </div>
                    <div>
                        <button className="button" type="reset">Cancelar</button>
                    </div>
                </div>
            </form>
            <ModalV classToModal = {classModalV} setClassToModal={setClassModalV}/>
            <ModalA classToModal = {classModalA} setClassToModal={setClassModalA}/>
        </section>
    )
}
export default Adocao;