import React from 'react';
import Chart from '../Chart/Chart';
import Chart2 from '../Chart2/Chart2';
import PieChart from '../PieChart/PieChart';

const Dashboard = () => {
    return (
        <div>
            <h1 className='text-center'>Dashboard</h1>
            <div className='d-flex justify-content-center'>
                <Chart></Chart>
                <Chart2></Chart2>
            </div>

        </div>
    );
};

export default Dashboard;