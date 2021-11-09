import React from "react";
import "./Style.css";
import Logo from "./Logo/just.png";


export default function Header() {

    return (
        <>
            <header id ="header">
                <ul className="ul-logo">
                   <img className="logo" src={Logo} alt="Logo-CatHouse" />
                </ul>
            </header>
        </>
    );

}