import React from 'react'
import { Link } from 'react-router-dom';
import { useFirebaseApp, useUser } from 'reactfire';
import './nav.css';
import logo from '../img/logo.png';



export default () => {


    const firebase = useFirebaseApp();
    const user = useUser();

    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-margin">
            <div className='container'>
                <Link className="navbar-brand" to='/'>
                    <img className='logo_nav' src={logo} alt="" />
                </Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto" >
                        <li className="nav-item">
                            <Link className='nav-link' to='/fscfi1'>PLANT 1</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fscfi2'>PLANT 2</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fsch'>PLANT 3</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fecfi1'>PLANT 4</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fecfi2'>PLANT 5</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fh1'>PLANT 6</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' to='/fh2'>PLANT 7</Link>
                        </li>
                        {
                            user && <button onClick={logout} className='btn btn-primary btn-margin nav-link'>Cerrar Sesion</button>
                        }
                    </ul>
                </div>
            </div>
        </nav>
    )

}
