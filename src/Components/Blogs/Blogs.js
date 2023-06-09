import React, { useEffect, useState } from 'react';
import './Blogs.css';
import Blog from '../Blog/Blog';


const Blogs = () => {

    const [blogsData, setBlogsData] = useState([]);
    const [bookMark, setBookMark] = useState([]);
    const [markRead, setMarkRead] = useState([]);


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setBlogsData(data))
    }, []);



    const handleAddToBookMark = (blog) => {
        const newBookMark = [...bookMark, blog];
        setBookMark(newBookMark);
        console.log(blog.title)
    }

    const handleAddToMarkRead = (blog) => {
        const newMarkRead = [...markRead, blog];
        setMarkRead(newMarkRead);
    }



    let total = 0;
    for (const blogs of markRead) {
        total = total + blogs.min;
    }
    
    let blogTitle = " ";
    for (const blogs of bookMark) {
        blogTitle =blogTitle + blogs.title;
    }



    return (
        <div className='blog-container-wrap'>
            <div className='blog-container'>
                <div className='blog-data-container'>
                    {
                        blogsData.map(blog => <Blog
                            key={blog.id}
                            blog={blog}

                            handleAddToBookMark={handleAddToBookMark}
                            handleAddToMarkRead={handleAddToMarkRead}


                        ></Blog>)
                    }
                </div>


                <div className='blog-info-container'>
                    <div className='spent-time'>
                        <h4>Spent time on read : {total}</h4>
                    </div>
                    <div className='bookmark-blog'>
                        <h3>Bookmarked Blogs : {bookMark.length}</h3>
                        <div className='blogs-title'>

                            <p>{blogTitle}</p>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    );
};

export default Blogs;