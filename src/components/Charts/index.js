import React from 'react';
import { PieChart, Pie,  Cell, ResponsiveContainer} from 'recharts';


import './index.css'

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
];

const COLORS = ['#98D89E', '#EE8484', '#F6DC7D'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Charts = () => {
    return (
        <div className='time-pie-charts'>
      <div className='charts1'>
        <div className='products-info'>
        <h1 style={{fontSize:'18px'}}>Top Products</h1>
        <p className='date'>May-July 2023 <span> <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688212703/Vector_6_wgskw4.png" alt="down"/></span></p>
        </div>
      
        <div className='pie-chart'>
      <ResponsiveContainer height={250} width={250}>
        <PieChart width={300} height={300}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className='pie-chrt-info'>
        <div className='card-cont'>
            <div className='card1' style={{backgroundColor:"#98D89E"}}></div>
            <div>
            <p className='card-name'>Basic Tees</p>
            <p className='percent'>40%</p>
            </div>
        </div>
        <div className='card-cont'>
            <div className='card1' style={{backgroundColor:"#F6DC7D"}}></div>
            <div>
            <p className='card-name'>Custom Short Pants</p>
            <p className='percent'>30%</p>
            </div>
        </div>
        <div className='card-cont'>
            <div className='card1' style={{backgroundColor:"#EE8484"}}></div>
            <div>
            <p className='card-name'>Super Hoodies</p>
            <p className='percent'>30%</p>
            </div>
        </div>
       
       
        </div>
     
      
      </div>
      </div>

      <div className='time-chart'>
      <div className='products-info'>
        <h1 style={{fontSize:'18px'}}>Today's Scedule</h1>
        <p className='date'>See All <span> <img src="https://res.cloudinary.com/dg0telgxq/image/upload/v1688214856/Vector_7_iamgtk.png" alt="right"/></span></p>
        </div>
        <div className='schedules'>
            <div className='schedule'>
            <img className='line' src ="https://res.cloudinary.com/dg0telgxq/image/upload/v1688219669/Line_6_am3edc.png" alt="line"/>
            <div className='info1'>
                <p className='p12'>Meeting with suppliers from Kuta Bali</p>
                <p className='p23'>14.00-15.00</p>
                <p className='p23'>at Sunset Road, Kuta, Bali</p>
            </div>
            </div>

            <div className='schedule'>
            <img className='line'  src ="https://res.cloudinary.com/dg0telgxq/image/upload/v1688220084/Line_6_1_nwtqty.png" alt="line"/>
            <div className='info1'>
            <p className='p12'>Check operation at Giga Factory 1</p>
                <p className='p23'>18.00-20.00</p>
                <p className='p23'>at Central Jakarta</p>
            </div>
            </div>
            
        </div>
      </div>
      </div>
      
      
      
    );
  
}

export default Charts