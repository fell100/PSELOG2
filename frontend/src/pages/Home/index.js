import React  from 'react';
import {FiSearch } from 'react-icons/fi'

import './styles.css';
import mononoke from '../../assets/mononoke.png';

export default function Home(){
    

    return(
        <div className="home-container">
            <header>
                <span>Bem vindo(a),</span>
            </header>

            <p> Nesta aplicação disponibilizamos para você a pesquisa dos filmes do estudio Ghibli. 
                Para dar inicio, basta pesquisar pelo nome e as suas  informações vão aparecer em seguida.</p>
                <img src={mononoke} alt = "Ghibli" id="G"/>

           <button>
            <FiSearch size={25} color="#000"/>    
           </button> 
            
            <input placeholder="Digite aqui" />
            
           
        </div>
    );
}