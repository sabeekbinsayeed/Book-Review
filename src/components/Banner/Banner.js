import React from 'react';
import img from '../../images/photo2.jpeg'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-info'>

            <div className='book-info'>
                <h1>Book Review</h1>
                <h5 className='mt-5'>We give review of the most famous books. Also you will get reiviews of the latest books released. You can also buy books from us and also we have return policy</h5>
                <button className='ps-3 pe-3 pt-2 pb-2 ms-2 mt-3 read-button'>Read Blogs</button>
            </div>
            <img src={img} alt="" />
        </div>
    );
};

export default Banner;