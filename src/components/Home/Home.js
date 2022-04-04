import React from 'react';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <h1>home</h1>
            <Banner></Banner>
            <Reviews info='home'></Reviews>
        </div>
    );
};

export default Home;