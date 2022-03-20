import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const api_key = "3a55e25346e6d3c36dc2076cfed29859";


export const fetchChart = createAsyncThunk("fetchforchart",async()=>{
  try {
    const res = await axios.get(`http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=40&lon=40&appid=${api_key}`)

    return res?.data
  } catch (a) {
    console.log(a);
  }
})

const initialState = {
  chart_data: [],
  chart_status:"idle"
};

export const chartSlice = createSlice({
  name: "chart",
  initialState,
 extraReducers:{
[fetchChart.pending]:(state)=>{
  
  state.chart_status= "loading"
},
[fetchChart.fulfilled]:(state,{payload})=>{
  let temp = [];
  //map array upto length of 24
  for (let i = 0; i < 24; i++) {
    let obj = {
      date: new Date(payload.list[i].dt).toLocaleDateString("en-US"),
      co: payload.list[i].components.co,
      nh3: payload.list[i].components.nh3,
      no: payload.list[i].components.no,
      no2: payload.list[i].components.no2,
      o3: payload.list[i].components.o3,
      pm2_5: payload.list[i].components.pm2_5,
      pm10: payload.list[i].components.pm10,
      so2: payload.list[i].components.so2,
    };

    temp.push(obj);
  }
  state.chart_data = temp;
  state.chart_status = "idle";
}
,[fetchChart.rejected]:(state)=>{
  
  state.chart_status= "idle"
}
 }
});

  