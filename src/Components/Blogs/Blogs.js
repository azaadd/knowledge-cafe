import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    const [mark, setMark] = useState([]);
    const [time, setTime] = useState([]);

    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    const handleAddToBookMark = (blog) =>{
        const newMark = [...mark, blog];
        setMark(newMark);
    }
    const handleAddToMarkRead = (blog) =>{
        const newTime = [...time, blog];
        setTime(newTime);
    }

    return (
        <div className='blog-container-wrap'>
            <div className='blog-container'>
                <div className='blog-data-container'>
                    {
                        blogs.map(blog => <Blog 
                        key={blog.id}
                        blog={blog}
                        handleAddToBookMark={handleAddToBookMark}
                        handleAddToMarkRead={handleAddToMarkRead}
                        ></Blog>)
                    }
                </div>


                <div className='blog-info-container'>
                    <div className='spent-time'>
                        <h4>Spent time on read : {time.length}</h4>
                    </div>
                    <div className='bookmark-blog'>
                        <h3>Bookmarked Blogs : {mark.length}</h3>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;