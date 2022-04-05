import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Chart2 from '../Chart2/Chart2';
import PieChart from '../PieChart/PieChart';
import Reviews from '../Reviews/Reviews';
import './Home.css'

const Home = () => {
    const navigate = useNavigate()
    return (
        <div>

            <Banner></Banner>
            <Reviews info='home'></Reviews>
            <div className='button-div'>
                <button onClick={() => navigate('/reviews')} className='button-review mt-5'>See all</button>

            </div>

        </div>
    );
};

export default Home;