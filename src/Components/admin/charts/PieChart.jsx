import React, { useEffect, useState } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import axios from 'axios'; // for making API calls

ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(135, 173, 150)'],
      },
    ],
  });

  // Fetch product sales data from dummy API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjsonapi.com/analyics'); // Replace with actual API
        const products = response.data; // Assuming API returns an array of products

        const labels = products.map(product => product.product_name);
        const data = products.map(product => product.total_sales);

        setChartData({
          labels,
          datasets: [
            {
              data,
              backgroundColor: ['rgb(255, 99, 132)', 'rgb(255, 205, 86)', 'rgb(135, 173, 150)'],
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='top-products'>
      <div className='pie-chart'>
        <div className="chart-heading">
          <h3>Top Products</h3>
        </div>
        <div style={{ width: '70%' }} className='chart'>
          <Pie
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  position: 'right',
                },
                responsive: true,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default PieChart;
