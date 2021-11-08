import React from "react";
import "./Style.css";
import Logo from "./Logo/just.png";


export default function Header() {

    return (
        <>
            <header id ="header">
                <ul>
                   <img className="logo" src={Logo} alt="Logo-CatHouse" />
                </ul>
            </header>
        </>
    );

}