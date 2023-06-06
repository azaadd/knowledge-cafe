import React from 'react';
import './Header.css';
import profileImage from '../../images/profile.jpg';


const Header = () => {
    return (
        <div className='header-wrap'>
            <div className='header'>
                <div>
                    <h2>Knowledge Cafe</h2> 
                </div>
                <div>
                    <img src={profileImage} alt="" />
                </div>
            </div>
            <hr />
            
        </div>
    );
};

export default Header;