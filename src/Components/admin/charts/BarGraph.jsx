import React from 'react'
// import { Line } from "react-chartjs-2";
import { Line } from 'react-chartjs-2';
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJs.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement
);

const BarGraph = () => {

    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
            {
                label: "First dataset",
                data: [33, 53, 85, 41, 44, 65],
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            },
            {
                label: "Second dataset",
                data: [33, 25, 35, 51, 54, 76],
                fill: false,
                borderColor: "#742774"
            }
        ]
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                responsive: true,
            }
        }
    };

    return (
        <div className='outer-line-chart'>
            <div className="inner-line-chart">
                <div className='line-chart-title'>
                    {/* <p><h3>Activities</h3></p>
                    <select name="" id="">
                        <option value="May - June 2021">May - June 2021</option>
                        <option value="May - June 2021">May - June 2021</option>
                        <option value="May - June 2021">May - June 2021</option>
                        <option value="May - June 2021">May - June 2021</option>
                    </select> */}
                </div>
                
                <div className='line-chart'>
                    <Line
                        data={data}
                        options={options}
                        height={300}  // Set the height
                        width={600}   // Set the width
                    />
                </div>
            </div>
        </div>
    );
};

export default BarGraph;
