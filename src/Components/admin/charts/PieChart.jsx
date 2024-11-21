import React from 'react'
import { Link } from 'react-router-dom'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
// import LineGraph from './LineGraph';

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend
);

const PieChart = () => {

    const data = {
        labels: ["Basic Tees", "Custom Short Pants", "Super Hoodies"],
        datasets: [
            {
                data: [31, 14, 55],
                backgroundColor: ['rgb(255, 99, 132)',
                    'rgb(255, 205, 86)',
                    'rgb(135, 173, 150)']
            }
        ],

    };

  return (
    <>
      <div className='top-products'>


<div className='todays-schedule'>
   {/* <LineGraph /> */}
</div>
<div className='pie-chart'>
    <div className="chart-heading">
        {/* <h3>Top Products</h3>
        <select name="" id="">
            <option value="">May - june2021</option>
            <option value="">May - june2021</option>
            <option value="">May - june2021</option>

        </select> */}
    </div>
    <div style={{
        width: "70%"
    }} className='chart'>
        <Pie
            data={data}
            options={{
                plugins: {
                    legend: {
                        display: true,
                        position: 'right',
                        // labels: {
                        //     color: 'rgb(255, 99, 132)',

                        // }
                    },
                    responsive: true
                }
            }}
        ></Pie>
    </div>
</div>
</div>
    </>
  )
}

export default PieChart