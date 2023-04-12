import React, { useEffect, useState } from 'react';
import { getApplyCart } from '../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
import "./Applied.css"
const AppliedJobs = () => {
    const [carts, setCarts] = useState([]);
    const [sortedCarts, setSortedCarts] = useState([]);
    const [isSorted, setisSorted] = useState(false);
    const allData = useLoaderData();





    const users = [
        { name: 'Robin' },
        { name: 'Markus' },
    ];

    const showUsers = true;






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
    const handleJobType = (type) => {
        const value = carts.filter(cart => cart.job_type === type);
        console.log(value);
        setisSorted(true);
        setSortedCarts(value);
    }

    return (
        <div>
            <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10 mb-24'>Applied Jobs</h2>
            </div>
            <div className='flex justify-end mx-16'>
                <button onClick={() => handleJobType("Remote")} className='button-time'>Remote</button>
                <button onClick={() => handleJobType("Onsite")} className='button-time'>Onsite</button>
            </div>
            <div className='mx-36'>
                {isSorted ?
                    <ul>
                        {
                            sortedCarts.map(cart => <Cart
                                key={cart.job_id}
                                cart={cart}
                            ></Cart>)
                        }
                    </ul>
                    :
                    <ul>
                        {
                            carts.map(cart => <Cart
                                key={cart.job_id}
                                cart={cart}
                            ></Cart>)
                        }
                    </ul>
                }
            </div>
        </div>
    );
};

export default AppliedJobs;