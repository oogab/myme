import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import Moment from 'react-moment';
import moment from 'moment';
import Checkbox from "@material-ui/core/Checkbox";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
// @material-ui/icons
import Edit from "@material-ui/icons/Edit";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
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
var eventStartTime = moment(eventStartDay).format('hh:mm')
var eventEndTime = moment(eventEndDay).format('HH:mm')
  const [checked, setChecked] = React.useState(false);
  const [todayEventNull, setTodayCheckedNull] = React.useState(false)
  const handleToggle = (event) => {
    setChecked(event.target.checked);
  };
  const eventCheck = (e) => {
      setTodayCheckedNull(true)
  }
  const bool = props.event.allDay
    return(
        <div className='demo-app'>
           
           {
               moment(eventStartDate).isSame(moment(todayDate)) || moment(eventEndDate).isSame(moment(todayDate))?
         
               <>
                    <ListItem>
                        <Checkbox
                            checked={checked}
                            onChange={handleToggle}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                            style={{marginRight: '10px'}}
                            />
                        {
                            bool ? <ListItemText>종일</ListItemText> : <ListItemText>{eventStartTime}</ListItemText> 
                        }
                        <ListItemText>{props.event.title}</ListItemText>
                        
                    </ListItem>
                    <Divider component="li" />
                    </>
                    
               : null
           }
 
               
        </div>
    )
}


export default TodayEvent