import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {Link} from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import { useAlert } from 'react-alert';
import './styles.css';
import logoImg from '../../assets/Ghibli.svg';
import api from '../../services/api';


export default function Register(){

    const[username,setUser] = useState('');
    const[email,setEmail] = useState('');
    const[password,setPass] = useState('');
    const history = useHistory();
    const alert = useAlert();
   
    async function handleRegister(e){
        e.preventDefault();
        const data={
            username,
            password,
            email,
        }

        try{
            const res = await api.post('user/add', data)
            localStorage.setItem('token', res.data.token);
            localStorage.setItem('username', res.data.username);

            alert.show('Cadastro feito',{
                onClose: () => {
                    history.push('/home')
                }
            })
        }catch(err){
            setUser('');
            alert.show(err.response.data);
        }
    }
    
    return (
        <div className="register-container">

            <section className="sec">
            
            <img src={logoImg} alt = "Ghibli" id="G"/>
           
            <Link className="back-link" to="/">
                <FiArrowLeft size={25} color="#C5C5C5"/> 
                Voltar para login
                </Link>
            </section>

            <form onSubmit={handleRegister}>
                <h1>Cadastro de Usuário</h1>
                <input
                 placeholder="Nome do usuario" 
                 value={username}
                 onChange={e => setUser(e.target.value)}
                 />
                <input 
                type="password" placeholder="Senha" 
                value={password}
                onChange={e => setPass(e.target.value)}
                />
                <input 
                type="email" placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                />
                <button className="button" type="submit">Enviar</button>
            </form>
        </div>
    );
}