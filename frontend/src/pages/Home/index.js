import React, {useState} from 'react';
import {FiSearch } from 'react-icons/fi'
import api from '../../services/api';

import './styles.css';
import mononoke from '../../assets/mononoke.png';

export default function Home(){
    
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [description,setDis] = useState('');
    const [director, setDirector] = useState('');
    const [producer, setProducer] = useState('');
    const [release, setRelease] = useState('');

    async function handleHome(){
        const res = await api.get('https://ghibliapi.herokuapp.com/films');
        const filmes = res.data;

       const response = filmes.filter( (filme) => {return filme.title.toUpperCase() === name.toUpperCase()} );

       const visible = document.getElementById('visible');
       setTitle(response[0].title);
       setDis(response[0].description);
       setDirector(response[0].director);
       setProducer(response[0].producer);
       setRelease(response[0].release_date);
       visible.style.display = 'block';
    }

    return(
        <div className="home-container">
            <header>
                <span>Bem vindo(a),</span>
            </header>
            <div id='paragrafo'>
                <p> Nesta aplicação disponibilizamos para você a pesquisa dos filmes do estudio Ghibli. 
                    Para dar inicio, basta pesquisar pelo nome e as suas  informações vão aparecer em seguida.</p>
                
            </div>

            <div id='together'>

                <div id='juntos'>
            
                <input 
                placeholder="Digite aqui" 
                value={name}
                onChange={e => setName(e.target.value)}
                />  

                <button onClick={handleHome}>
                <FiSearch size={25} color="#000"/>    
                </button> 

                </div>
                 
                <img src={mononoke} alt = "Ghibli" id="mono" />

            </div>
              
           
           

            <div id='visible' style={{display:'none'}}>
              <ul>
                <li><b>Titulo:</b> {title}</li>
                <li><b>Diretor:</b> {director}</li>
                <li><b>Produtor:</b> {producer}</li>
                <li><b>Data de lançamento:</b> {release}</li>
                <li><b>Descrição:</b> {description}</li>
             </ul>
            </div>
        </div>

    );
}