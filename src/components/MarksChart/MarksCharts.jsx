import React, { use } from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const MarksCharts = ({ marksPromise}) => {

    const marksDataRes = use(marksPromise)
    const marksData = marksDataRes.data;

    const marksChartData = marksData.map((studentData)=>{
        const student ={
            id: studentData.id,
            name: studentData.name,
            physics: studentData.marks.physics,
            chemistry: studentData.marks.chemistry,
            math: studentData.marks.math,
        }
        const avg = (student.physics+student.chemistry+student.math)/3
        student.avg= avg;
        return  student;
    })

    console.log(marksChartData)
    return (
        <div>

            <BarChart width={500} height={300} data={marksChartData}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Tooltip></Tooltip>
                <Bar dataKey="avg" fill='yellow'></Bar>
                <Bar dataKey="chemistry" fill='green'></Bar>
                <Bar dataKey="physics" fill='blue'></Bar>
                <Bar dataKey="math" fill='purple'></Bar>

            </BarChart>
            
        </div>
    );
};

export default MarksCharts;