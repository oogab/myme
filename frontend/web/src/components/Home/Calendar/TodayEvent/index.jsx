import React from 'react'
import moment from 'moment';
// @material-ui/icons
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';

const TodayEvent = (props) => {

    const eventStartDay = props.event.start 
    const eventEndDay = props.event.end
    const todayDate = moment().format('YYYY-MM-DD');
    const eventStartDate = moment(eventStartDay).format('YYYY-MM-DD')
    const eventEndDate = moment(eventEndDay).format('YYYY-MM-DD')
    const eventStartTime = moment(eventStartDay).format('HH:mm')
    const bool = props.event.allDay

    function check(){
        console.log("check= "+props.event)
    }
    return(
        <div className='demo-app'>
            <ListItem style={{whiteSpace: 'nowrap'}}>
               {/* <Checkbox
                   checked={checked}
                   onChange={handleToggle}
                   inputProps={{ 'aria-label': 'primary checkbox' }}
                   style={{marginRight: '10px'}}
                   /> */}
                   
                   <CheckIcon style={{marginRight: '20px'}} onClick={check}/>   
               {
                   bool ? <ListItemText style={{width:'30px'}}>종일</ListItemText> : <ListItemText>{eventStartTime}</ListItemText> 
               }
               
               <ListItemText whiteSpace= 'nowrap' style={{width:'30px', whiteSpace:'nowrap', overflow:'hidden', marginRight:'0'}}>{props.event.title}</ListItemText>
           </ListItem>
           <Divider component="li" />
          
            
        </div>
    )
}


export default TodayEvent