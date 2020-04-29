import React from 'react';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import './styles.css';
import logoImg from '../../assets/Ghibli.svg';


export default function Register(){
    return (
        <div className="register-container">

            <section className="sec">
            
            <img src={logoImg} alt = "Ghibli" id="G"/>
           
            <Link className="back-link" to="/">
                <FiArrowLeft size={25} color="#C5C5C5"/> 
                Voltar para login
                </Link>
            </section>

            <form>
                <h1>Cadastro de Usuário</h1>
                <input placeholder="Nome do usuario" />
                <input type="password" placeholder="Senha" />
                <input type="email" placeholder="E-mail"/>
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    );
}