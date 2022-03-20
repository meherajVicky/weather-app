import { configureStore } from "@reduxjs/toolkit";
import { chartSlice } from "./chart";
import { weatherSlice } from "./weather";
export const Store = configureStore({
  reducer:{
    weather:weatherSlice.reducer,
    chart:chartSlice.reducer,
  }
})