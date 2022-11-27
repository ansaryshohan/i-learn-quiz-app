import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend , LineChart, Line} from 'recharts';


const Statistics = () => {
  const statData = useLoaderData()
  const { data } = statData;
  return (
    <div className='p-14 flex items-center justify-evenly'>

      <div>
        <h1 className='text-center text-2xl font-semibold text-[#028090] mb-5'>Bar Chart</h1>
        <BarChart
          width={600}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className='mx-auto'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="total" fill="#028090" />
          {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
        </BarChart>
      </div>
      <div>
        <h1 className='text-center text-2xl font-semibold text-[#028090] mb-5'>Line chart</h1>
      <LineChart
         width={600}
         height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          className='mx-auto'
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="total" stroke=" #028090" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      </div>

    </div>

  );
};

export default Statistics