import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <>
        <div className='container-column background-gradient padding relative'>
            <div className='absolute floating'>
                <img className='img-main' src={'https://www.passes.com/_next/image?url=%2Fimg%2Fhero%2F3D_elements.png&w=1920&q=75'} alt='coins'></img>
            </div>
            <div className='relative'>
                <div className='container-column'>
                    <h1 className='title'>Passes</h1>
                    <h3 className='text'>All access to your favorite creators 🔥</h3>
                </div>
                <div className='container-row'>
                    <button className='btn'><Link to='/login'>Log in</Link></button>
                    <button className='btn2'><Link to='register'>Sign up</Link></button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;