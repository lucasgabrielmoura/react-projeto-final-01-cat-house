import React from "react";
import "./Cadastro.css";
import ReactDOM from 'react-dom';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'



function Cadastro (){
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
        </section>
    )
}
export default Cadastro;