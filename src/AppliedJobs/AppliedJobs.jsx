import React, { useEffect, useState } from 'react';
import { getApplyCart } from '../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Applied.css"
const AppliedJobs = () => {
    const [carts, setCarts] = useState([]);
    // const [allcarts, setallCarts] = useState([]);
    const [cartsRemote, setCartsRemote] = useState([]);
    const [remote,setRemote] = useState(false);
    const [cartsOnsite, setCartsOnsite] = useState([]);
    const [onsite,setOnsite] = useState(false);
    const allData = useLoaderData();

    useEffect(() => {
        const storedData = getApplyCart();
        const newCarts = [];
        console.log(storedData);
        for (const id in storedData) {
            const appliedData = allData.find(data => data.job_id === parseInt(id));
            // console.log(appliedData);
            if (appliedData) {
                newCarts.push(appliedData);
            }
        }
        setCarts(newCarts);
        // setallCarts(newCarts);
    }, [allData])
    const handleRemoteJob = () => {
        const remoteJob = carts.filter(cart => cart.job_type === 'Remote');
        // setRemote(true);
        setCartsRemote(remoteJob);
        // setCarts(remoteJob);
        console.log({remoteJob});
    }
    const handleOnsiteJob = () => {
        const onSiteJob = allcarts.filter(cart => cart.job_type === 'Onsite');
        // setOnsite(true);
        setCartsOnsite(onSiteJob);
        // setCarts(onSiteJob);
        console.log({onSiteJob});
    }
   
   
    return (
        <div>
            <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10 mb-24'>Applied Jobs</h2>
            </div>
            <div className='flex justify-end mx-16'>
                <button onClick={handleRemoteJob} className='button-time'>Remote</button>
                <button onClick={handleOnsiteJob}  className='button-time'>Onsite</button>
            </div>
            <div className={`mx-36 `}>
                {
                    carts.map(cart => <Cart
                        key={cart.job_id}
                        cart={cart}
                    ></Cart>)
                }
            </div>

        </div>
    );
};

export default AppliedJobs;