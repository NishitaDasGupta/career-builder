import React from 'react';
import "./JobData.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot , faCircleDollarToSlot} from '@fortawesome/free-solid-svg-icons'
const JobData = ({ jobdata }) => {
    const { company_location
        , company_logo, job_title, company_name, job_time, job_type, salary } = jobdata
    return (
        <div className='jobCart px-8 py-8'>
            <img className='jobCart img' src={company_logo} alt="" />
            <h2 className='title'>{job_title}</h2>
            <h4 className='company'>{company_name}</h4>
            <div className='flex my-4'>
                <p className='job-time'>{job_type}</p>
                <p className='job-time'>{job_time}</p>
            </div>
            <div className='flex '>
                <p className='job-loc-salary mr-6 mb-6'><FontAwesomeIcon icon={faLocationDot} />{company_location}</p>
                <p className='job-loc-salary mr-6 mb-6'><FontAwesomeIcon icon={faCircleDollarToSlot} />{salary}</p>
            </div>

            <button className='main text-xl text-white font-bold'>View Details</button>
        </div>
    );
};

export default JobData;