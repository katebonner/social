import React from 'react';
import {Link, useLocation} from 'react-router-dom';


const Nav = () => {

    const location = useLocation().pathname;


    return(
        <>
        <div className='container-row nav align'>
            <h1 className='title flex-2 logo-padding'>Passes</h1>
            <div className='flex-2'>
            { location === '/dashboard' ?
            <button className='btn3'><Link to='/profile'>Profile</Link></button>
            :
            <button className='btn3'><Link to='/dashboard'>Dashboard</Link></button>
            }
            <button className='btn3'>Connect wallet</button>
            <button className='btn3'><Link to='/'>Log out</Link></button>
            </div>
        </div>
        </>
    )
}

export default Nav;