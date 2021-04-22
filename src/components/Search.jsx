import React from 'react';
import'../assets/styles/components/Search.scss';


const Search = () =>(
    <section className="main">
        <h2 className="main__title">¿Que Quieres ver hoy? </h2>
         <input type="text" className="input" placeholder="Buscar . . . "></input>
    </section>
)
export default Search;