import React from "react";
import "./Style.css";
import Logo from "./Logo/just.png";
import {Link} from 'react-router-dom'


export default function Header() {

    return (
        <>
            <header id ="header">
                <Link to="/">
                <ul className="ul-logo">
                   <img className="logo" src={Logo} alt="Logo-CatHouse" />
                </ul>
                </Link>
            </header>
        </>
    );

}