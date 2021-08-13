import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { OPEN_CREATE_EVENT_MODAL } from '../../../reducers/modal';
import { CLOSE_CREATE_EVENT_MODAL } from '../../../reducers/modal';
import { OPEN_MODIFY_EVENT_MODAL } from '../../../reducers/modal';
import { CLOSE_MODIFY_EVENT_MODAL } from '../../../reducers/modal';
import { CREATE_EVENT_REQUEST } from '../../../reducers/calendar';
import { Button } from '@material-ui/core'

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
  // handlers for user actions
  // ------------------------------------------------------------------------------------------
  const dispatch = useDispatch()
  //일정 추가 모달
  const openCreateEventModal=()=>{
    dispatch({type: OPEN_CREATE_EVENT_MODAL});
  }
  //일정 수정 모당
  const openModifyEventModal=()=>{
    dispatch({type: OPEN_MODIFY_EVENT_MODAL});
  }

  const { createEventModal } = useSelector((state) => state.modal)
  function closeRoutine(){
      dispatch({
        type: CLOSE_CREATE_EVENT_MODAL
      })
  }

    const classes = useStyles()
  //캘린더에 일정 추가
 
  const [title, setTitle] = useState('')
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const add = useCallback(() => {
    dispatch({
      type: CREATE_EVENT_REQUEST,
      data:{
        title
      }
    })
  })

  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar
 

    //calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
  }

  const handleDates = (rangeInfo) => {
    props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }
  const handleEventClick = (clickInfo) => {
    
    console.log(clickInfo.event.title)
  }

    return(
        <div className='demo-app'>
            <div>
           
            </div>
            <div className='demo-app-main'>
           
                <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev',
                    center: 'title',
                    right: 'today next'
                }}
                views= {{
                  dayGridMonth: { // name of view
                    titleFormat: {year: 'numeric', month: '2-digit'},
                    meridiem: 'short'
                    // other view-specific options here
                  },
                  week:{

                  }
                }}
                meridiem= 'short'
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                // dayMaxEvents={true}
                events={props.myEvent}
                // datesSet={handleDates}
                eventContent={renderEventContent} // custom render function
                eventClick={openModifyEventModal}
                //select={openModal}
                /*events={props.events}
                eventAdd={handleEventAdd}
                eventChange={handleEventChange} // called for drag-n-drop/resize
                eventRemove={handleEventRemove}*/
                />
               
            </div>
        </div>
    )
  }
  function renderEventContent(eventInfo) {
      return (
        <>
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </>
      )
  }

function reportNetworkError() {
  alert('에러발생')
}
const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(Calendar)