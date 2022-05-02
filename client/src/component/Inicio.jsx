import React from "react";
import { Link } from 'react-router-dom'
import './Inicio.css'

function Inicio(){
    return (
        <div className="centrar">
            <Link to='/inicio'>
                <button className="boton">
                    Entrar
                </button>
            </Link>
        </div>
    )
}

export default Inicio