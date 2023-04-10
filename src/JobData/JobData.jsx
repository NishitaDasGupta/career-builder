import React from 'react';
import "./JobData.css"
const JobData = ({ jobdata }) => {
    const { company_location
        , company_logo, job_title, company_name, job_time, job_type, salary } = jobdata
    return (
        <div className='jobCart'>
            <img src={company_logo} alt="" />
            <h2>{job_title}</h2>
            <h4>{company_name}</h4>
            <div className='flex'>
                <p>{job_type}</p>
                <p>{job_time}</p>
            </div>
            <div className='flex'>
                <p>{company_location}</p>
                <p>{salary}</p>
            </div>

            <button className='main text-xl text-white font-bold'>View Details</button>
        </div>
    );
};

export default JobData;