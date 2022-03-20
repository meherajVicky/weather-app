
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';
import { fetchChart } from '../../Redux/chart';

export default function Chart() {
  const {chart_data,chart_status} = useSelector((s)=>s.chart)
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchChart())
  },[dispatch])


  return (
    <div>
    
       
      <Box sx={{ margin: 1, flex: 0 }}>
        <BarChart width={900} height={400} data={chart_data}>
          <CartesianGrid strokeDasharray="3 3" />
        
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />

          <Bar dataKey="co" fill="#BF3325" />
          <Bar dataKey="nh3" fill="#1B98F5" />
          <Bar dataKey="no" fill="#38CC77" />
          <Bar dataKey="no2" fill="#82ca9d" />
          <Bar dataKey="o3" fill="#82ca9d" />
          <Bar dataKey="pm2_5" fill="#82ca9d" />
          <Bar dataKey="pm10" fill="#82ca9d" />
        </BarChart>
      </Box>
    </div>
  );
}