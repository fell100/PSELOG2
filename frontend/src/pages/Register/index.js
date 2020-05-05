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
            const response = await api.post('user/add', data)
<<<<<<< HEAD
            
            alert(response.data);
            history.goBack();
=======
            console.log(response);
            alert.show('Cadastro feito',{
                onClose: () => {
                    history.push('/home')
                }
            })   
>>>>>>> ac8c466a322443cb8300c5b04d07024b32c686ca
        }catch(err){
            alert.show('Erro no cadastro, tente novamente');
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