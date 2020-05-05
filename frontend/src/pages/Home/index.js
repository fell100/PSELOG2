import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {FiSearch } from 'react-icons/fi'
import {FiLogOut} from 'react-icons/fi';
import { useAlert } from 'react-alert';
import { confirmAlert } from 'react-confirm-alert'; 
import 'react-confirm-alert/src/react-confirm-alert.css';

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
    const history = useHistory();
    const alert = useAlert();
    const userName = localStorage.getItem('userName');
    const visible = document.getElementById('visible');

    async function handleHome(){
       try{

        const token = localStorage.getItem(token)
        await api.post('/user/auth', token).then((authRes) => {
        if(authRes == "Forbidden") {
            history.push('/')
            }
        }, (error) => console.log(error))


        const res = await api.get('https://ghibliapi.herokuapp.com/films');
        const filmes = res.data;

        const response = filmes.filter( (filme) => {return filme.title.toUpperCase() === name.toUpperCase()} );

        //const visible = document.getElementById('visible');
        setTitle(response[0].title);
        setDis(response[0].description);
        setDirector(response[0].director);
        setProducer(response[0].producer);
        setRelease(response[0].release_date);
        setName('');
        visible.style.display = 'block';
       } catch(err){
        alert.show("Dica: Princess Mononoke, Castle in the Sky e outros", {
            title: "Tente novamente: filme não encontrado!"
          });
        visible.style.display = 'none';
       }
      
    }


    return(
        <div className="home-container">
            <header>
                 <span>Bem vindo(a), {userName}</span>

                 <button id="logout" type="button" onClick={() => confirmAlert({
                    title: 'Studio Ghibli',
                    message: 'Deseja sair da aplicação?',
                    buttons: [
                        {
                        label: 'Sim',
                        onClick: () => history.push('/')
                        },
                        {
                        label: 'Não',
                        
                        }
                    ]})}
                >       
                    <FiLogOut size={25} color="#5F5D57"/>
                 </button>
            </header>

            <div id='paragrafo'>
                <p> Nesta aplicação, disponibilizamos para você a pesquisa dos filmes do Studio Ghibli. 
                    Para iniciar, pesquise pelo nome do filme e as informações aparecerão em seguida.</p>
                
            </div>

            <div id='search'>

                <div id='search-box'>
            
                <input onSubmit={handleHome}
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
                <li><b>Título:</b> {title}</li>
                <li><b>Diretor:</b> {director}</li>
                <li><b>Produtor:</b> {producer}</li>
                <li><b>Data de lançamento:</b> {release}</li>
                <li><b>Descrição:</b> {description}</li>
             </ul>
            </div>
        </div>

    );
}