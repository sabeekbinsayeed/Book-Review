import React from 'react';
import Chart from '../Chart/Chart';
import Chart2 from '../Chart2/Chart2';
import PieChart from '../PieChart/PieChart';

const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <Chart></Chart>
            <PieChart></PieChart>
            <Chart2></Chart2>
        </div>
    );
};

export default Dashboard;