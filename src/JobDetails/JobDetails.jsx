import React, { useEffect, useState } from 'react';
import "./JobDetails.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleDollarToSlot, faCalendar, faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom';
import { addToDb } from '../../public/fakedb';


const JobDetails = () => {
    const dynamic_id = useParams();
    const id = parseInt(dynamic_id.id);
    const [viewData, setViewData] = useState([]);
    useEffect(() => {
        fetch('/jobData.json')
            .then(res => res.json())
            .then(data => setViewData(data))
    }, []);
    const value = viewData.find(view => view.job_id === id);
    const handleApplyNow = (id) => {
       // console.log(id);
        addToDb(id);
    }
    return (
        <div>
            {/* job Details  */}

            <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10'>Job Details</h2>
            </div>
            <div className=''></div>
            <div className='details'>
                <div className='requirement'>
                    <p className='pb-6 text-justify'><span className='font-bold'>Job Description:</span> {value?.job_description}</p>
                    <p className='pb-6 text-justify'><span className='font-bold'>Job Responsibility:</span> {value?.job_responsibilities}</p>
                    <p className='pb-6'><span className='font-bold'>Education Requirements:</span><br />{value?.education_requirements}</p>
                    <p className='pb-6'><span className='font-bold'>Experiences:</span><br />{value?.experience} in this field.</p>
                </div>
                <div>
                    <div className='give'>

                        <div>
                            <p className='pb-6 font-bold'>Job Details</p></div>
                        <hr className='hr' />
                        <p className='py-6 text-justify'><span className='font-bold'><FontAwesomeIcon className='fontAwesome' icon={faCircleDollarToSlot} /> Salary:</span> {value?.salary} (Per Month)</p>
                        <p className='pb-6 text-justify'><span className='font-bold'><FontAwesomeIcon className='fontAwesome' icon={faCalendar} /> Job Title:</span> {value?.job_title} </p>
                        <div>
                            <p className='pb-6 font-bold'>Contact Information</p>
                            <hr className='hr' />
                            <p className='py-6 text-justify'><span className='font-bold'><FontAwesomeIcon className='fontAwesome' icon={faPhone} /> Phone:</span> {value?.contact_info?.phone}</p>
                            <p className='pb-6 text-justify'><span className='font-bold'><FontAwesomeIcon className='fontAwesome' icon={faEnvelope} /> Email:</span><br />{value?.contact_info?.email} </p>
                            <p className=' text-justify'><span className='font-bold'><FontAwesomeIcon className='fontAwesome' icon={faLocationDot} /> Address:</span> {value?.company_location} </p>
                        </div>

                    </div>
                    <button onClick={() => handleApplyNow(value.job_id)} className='main w-full mt-6 text-xl text-white font-bold'>Apply Now</button>
                </div>
            </div>
          
        </div>
    );
};

export default JobDetails;