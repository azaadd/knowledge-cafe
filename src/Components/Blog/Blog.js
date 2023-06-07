import React from 'react';
import './Blog.css';


const Blog = (props) => {

    const { blogImg, personImg, authorName, publishDate, min, title, hashtag, markRead } = props.blog;
    // console.log({blogImg})
    return (
        <div className='blog-item'>
            <img className='blog-img' src={blogImg} alt="" />

            <div className='author-wrap'>
                <div className='author'>
                    <img className='person-img' src={personImg} alt="" />
                    <div>
                        <h3>{authorName}</h3>
                        <p>{publishDate}</p>
                    </div>
                </div>
                <p className='time'>{min} min read</p>
            </div>

            <h2>{title}</h2>
            <p>{hashtag}</p>
            <p className='mark-read'>{markRead}</p>

            <hr />
        </div>

    );
};

export default Blog;