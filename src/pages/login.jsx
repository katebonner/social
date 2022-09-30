import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <>
        <div className='container-column background-gradient padding relative'>
        <h1 className='heading'>Log in</h1>
        <input className='input' placeholder='username'></input>
        <input className='input' placeholder='password'></input>
        <button className='btn2'><Link to='/dashboard'>Log in</Link></button>
        </div>
        </>
    )
}

export default Login;