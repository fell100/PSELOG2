import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import './styles.css';
import api from '../../services/api';
import cat from '../../assets/cat.png';


export default function Login (){

    const [name, setName] = useState('');
    const [password, SetPass] = useState('');

    async function handleLogin(e){
        e.preventDefault();
    
        try{
            const credentials={
                username: name,
                password: password
            }
            const response = await api.post('user/login',credentials);
            console.log(response.data.username);
        } catch(err){
            alert('Falha no login');
        }
    }
    
    console.log('Olá');
    return(
        
        <div className="login-container">

            <section className="form">
            <img src={cat} alt = "Cat" />

            <form onSubmit={handleLogin}>
                
                <input 
                placeholder= "Usuario" 
                value={name}
                onChange={e => setName(e.target.value)}
                />
                <input 
                type="password" id="pass" placeholder= "Senha"
                value={password}
                onChange={e => SetPass(e.target.value)}
                />
                <button  className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                <FiArrowRight size={25} color="#C5C5C5"/> 
                    Não tem cadastro?
                    
                </Link>
            </form>

            </section>
            
        
            
        </div>
     
    );
}