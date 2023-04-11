import React, { PureComponent } from 'react';
import "./Statistics.css"
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,

} from 'recharts';

const assignmentMarks = [
    {
        name: 'A1',
        marks: 57,
    },
    {
        name: 'A2',
        marks: 60,
    },
    {
        name: 'A3',
        marks: 60,
    },
    {
        name: 'A4',
        marks: 55,
    },
    {
        name: 'A5',
        marks: 60,
    },
    {
        name: 'A6',
        marks: 60,
    },
    {
        name: 'A7',
        marks: 60,
    },
    {
        name: 'A8',
        marks: 60,
    },
];
const Statistics = () => {
    return (
        <div>
            <div className={`banner jobDetails bg-slate-100 text-center`}>
                <h2 className='pb-10'>Assignment Analytics</h2>
            </div>

         <div className='chart'>
           
         <ComposedChart
                width={500}
                height={400}
                data={assignmentMarks}
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 20,
                    left: 20
                }}
            >
                <CartesianGrid stroke="#f5f5f5" />
                <XAxis dataKey="name"  />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="marks" barSize={20} fill="#413ea0" />
                <Line type="monotone" dataKey="marks" stroke="#ff7300" />
            </ComposedChart>
            <p className='text-center font-bold text-3xl'>Avg Assignment Mark : 59.00</p>
         </div>

        </div>
    );
};

export default Statistics;