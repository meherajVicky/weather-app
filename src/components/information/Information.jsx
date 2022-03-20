import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '../../Redux/weather';
import { makeStyles } from '@mui/styles';
// import {SettingsBrightnessIcon,OpacityIcon ,Brightness5Icon, Brightness6Icon,DehazeIcon,CloudIcon } from "@mui/icons-material"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import OpacityIcon from '@mui/icons-material/Opacity';
import Brightness5Icon from '@mui/icons-material/Brightness5';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloudIcon from '@mui/icons-material/Cloud';

const useStyles = makeStyles({
  component: {
      margin: '10px 20px',
      paddingTop:"70px"
  },
  row: {
      padding: 5,
      fontSize: 10,
      letterSpacing: 1,
      display: 'flex',
      textAlign:"center",
      justifyContent:"start",
      color:"red"
  },
  value: {
      color: '#fff',
      marginLeft:"5px",
      display:"block"
  },
  value1: {
    color: '#fff',
    marginLeft:"1px",
    display:"block"
},
  icon: {
      color: 'darkred',
      marginRight: 7
  },
})

export default function Information() {
  const classes = useStyles();
  const {weather_data, weather_status}= useSelector((s)=>s.weather)
  const weather = [weather_data];
 
  const dispatch = useDispatch();
  const getCloudsData = (value) => {
    if(value === 0){
        return 'Clear';
    }else if(value > 1 && value < 100){
        return 'Partially Cloudy';
    }else{
        return 'Cloudy';
    }
}
let form = {
  city:"kolkata",
  country:"india"
}

  useEffect(()=>{
dispatch(fetchWeather(form))
  },[])
  return <div>
   
    <Box className={classes.component}>
    <Typography>today weather</Typography>
   {weather.length?(<>{weather.map((weather_data,i)=>(<div key={i}>
    <Typography className={classes.row}>
        <LocationOnIcon className={classes.icon}/>
        Location:  <Box className={classes.value} component="span">{weather_data?.name}, {weather_data?.sys?.country} </Box>
        </Typography>
                 <Typography className={classes.row}>
                  <SettingsBrightnessIcon className={classes.icon} />
                  Temperature:  <Box className={classes.value} component="span">{weather_data?.main?.temp}°C </Box></Typography>
                <Typography className={classes.row}>
                  <OpacityIcon className={classes.icon} />
                  Humidity:  <Box className={classes.value} component="span">{weather_data?.main?.humidity}% </Box></Typography>
                <Typography className={classes.row}>
                  <Brightness5Icon className={classes.icon} />
                  Sun Rise:  <Box className={classes.value} component="span">
                    {new Date(weather_data?.sys?.sunrise * 1000).toLocaleTimeString()} </Box></Typography>
                <Typography className={classes.row}>
                  <Brightness6Icon className={classes.icon} />
                  Sun Set: <Box className={classes.value} component="span">{new Date(weather_data?.sys?.sunset * 1000).toLocaleTimeString()} </Box></Typography> 
                <Typography className={classes.row}>
                  <DehazeIcon className={classes.icon} />Condition:  <Box className={classes.value} component="span">{weather_data?.weather?.length?(weather_data?.weather[0]?.main):null} </Box></Typography>
                 <Typography className={classes.row}>
                  <CloudIcon className={classes.icon} />Clouds:  <Box className={classes.value1} component="span">{getCloudsData(weather_data?.clouds?.all)} </Box>
                  </Typography> 
   </div>))}</>):(<h1>loading</h1>)}
   
    </Box>
  </div>;
}
