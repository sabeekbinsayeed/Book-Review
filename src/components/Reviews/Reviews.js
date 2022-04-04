import React, { useEffect, useState } from 'react';
import { createSearchParams } from 'react-router-dom';
import useReviews from '../hooks/useReviews';
import Review from '../Review/Review';
import './Reviews.css'

const Reviews = (props) => {


    const [reviews, setReviews] = useReviews();
    const slicedReviews = reviews.slice(0, 3)
    const { info } = props
    const runReviews = info !== 'home' ? reviews : slicedReviews;
    return (
        <div className='allReviews'>
            <h1>Reviews</h1>
            {/* <h1>{reviews.length}</h1>
            <h2>{slicedReviews.length}</h2> */}
            <div className="reviews">
                {
                    runReviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;