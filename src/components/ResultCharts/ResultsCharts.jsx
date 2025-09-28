
import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';


const resultData = [
  {
    "id": 1,
    "name": "Rahim",
    "physics": 85,
    "chemistry": 78,
    "math": 92
  },
  {
    "id": 2,
    "name": "Karim",
    "physics": 74,
    "chemistry": 81,
    "math": 88
  },
  {
    "id": 3,
    "name": "Joya",
    "physics": 91,
    "chemistry": 89,
    "math": 95
  },
  {
    "id": 4,
    "name": "Sumi",
    "physics": 67,
    "chemistry": 72,
    "math": 70
  },
  {
    "id": 5,
    "name": "Rakib",
    "physics": 80,
    "chemistry": 76,
    "math": 84
  }
]


const ResultsCharts = () => {
    return (
        <div>
            <LineChart width={500} height={500} data={resultData}
            >
                <XAxis dataKey={"name"}></XAxis>
                <YAxis  ></YAxis>
                <Line dataKey="math" stroke='blue'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='red'></Line>
            </LineChart>
            
        </div>
    );
};

export default ResultsCharts;