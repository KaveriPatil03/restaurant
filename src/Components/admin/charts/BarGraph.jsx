import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

const BarGraph = ({ data = [] }) => {
  // Check if data is available
  const hasData = data.length > 0;

  const chartData = {
    // labels: hasData ? data.map((item) => item.name) : ["No Data"],
    labels: hasData ? data.map((item) => item.customerName) : ["No Data"],
    datasets: [
      {
        label: "Customer Spending",
        // data: hasData ? data.map((item) => item.totalSpending) : [0],
        data: hasData ? data.map((item) => item.purchaseAmount) : [0],
        fill: false,
        backgroundColor: "rgba(200,200,200,0.2)", // Fallback background color
        borderColor: "rgba(200,200,200,1)", // Fallback border color
      },
    ],
  };

  return (
    <div className="outer-line-chart">
      <div className="inner-line-chart">
        <div className="line-chart-title">
          <h4>{hasData ? "Customer Spending" : "No Data Available"}</h4>
        </div>
        <div className="line-chart">
          <Line
            data={chartData}
            options={{
              plugins: {
                legend: {
                  display: true,
                  responsive: true,
                },
              },
              scales: {
                y: {
                  beginAtZero: true, // Ensure the Y-axis starts at 0
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


