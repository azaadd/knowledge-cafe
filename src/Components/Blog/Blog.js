import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css';


const Blog = (props) => {

    const { blogImg, personImg, authorName, publishDate, min, title, hashtag, markRead } = props.blog;

    const handleAddToBookMark = () =>{
        console.log('blog name')
    }
    
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
                <p className='time'>
                    {min} min read  <FontAwesomeIcon onClick={handleAddToBookMark} className='fa-icon' icon= {faBookmark} />
                    </p>
            </div>

            <h2>{title}</h2>
            <p>{hashtag}</p>
            <p className='mark-read'>{markRead}</p>

            <hr />
        </div>

    );
};

export default Blog;