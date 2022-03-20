import React, { useState } from 'react';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import { Button, TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { fetchWeather } from '../../Redux/weather';

const useStyles = makeStyles({
  root: {
    padding: "10px",
    backgroundColor: "#F7F6F2",
  },
  btn: {
    width: 150,
    height: 40,
    background: "#e67e22",
    marginTop: "10px"
  }

})

export default function Form() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [form,setForm] = useState({
    city:"",
    country:""
  })
  const handleChng = (e)=>{
const {name,value} = e.target;
setForm((pre)=>{return {...pre, [name]:value}})

  }

  const handleSubmit =(e)=>{
    dispatch(fetchWeather(form))
    setForm({
      city:"",
      country:""
    })
  }
  
  return <div>
    <Box className={classes.root}>
      <TextField label="city" variant="standard" sx={{ margin: "5px", marginBottom: "20px" }} value={form.city} name="city" onChange={handleChng}/>
      <TextField label="country" variant="standard" sx={{ margin: "5px", marginBottom: "20px" }} value={form.country} name="country" onChange={handleChng}/>
      <br/>
      <Button variant='contained' className={classes.btn} onClick={handleSubmit}>
      Search</Button>
    </Box>
  </div>;
}
