import React from 'react';
import { Link } from "react-router-dom";

const Register = () => {
    return(
        <>
        <div className='container-column background-gradient padding relative'>
            <h1 className='heading'>Sign up</h1>
            <input className='input' placeholder='email'></input>
            <input className='input' placeholder='username'></input>
            <input className='input' placeholder='password'></input>
            <button className='btn2'><Link to='/'>Sign up</Link></button>
        </div>
        </>
    )
}

export default Register;