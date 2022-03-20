import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
const api_key = "3a55e25346e6d3c36dc2076cfed29859";



export const fetchWeather = createAsyncThunk("weatherFetcxh",async({city,country})=>{
try {
  const res = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${api_key}&units=metric`);
  return res?.data;
} catch (error) {
  console.log(error);
}
})


const initialState = {
  weather_data: [],
  weather_status:"idle"
};

export const weatherSlice = createSlice({
  name: "weath",
  initialState,
  reducers: {},
  extraReducers:{
[fetchWeather.pending]:(state)=>{

state.weather_status="loading"
},[fetchWeather.fulfilled]:(state,{payload})=>{
  state.weather_status="idle"
  state.weather_data = payload;
  },
  [fetchWeather.rejected]:(state)=>{
    state.weather_data= null;
    state.weather_status="idle"
    },

  }
});


