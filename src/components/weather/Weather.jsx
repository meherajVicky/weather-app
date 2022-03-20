import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import Chart from '../chart/Chart';
import Form from '../form/Form';
import Information from '../information/Information';


let url = "https://www-cdn.eumetsat.int/files/styles/16_9_large/s3/2020-06/ASpot_Weather.jpg?h=d1cb525d&itok=lvYWh_W8";
const useStyles = makeStyles({
  root: {
    height: "100vh",
    display: "flex",
    alignItem: "center",
    width: "90%",
    margin: "0 auto",

  },
  left: {
    backgroundImage: `url(${url})`,
    height: "80%",
    width: "30%",
    backgroundSize: "cover",
    borderRadius: "20px 0 0 20px"
  },
  right: {
    height: "80%",
    maxWidth: "100%",
    backgroundImage: "linear-gradient(to right,#16A085 , #F4D03F )"
  }

})
export default function Weather() {
  const classes = useStyles();
  return <div style={{marginTop:"50px"}}>
    <Box className={classes.root}>
      <Box className={classes.left}>
        <Information/>
      </Box>
      <Box className={classes.right}>
        <Form />
        <Chart/>
      </Box>
    </Box>
    
  </div>;
}
