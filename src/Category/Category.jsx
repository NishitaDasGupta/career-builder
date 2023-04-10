import React from 'react';

const Category = ({category}) => {
    console.log(category);
    const {id,name,picture,jobs_available} = category;
    return (
        <div >
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>{jobs_available}</p>
        </div>
    );
};

export default Category;