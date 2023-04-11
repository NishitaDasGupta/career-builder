import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blog = () => {
    const blogs = useLoaderData();
    return (
        <div>
              <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10'>Question & Answer</h2>
            </div>

{
    blogs.map((blog,index) => <div >
        <h2 className='font-bold text-2xl p-3'>{index+1}.{blog.ques}</h2>
        <p className='text-xl p-4'>Ans: {blog.ans}</p>
    </div>  )
}
        </div>
    );
};

export default Blog;