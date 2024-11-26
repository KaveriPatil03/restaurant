import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = ({ data = [] }) => {
  // Check if data is empty and provide fallback
  const hasData = data.length > 0;

  const chartData = {
    labels: hasData ? data.map(item => item.productName) : ['No Data'],
    datasets: [
      {
        data: hasData ? data.map(item => item.totalSales) : [1],
        backgroundColor: hasData
          ? ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(135, 173, 150)']
          : ['rgb(200, 200, 200)'], // Default color for fallback
      },
    ],
  };

  return (
    <div className='top-products'>
      <div className='pie-chart'>
        <div className="chart-heading">
          <h4>{hasData ? 'Product Sales' : 'No Data Available'}</h4>
        </div>
        <div style={{ width: '80%' }} className='chart'>
          <Pie
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                },
              },
              responsive: true,
              maintainAspectRatio: false,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
