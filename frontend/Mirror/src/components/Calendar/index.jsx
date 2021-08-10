import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'
import FullCalendar, { formatDate } from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import actionCreators from './actions'
import { getHashValues } from './utils'

import {
    Modal
  } from '@material-ui/core';


const Calendar = (props) => {
  // handlers for user actions
  // ------------------------------------------------------------------------------------------
  

  
  const handleDateSelect = (selectInfo) => {
    let calendarApi = selectInfo.view.calendar;
    let title = prompt('새로운 일정을 추가해주세요');

    calendarApi.unselect() // clear date selection
    if (title) {
      calendarApi.addEvent({ // will render immediately. will call handleEventAdd
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      }, true) // temporary=true, will get overwritten when reducer gives new events
    }
    return(
        <Modal>
             <input type="text" placeholder="루틴 이름 입력" ></input>
        </Modal>
    )
  }

  const handleEventClick = (clickInfo) => {
    if (window.confirm(`정말 '${clickInfo.event.title}' 를 삭제하시겠습니까?`)) {
      clickInfo.event.remove() // will render immediately. will call handleEventRemove
    }
  }

  // handlers that initiate reads/writes via the 'action' props
  // ------------------------------------------------------------------------------------------

  const handleDates = (rangeInfo) => {
    props.requestEvents(rangeInfo.startStr, rangeInfo.endStr)
      .catch(reportNetworkError)
  }

  const handleEventAdd = (addInfo) => {
    props.createEvent(addInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        addInfo.revert()
      })
  }

  const handleEventChange = (changeInfo) => {
    props.updateEvent(changeInfo.event.toPlainObject())
      .catch(() => {
        reportNetworkError()
        changeInfo.revert()
      })
  }

  const handleEventRemove = (removeInfo) => {
    props.deleteEvent(removeInfo.event.id)
      .catch(() => {
        reportNetworkError()
        removeInfo.revert()
      })
  }
    return(
        <div className='demo-app'>
            <div>
           {/*  오늘의 일정  */}
            {/* {renderSidebarEvent} */}
            </div>
            <div className='demo-app-main'>
                <FullCalendar
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek,timeGridDay'
                }}
                initialView='dayGridMonth'
                editable={true}
                selectable={true}
                selectMirror={true}
                dayMaxEvents={true}
                
                datesSet={handleDates}
                select={handleDateSelect}
                events={props.events}
                eventContent={renderEventContent} // custom render function
                eventClick={handleEventClick}
                eventAdd={handleEventAdd}
                eventChange={handleEventChange} // called for drag-n-drop/resize
                eventRemove={handleEventRemove}
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

function renderSidebarEvent(plainEventObject) {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);  
    var dateString = year + '-' + month  + '-' + day;
    return ( 
      <div>
           <h2 style={{color: 'white'}}>오늘의 일정</h2>
          <ul>
           
        {
            dateString === plainEventObject.start ? 
            <li key={plainEventObject.id}>
            <b>{plainEventObject.start}</b>
            <i>{plainEventObject.title}</i>
          </li>
          : null
        }
        </ul>
      </div>
    )
  }
function reportNetworkError() {
    alert('에러발생')
}

function mapStateToProps() {
const getEventArray = createSelector(
    (state) => state.eventsById,
    getHashValues
)



return (state) => {
    return {
    events: getEventArray(state),
    weekendsVisible: state.weekendsVisible
    }
}
}
  
  export default connect(mapStateToProps, actionCreators)(Calendar)
  
