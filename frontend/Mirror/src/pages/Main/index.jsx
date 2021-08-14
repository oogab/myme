import React, { useState } from 'react';
import Wrapper from './styles';
import Clock from '../../components/Clock';
import { withStyles } from '@material-ui/core/styles';
import Weather from '../../components/Weather/WeatherWidget'
import {
   Card, 
   CardActionArea, 
   CardActions, 
   CardContent, 

   Button, 
   Typography,
   LinearProgress,
   Grid,
   Checkbox,
  } from '@material-ui/core';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick

import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import CustomCalendar from '../../components/Calendar/index';
const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);



const Main = props => {
  
  const [value, onChange] = useState(new Date());
  const events = [{ title: "today's event", date: new Date() }];
  return (
        <Wrapper>
          <Grid container spacing={3}>
            
            {/* 날씨*/}
            <Grid item xs={9}>
              <Weather/>
            </Grid>

            {/* 시계 */}
            <Grid item xs={3}  >
              <Clock/>
              <br></br>
            </Grid>

            {/* 달력 */}
            <Grid container item xs={12} spacing={3}>
            <Grid item xs={3} className="routine">
            
            </Grid>
              <Grid item xs={4}></Grid>
              <Grid item xs={5}>
              {/* <Calendar
                onChange={onChange}
                value={value}
                className="react-calendar" 
              /> */}
              {/* 달력 */}
               <CustomCalendar/>
              </Grid>
            </Grid>
          </Grid>
          
        </Wrapper>
      
    
  );
};

export default Main;

