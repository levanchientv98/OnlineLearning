import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Jan',
      hour: 1,
      
    },
    {
      name: 'Feb',
      hour: 3,
    
    },
    {
      name: 'Mar',
      hour: 4,
    
    },
    {
      name: 'Apr',
      hour: 5,
      
    },
    {
      name: 'May',
      hour: 2,
      
    },
   
  ];

const DemoColumn = () => {
    return (
        <ResponsiveContainer width="90%" height="80%" >
        <BarChart
          width={300}
          height={100}
          data={data}
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="hour" fill="#CBF4F0" radius={[50, 50, 50, 50]}/>
        </BarChart>
      </ResponsiveContainer>
    );
}
export default DemoColumn;
