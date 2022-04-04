import React from 'react';
import img from '../../images/photo2.jpeg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-info'>

            <div className='book-info'>
                <h1>Book Review</h1>
                <p>We give review of the most famous books. Also you will get reiviews of the latest books released. You can also buy books from us and also we have return policy</p>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;