import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import { useAlert } from 'react-alert';
import './styles.css';
import api from '../../services/api';
import cat from '../../assets/cat.png';


export default function Login (){

    const [name, setName] = useState('');
    const [password, SetPass] = useState('');
    const history = useHistory();
    const alert = useAlert();

    async function handleLogin(e){
        e.preventDefault();
    
        try{
            
            const credentials={
                username: name,
                password: password,
            }

            const response = await api.post('user/login',credentials);
            console.log(response);
            
            localStorage.setItem('userName', name);
            localStorage.setItem('token', response.data.token)
            history.push('/home');

        } catch(err){
            alert.show('Tente novamente: falha no login');
        }
    }

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
                <button className="button" type="submit">Entrar</button>

                <Link className="back-link" to="/register">
                <FiArrowRight size={25} color="#C5C5C5"/> 
                    Não tem cadastro?
                    
                </Link>
            </form>

            </section>
            
        
            
        </div>
     
    );
}