import React from 'react';
import './Header.css';
import profileImage from '../../images/profile.jpg';


const Header = () => {
    return (
        <div className='header'>
            <img src={profileImage} alt="" />
        </div>
    );
};

export default Header;