import React from 'react';
import "./Home.css"
const Home = () => {
    return (
        <div className='bg-slate-100'>
                <div className='header-box flex justify-center items-center'>
                <div className='mr-14'>
                    <h1 className='header-title'>One Step Closer To Your <span className='text'>Dream Job</span></h1>
                    <p className='header-description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='main text-xl text-white font-bold'>Get Started</button>
                </div>
                <img className='backgroundImg' src="back-img.avif" alt="" />
            </div>
        </div>
    );
};

export default Home;