import React from 'react';
import "./Category.css";
const Category = ({category}) => {
    // console.log(category);
    const {id,name,picture,jobs_available} = category;
    return (
        <div className='p-10 category' >
            <img className='w-16 h-16 p-3 mb-6 category-img' src={picture} alt="" />
            <h3 className='category-name'>{name}</h3>
            <p>{jobs_available}+ jobs Availabel</p>
        </div>
    );
};

export default Category;