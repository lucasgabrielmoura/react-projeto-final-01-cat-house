import React, { useState } from "react";
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import ModalV from "../modais/modal-vermelho/Modal-v";
import ModalA from "../modais/modal-azul/Modal"
import ModalY from '../modais/modal-yellow/Modal-y'
import "../cadastro/Cadastro.css"

function Adocao (props){

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = dd + '-' + mm + '-' + yyyy;


    const [classModalV, setClassModalV] = useState("caixa-p-modal-hide-v")
    const [classModalA, setClassModalA] = useState("caixa-p-modal-hide-a")
    const [classModalY, setClassModalY] = useState("caixa-p-modal-hide-y")

    function mudarModalV(){
        setClassModalV("caixa-p-modal-v")
    }
    function mudarModalA(){
        setClassModalA("caixa-p-modal-a")
    }
    function mudarModalY() {
        setClassModalY("caixa-p-modal-y")
    }
    function validadorGato(){
        let nomeGato = document.getElementById("nome-do-gato").value
        const reCharacter = /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/;
        if(nomeGato === "" || reCharacter.test(nomeGato) === false){
            mudarModalV()
        }else{
            mudarModalA()
            window.localStorage.setItem('nomeDoGato', nomeGato);
            window.localStorage.setItem('dataGato', today);
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
                    <div>
                        <button onClick={validadorGato} className="button" type="button">Finalizar</button>
                    </div>
                    <div>
                        <button onClick={mudarModalY} className="button" type="button">Cancelar</button>
                    </div>
                </div>
            </form>
            <ModalV classToModal = {classModalV} setClassToModal={setClassModalV}/>
            <ModalA classToModal = {classModalA} setClassToModal={setClassModalA}/>
            <ModalY classToModalY={classModalY} setClassToModalY={setClassModalY} />
        </section>
    )
}
export default Adocao;