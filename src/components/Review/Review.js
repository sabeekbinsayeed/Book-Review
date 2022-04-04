import React from 'react';

const Review = (props) => {
    // console.log(props)
    const { id, comment, name, rating } = props.review


    return (
        <div>
            <div className="card" >

                <div className="card-body mx-3 p-3">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{comment}</p>
                    <p className="card-text">rating : {rating}</p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                </div>
            </div>
        </div>
    );
};

export default Review;