import React, { useEffect, useState } from 'react';
import "./JobDetails.css"
import { useParams } from 'react-router-dom';
    const JobDetails = () => {
    const dynamic_id = useParams();
       const id = parseInt(dynamic_id.id);
       const [viewData,setViewData] = useState([]);
       useEffect(()=>{
        fetch('/jobData.json')
        .then(res =>res.json())
        .then(data=> setViewData(data))
       },[]);
const value =  viewData.find(view => view.job_id === id);


    return (
        <div>
             {/* job Details  */}
            
                <div className={`banner jobDetails bg-slate-100 text-center`}>
                    <h2 className='p-10'>Job Details</h2>
                </div>
          <p>{value?.job_description}</p>
          <p>{value?.job_responsibilities}</p>
          <p>{value?.education_requirements}</p>
          <p>{value?.experience} in this field.</p>
        </div>
    );
};

export default JobDetails;