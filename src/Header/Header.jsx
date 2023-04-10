import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css"
const Header = () => {
    return (
        <div className='bg-slate-100'>
            <div className='navbar flex items-center justify-between'>
                <h1 className='text-3xl font-bold'>Career Builder</h1>
                <nav className='flex items-center justify-between '>
                    <ActiveLink to="/"><span className='mr-4'>Home</span></ActiveLink>
                    <ActiveLink to="/statistics"><span className='mr-4'>Statistics</span></ActiveLink>
                    <ActiveLink to="/blog"><span className='mr-4'>Blog</span></ActiveLink>
                    <ActiveLink to="/appliedJobs"><span className='mr-4'>Applied Jobs</span></ActiveLink>
                    </nav>
                <button className='main text-xl text-white font-bold'>Start Applying</button>
            </div>
        </div>
    );
};

export default Header;