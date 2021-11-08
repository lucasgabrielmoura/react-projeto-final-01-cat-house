import React from "react";
import './Sobre.css'

export default function Sobre(){
    let check = true
    function voltar(){
        check = !check
        if(check === true){
            document.querySelector(".tela-principal").classList.add("hide")
        }else if(check === false){
            document.querySelector(".tela-principal").classList.remove("hide")
        }
    }

    return(
        <>
            <div className="tela-principal hide">
                <div className="tela-sobre">
                    <button onClick={voltar} className="btn" id="voltar">🡠 Voltar</button>
                    <div className="sobre">
                        <article>
                            <section className="perfil-id">
                                <article className="img-box">
                                    <img className="profile" src="https://avatars.githubusercontent.com/u/84140511?v=4" alt="foto de perfil" />
                                </article>
                                <article className="name">
                                    <h2>Lucas Gabriel</h2>
                                    <p>Front-end Developer</p>
                                    <p>lucasgabrieldemoura9199@gmail.com</p>
                                    <p className="skill"><a href="https://www.linkedin.com/in/lucas-gabriel-baa800212/" target="_blank" rel="noreferrer">Linkedin</a></p>
                                    <p className="skill"><a href="https://github.com/lucasgabrielmoura" target="_blank" rel="noreferrer">Github</a></p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <section className="perfil-id">
                                <article className="img-box">
                                    <img className="profile" src="https://avatars.githubusercontent.com/u/87838554?v=4" alt="foto de perfil" />
                                </article>
                                <article className="name">
                                    <h2>Henrique Fernandes </h2>
                                    <p>Front-end Developer</p>
                                    <p>lucasgabrieldemoura9199@gmail.com</p>
                                    <p className="skill"><a href="https://www.linkedin.com/in/henrique-fernandes-a29057214/" target="_blank" rel="noreferrer">Linkedin</a></p>
                                    <p className="skill"><a href="https://github.com/henriferi" target="_blank" rel="noreferrer">Github</a></p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <section className="perfil-id">
                                <article className="img-box">
                                    <img className="profile" src="https://avatars.githubusercontent.com/u/87834176?v=4" alt="foto de perfil" />
                                </article>
                                <article className="name">
                                    <h2>Anderson Figueiredo</h2>
                                    <p>Front-end Developer</p>
                                    <p>lucasgabrieldemoura9199@gmail.com</p>
                                    <p className="skill"><a href="https://www.linkedin.com/in/anderson-figueiredo-8bb034218/" target="_blank" rel="noreferrer">Linkedin</a></p>
                                    <p className="skill"><a href="https://github.com/AndyVF" target="_blank" rel="noreferrer">Github</a></p>
                                </article>
                            </section>
                        </article>
                        <article>
                            <section className="perfil-id">
                                <article className="img-box">
                                    <img className="profile" src="https://avatars.githubusercontent.com/u/87828929?v=4" alt="foto de perfil" />
                                </article>
                                <article className="name">
                                    <h2>Pedro Gabriel</h2>
                                    <p>Front-end Developer</p>
                                    <p>lucasgabrieldemoura9199@gmail.com</p>
                                    <p className="skill"><a href="https://www.linkedin.com/in/pedro-gabriel-98b14021b/" target="_blank" rel="noreferrer">Linkedin</a></p>
                                    <p className="skill"><a href="https://github.com/PedroGabrielll" target="_blank" rel="noreferrer">Github</a></p>
                                </article>
                            </section>
                        </article>
                    </div>
                </div>
            </div>
        </>
    )
}