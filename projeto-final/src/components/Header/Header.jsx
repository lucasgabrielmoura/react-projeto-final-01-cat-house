import React from "react";
import "./Style.css";
import Logo from "./Logo/just.png";
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';


export default function Header() {

    return (
        <>
            <header id="header">
                <ul className="ul-logo">
                    <Tooltip title="Home" arrow>
                        <Link to="/"><Button><img className="logo" src={Logo} alt="Logo-CatHouse" /></Button></Link>
                    </Tooltip>
                </ul>
            </header>
        </>
    );

}