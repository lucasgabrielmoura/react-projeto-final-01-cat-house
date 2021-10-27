import React, { useEffect, useState } from 'react';
import "./Galeria.css"
import Imageapi from '../../services/Imageapi'

/*https://api.thecatapi.com/v1/images/search?format=json&limit=25*/

export default function Galeria(props) {

    const [imagens, setImagem] = useState([]);

    useEffect(() => {
        Imageapi
            .get('?format=json&limit=25')
            .then((res) => {
                console.log(res.data)
                setImagem(res.data)

            })
            .catch((err) => console.error("ops! ocorreu um erro" + err))
    }, [])

    const imagensLista = imagens.map(imagem => (
    <div key={imagem.id} className="caixa-img">
        <img className="gato" alt="gato" src={imagem.url} />
        <div className="caixinha" id="caixinha-puxar">
            <a href="https://www.youtube.com/watch?v=HN1UjzRSdBk&ab_channel=Rocketseat" ><button className="botao-escolher">ADOTAR</button></a>
        </div>
    </div>
    ))

    return (
        <>
            <article className="guia">
                <h3>Clique no gatinho que você está mais afim de adotar!!</h3>
            </article>
            <div className="images">
                {imagensLista}
            </div>  
        </>
    );
}