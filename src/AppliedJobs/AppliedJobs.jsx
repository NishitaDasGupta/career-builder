import React, { useEffect, useState } from 'react';
import { getApplyCart } from '../../public/fakedb';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';
const AppliedJobs = () => {
    const [carts, setCarts] = useState([]);
    const allData = useLoaderData();

    useEffect(() => {
        const storedData = getApplyCart();
        const newCarts=[];
        console.log(storedData);
        for (const id in storedData) {
            const appliedData = allData.find(data => data.job_id === parseInt(id));
            // console.log(appliedData);
            if (appliedData) {
                newCarts.push(appliedData);
            }
        }
        setCarts(newCarts);
    }, [allData])

    return (
        <div>
            <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10 mb-48'>Applied Jobs</h2>
            </div>
          
          <div className='mx-36'>
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