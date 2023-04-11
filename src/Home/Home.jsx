import React, { useEffect, useState } from 'react';
import "./Home.css"
import Category from '../Category/Category';
import { useLoaderData } from 'react-router-dom';
import JobData from '../JobData/JobData';

const Home = () => {

    const [categorise, setCategorise] = useState([]);
    useEffect(() => {
        fetch('categoryList.json')
            .then(res => res.json())
            .then(data => setCategorise(data));
    }, [])
    const jobsData = useLoaderData();
    const [showAll, setShowAll] = useState(false);
    const handlerSeeAll = () => {
        setShowAll(true);
    }
    return (
        <div >
            {/* banner  */}
            <div className={`banner flex justify-center items-center bg-slate-100 `}>
                <div className='mr-14'>
                    <h1 className='banner-title'>One Step Closer To Your <span className='text'>Dream Job</span></h1>
                    <p className='description'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='main text-xl text-white font-bold'>Get Started</button>
                </div>
                <img className='backgroundImg' src="back-img.avif" alt="" />
            </div>
            {/* category list  */}
            <div className={`category-list-section `}>
                <h2 className='text-4xl text-center font-bold mt-24'>Job Category List</h2>
                <p className='description text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>

                <div className='grid grid-cols-4 gap-5 mx-36'>
                    {
                        categorise.map(category => <Category
                            key={category.id}
                            category={category}
                        ></Category>)
                    }
                </div>



            </div>
            {/* featured job section  */}
            <div className={`featured-job-section `}>
                <h2 className='text-4xl text-center font-bold mt-24'>Featured Jobs</h2>
                <p className='description text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid grid-cols-2 gap-5 mx-36 mb-8'>
                    {
                        jobsData.slice(0, showAll ? 6 : 4).map(jobdata => <JobData
                            key={jobdata.job_id}
                            jobdata={jobdata}
                           
                        ></JobData>)
                    }
                </div>
                <div className='text-center'>
                    <button onClick={handlerSeeAll} className={`main text-xl text-white font-bold my-8 ${showAll ? "hidden" : "inline"}`}>See All Jobs</button>
                </div>
            </div>
           
        </div>
    );
};

export default Home;