import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
    return (
        <div className=" text-center my-10">
            <h1 className='font-bold'>Oops!</h1>
            <br />
            <p className='font-semibold text-2xl'>Sorry, an unexpected error has occurred.</p>
            <br />
            <p>
                <i className='text-red-700 font-bold'>{error.error.message}-{error.status}</i>
            </p>
        </div>
    );
};

export default ErrorPage;