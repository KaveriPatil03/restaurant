import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";
import axios from 'axios'; // for making API calls

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const BarGraph = () => {
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'First Dataset',
        data: [],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
      },
      {
        label: 'Second Dataset',
        data: [],
        fill: false,
        borderColor: "#742774",
      },
    ],
  });

  // Fetch customer spending data from dummy API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dummyjsonapi.com/analytics'); // Replace with actual API
        const customers = response.data; // Assuming API returns an array of customers

        const labels = customers.map(customer => customer.name);
        const spendingData = customers.map(customer => customer.total_spending);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Customer Spending',
              data: spendingData,
              fill: false,
              borderColor: "rgba(75,192,192,1)",
            },
          ],
        });
      } catch (error) {
        console.error('Error fetching customer data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='outer-line-chart'>
      <div className="inner-line-chart">
        <div className='line-chart-title'>
          <h3>Customer Spending</h3>
        </div>
        <div className='line-chart'>
          <Line
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  responsive: true,
                },
              },
            }}
            height={300}
            width={600}
          />
        </div>
      </div>
    </div>
  );
};

export default BarGraph;
