import React, { useEffect, useState } from 'react';
import "./Home.css"
import Category from '../Category/Category';
const Home = () => {

    const [categorise, setCategorise] = useState([]);
    useEffect(() => {
        fetch('categoryList.json')
            .then(res => res.json())
            .then(data => setCategorise(data));
    }, [])

    return (
        <div >
            <div className='banner flex justify-center items-center bg-slate-100'>
                <div className='mr-14'>
                    <h1 className='banner-title'>One Step Closer To Your <span className='text'>Dream Job</span></h1>
                    <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='main text-xl text-white font-bold'>Get Started</button>
                </div>
                <img className='backgroundImg' src="back-img.avif" alt="" />
            </div>
            <div className='category-list-section text-center mt-24'>
                <h2 className='text-4xl font-bold'>Job Category List</h2>
                <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid gap-4'>
                    {
                    categorise.map(category => <Category
                        key={category.id}
                        category={category}
                    ></Category>)
                }
                </div>



            </div>
            </div>
            );
};

            export default Home;