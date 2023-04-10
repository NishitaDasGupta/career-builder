import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import "./Main.css"
const Main = () => {
    return (
        <div className='main '>
            <Header></Header>
            <div className=''>
                <Outlet></Outlet>
            </div>

        </div>
    );
};

export default Main;