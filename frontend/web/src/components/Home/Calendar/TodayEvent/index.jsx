import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment';
import moment from 'moment';
const TodayEvent = (props) => {

var today = new Date();
var year = today.getFullYear();
var month = ('0' + (today.getMonth() + 1)).slice(-2);
var day = ('0' + today.getDate()).slice(-2);  
// var todayDate = year + '-' + month  + '-' + day;
var eventStartDay = props.event.start 
var eventEndDay = props.event.end

var todayDate = moment().format('YYYY-MM-DD');
var eventStartDate = moment(eventStartDay).format('YYYY-MM-DD')
var eventEndDate = moment(eventEndDay).format('YYYY-MM-DD')

    return(
        <div className='demo-app'>
           
           {
               moment(eventStartDate).isSame(moment(todayDate)) || moment(eventEndDate).isSame(moment(todayDate))?
               <>
               
               <h4>- {props.event.title}</h4>
               </>
               : null
           }
       

        </div>
    )
}


export default TodayEvent