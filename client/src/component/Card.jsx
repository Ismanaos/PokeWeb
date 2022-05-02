import React from "react";
//import { NavLink } from "react-router-dom";

export default function Card(props){

    return (
        <div>
            <img src={props.img} alt="" />
            <h1><a href={props.name}>
                {props.name}
            </a></h1>
            <h3>{props.tipos.map(n => n)}</h3>
        </div>
    );
};

// ] Input de búsqueda para encontrar pokemons por nombre (La búsqueda será exacta, es decir solo encontrará al pokemon si se coloca el nombre completo)
// [ ] Área donde se verá el listado de pokemons. Al iniciar deberá cargar los primeros resultados obtenidos desde la ruta GET /pokemons y deberá mostrar su:
// Imagen
// Nombre
// Tipos (Electrico, Fuego, Agua, etc)
// [ ] Botones/Opciones para filtrar por tipo de pokemon y por pokemon existente o creado por nosotros
// [ ] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los pokemons por orden alfabético y por fuerza
// [ ] Paginado para ir buscando y mostrando los siguientes pokemons, 12 pokemons por pagina.