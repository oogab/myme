import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { makeStyles } from '@material-ui/core/styles';
import { CLOSE_CREATE_EVENT_MODAL } from '../../../reducers/modal';
import { OPEN_MODIFY_EVENT_MODAL } from '../../../reducers/modal';
import {  SET_CHOOSED_EVENT,SET_CHOOSED_EVENT_MODAL } from '../../../reducers/calendar';
import { Paper } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 500
  },
  inputDiv:{
      backgroundColor:'white',
      padding:'10px',
      borderRadius:'20px',
      width:'95%',
      height:'30px',
      border:'#66A091 1px solid'
    },
    btn:{
      width: '50%',
      border: 'none',
      padding: '5px',
      borderRadius: '20px',
      height:'40px',
      backgroundColor: '#89DDBF',
      color:'white',
      fontWeight:'bold'
    },
    buttonDiv:{
      marginTop:'20px',
    },
}));

const Calendar = (props) => {
  const dispatch = useDispatch()

  //일정 수정 모달
  function openModifyEventModal(selectInfo){
    dispatch({type: OPEN_MODIFY_EVENT_MODAL});
    dispatch({type: SET_CHOOSED_EVENT_MODAL, data: selectInfo.event});
    console.log(selectInfo.event.backgroundColor)
  }

    return(
        <div className='demo-app'>
            <Paper>
            <div className='demo-app-main' style={{padding: '20px'}}>
           
                <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                }}
                
                views={{
                  monthNames: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
                  dayNames: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"],
                  dayNamesShort:["일", "월", "화", "수", "목", "금", "토"]
                }}

                nextDayThreshold= "09:00:00"
                defaultTimedEventDuration= "01:00:00"
                expandRows= 'true'
                initialView='dayGridMonth'
                locale='ko'
                editable={true}
                selectable={true}
                dayMaxEvents={true}
                events={props.myEvent}
                height='auto'
                eventClick={openModifyEventModal}
                />
            </div>
            </Paper>
        </div>
    )
  }

export default Calendar