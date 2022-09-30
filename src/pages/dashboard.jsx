import React from 'react';
import Nav from '../components/nav';
import Feed from '../components/feed';

const Dashboard = () => {
    return(
        <>
        <Nav></Nav>
        <div className='container-column background-gradient padding relative'>
        <Feed></Feed>
        </div>
        </>
    )
}

export default Dashboard;