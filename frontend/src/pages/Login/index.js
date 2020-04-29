import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowRight} from 'react-icons/fi';
import './styles.css';

import cat from '../../assets/cat.png';


export default function Login (){
    return(
        
        <div className="login-container">

            <section className="form">
            <img src={cat} alt = "Cat" />

            <form >
                
                <input placeholder= "Usuario" />
                <input type="password" id="pass" placeholder= "Senha"/>
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