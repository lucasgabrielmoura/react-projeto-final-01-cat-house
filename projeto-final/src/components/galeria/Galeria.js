import React from 'react';
import "./Galeria.css"

/*https://api.thecatapi.com/v1/images/search?format=json&limit=25*/

export default function Galeria(props){
    function puxarCaixa(){
        document.querySelector(".caixinha").classList.toggle("active")
    }

    return(
        <>
            <div className="images">
                <div onMouseOver={puxarCaixa} onMouseOut={puxarCaixa} className="caixa-img">
                    <img className="gato" src="https://25.media.tumblr.com/tumblr_m44w9nI50Y1qzyqubo1_500.jpg" alt="gato"/>
                    <div className="caixinha" id="caixinha-puxar">
                        <a href="https://www.youtube.com/watch?v=HN1UjzRSdBk&ab_channel=Rocketseat" ><button className="botao-escolher">ESCOLHER</button></a>
                    </div>
                </div>
            </div>
        </>
    );
}