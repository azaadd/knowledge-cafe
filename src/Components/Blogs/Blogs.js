import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className='blog-container-wrap'>
            <div className='blog-container'>
                <div className='blog-data-container'>
                    {
                        blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        ></Blog>)
                    }
                </div>


                <div className='blog-info-container'>
                    <div className='spent-time'>
                        <h4>Spent time on read :</h4>
                    </div>
                    <div className='bookmark-blog'>
                        <h3>Bookmarked Blogs :</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;