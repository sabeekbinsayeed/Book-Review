import React from 'react';
import './Review.css'

const Review = (props) => {
    // console.log(props)
    const { id, comment, name, rating } = props.review


    return (
        <div>
            <div className="card mx-3 p-3" >

                <div className="card-body ">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text w-75">{comment}</p>
                    <p className="card-text">rating : {rating}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Review;