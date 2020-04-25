import React from 'react';

import './styles.css';

import sumu from '../../assets/sumu.png';
import totoro from '../../assets/totoro.png';
import logoImg from '../../assets/Ghibli.svg';

export default function Login (){
    return(
        
        <div className="login-container">

            <section className="form">
            <img src={sumu} alt = "Sumu" />

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
            
            <img src={logoImg} alt = "Ghibli"/>
            
        </div>
    
        
    );
}