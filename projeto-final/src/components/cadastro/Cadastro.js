import React from "react";
import "./Cadastro.css";

function Cadastro (){
    return(
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
                        <input className="input" type="number" required />
                        <label className="label">Senha</label>
                    </div>
                    <div>
                        <button className="submit" type="submit">Enviar</button>
                    </div>
                    <div>
                        <button className="reset" type="reset">Cancelar</button>
                    </div>
            </div>
        </form>
    )
}
export default Cadastro;