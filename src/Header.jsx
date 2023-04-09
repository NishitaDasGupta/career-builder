import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <h1>Career Builder</h1>
        <a href="/">Home</a>
        <a href="/statistics">statistics</a>
        <a href="/blog">blog</a>
        <a href="/appliedJobs">appliedJobs</a>
        
        </div>
    );
};

export default Header;