import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';

import './index.css';

const data = [
  {
    name: 'WEEK 1',
    G: 100,
    U: 200,
  },
  {
    name: 'WEEK 2',
    G: 410,
    U: 90,
  },
  {
    name: 'WEEK 3',
    G: 150,
    U: 450,
  },
  {
    name: 'WEEK 4',
    G: 430,
    U: 100,
  },
  {
    name: 'WEEK 5',
    G: 180,
    U: 500,
  },
  {
    name: 'WEEK 6',
    G: 230,
    U: 430,
  },
];

const LineChart1 = () =>{
    return (
        <div className='line-chart'>
<div className='info1'>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <div className="p1">
      <h3 className='act'>Activities</h3>
      <p className='date'>May-July 2023 <span> <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688212703/Vector_6_wgskw4.png" alt="down" /></span></p>
    </div>
    <div className='details'>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' ,marginRight:'25px'}} >
        <div className='card123'></div>
        <p className='card-name'>Guest</p>
      </div>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: 'center' }}>
        <div className='card223'></div>
        <p className='card-name'>User</p>
      </div>
    </div>
  </div>
</div>
      <ResponsiveContainer width="100%" height="70%">
        <LineChart width={100} height={100} data={data}>
          <XAxis dataKey="name" strokegap={140} strokeWidth={1}/>
          <YAxis ticks={[0, 100, 200, 300, 400, 500]} />
          <Tooltip />
          <Line type="monotone" dataKey="G" stroke="#9BDD7C" strokeWidth={3} />
          <Line type="monotone" dataKey="U" stroke="#E9A0A0" strokeWidth={3} />
          <ReferenceLine y={100} stroke="#EAEAEA" strokeWidth={1} />
          <ReferenceLine y={200} stroke="#EAEAEA" strokeWidth={1} />
          <ReferenceLine y={300} stroke="#EAEAEA" strokeWidth={1} />
          <ReferenceLine y={400} stroke="#EAEAEA" strokeWidth={1} />
          <ReferenceLine y={500} stroke="#EAEAEA" strokeWidth={1} />
        </LineChart>
      </ResponsiveContainer>
      </div>
    );
  }


  export default LineChart1
