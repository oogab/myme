import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import { OPEN_MODIFY_EVENT_MODAL } from '../../../reducers/modal';
import { SET_CHOOSED_EVENT_MODAL } from '../../../reducers/calendar';
import { Paper } from '@material-ui/core'
import { months, monthsShort } from 'moment'

const Calendar = (props) => {
  const dispatch = useDispatch()
  const {events} = useSelector((state) => state.calendar)
  //일정 수정 모달
  function openModifyEventModal(selectInfo){
    dispatch({type: OPEN_MODIFY_EVENT_MODAL});
    dispatch({type: SET_CHOOSED_EVENT_MODAL, data: selectInfo.event});
    // console.log(selectInfo.event.backgroundColor)
  }

    return(
        <div className='demo-app'>
            <Paper>
            <div className='demo-app-main' style={{padding: '20px'}}>
           
                <FullCalendar
                height='auto'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                  
                }}
                
                formatDate={{day:'numeric'}}
                expandRows= 'true'
                initialView='dayGridMonth'
                locale='ko'
                views={{
                  
                  // months: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
                  // monthsShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월']
                }}
                // dayHeaderFormat={{
                //   weekday: 'short',
                //   weekNamesShort:['월','화','수','목','금','토','일']
                // }}
                editable={true}
                selectable={true}
                height='600px'
                dayMaxEvents={true}
                events={events}
                eventClick={openModifyEventModal}
                />
            </div>
            </Paper>
        </div>
    )
  }

export default Calendar