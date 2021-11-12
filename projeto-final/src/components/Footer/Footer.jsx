import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"


export default function Footer() {

    return(

        <>
            <footer id="rodape">
                <p>Todos os direitos reservados a equipe - <Link to="/"style={{ textDecoration: 'none' }}><span className="link-footer">Cat House</span></Link></p>
            </footer>
        </>

    )


}