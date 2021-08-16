import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import googleCalendarPlugin from '@fullcalendar/google-calendar';

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
        <div className='demo-app' style={{marginTop:'30px'}}>
            {/* <Paper> */}
            {/* <div className='demo-app-main' > */}
           
                <FullCalendar
                height='auto'
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin ]}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                }}
                formatDate={{day:'numeric'}}
                expandRows= 'true'
                initialView='dayGridMonth'
                locale='ko'
                dayCellContent={(info)=>{return info.date.getDate()}}
                buttonText={{today:'오늘'}}
                editable={true}
                selectable={true}
                // height='600px'
                dayMaxEvents={true}
                events={events}
                eventClick={openModifyEventModal}
                />
            {/* </div> */}
            {/* </Paper> */}
        </div>
    )
  }

export default Calendar