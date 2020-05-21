import React, { useState } from 'react';
import "firebase/auth";
import { useFirebaseApp, useUser } from 'reactfire';
import logo from '../img/logo.png';
import './nav.css';


export default () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useUser();
    const firebase = useFirebaseApp();

    const register = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password);
    }

    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email, password)
    }


    return (
        <div>
            {!user &&
                <div className='container_welcome'>
                    <div className='welcome_div'>
                        <img src={logo} alt="logo" />
                        <div className="auth_div">
                            <input placeholder='Email' className='form-control input' type='email' id='email' onChange={(e) => setEmail(e.target.value)} />
                            <input placeholder='Contraseña' className='form-control input' type='password' id='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button onClick={login} className='btn div_row_margin btn-primary'>Iniciar Sesion</button>
                        <button onClick={register} className='btn btn-primary'>Registrar</button>
                    </div>
                </div>
            }
        </div>

    )
}