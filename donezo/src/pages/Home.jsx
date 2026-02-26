import React from 'react';
import Navbar from './Navbar/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div className='w-full bg-white'>
            <nav className='w-full'>
                <Navbar></Navbar>
            </nav>
            <main className='w-full px-2'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Home;