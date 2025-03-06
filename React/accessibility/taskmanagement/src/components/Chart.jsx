import * as React from 'react';
import { LineChart, BarChart } from '@mui/x-charts';

export default function BasicLineChart() {
  return (
    <div className='flex p-5 gap-5 items-center justify-center' role='complementary'>
    <div className=' bg-[#f0f0f0] rounded-lg' >
        <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        },
      ]}
      width={500}
      height={300}
      tabIndex={0}
    /></div><div className='flex bg-[#f0f0f0] rounded-lg'>
     <BarChart
      xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
      series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
      width={500}
      height={300}
      tabIndex={0}
    />
    </div></div>
    
  );
}