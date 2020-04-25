import React from 'react';

import './styles.css';

import cat from '../../assets/cat.png';
import totoro from '../../assets/totoro.png';
import logoImg from '../../assets/Ghibli.svg';

export default function Login (){
    return(
        
        <div className="login-container">

            <section className="form">
            <img src={cat} alt = "Cat" />

            <form >
                
                <input placeholder= "Usuario" />
                <input placeholder= "Senha" />
                <button className="button" type="submit">Entrar</button>

                <a href="/register">
                <img src={totoro} alt = "Totoro"/>
                    Não tem cadastro?
                </a>
            </form>

            </section>
            
        
            
        </div>
     
    );
}