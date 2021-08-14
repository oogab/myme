import React, {useState, useCallback} from 'react';
import { useSelector, useDispatch } from 'react-redux';
  
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Button } from '@material-ui/core'
import { CirclePicker } from 'react-color';

//icons
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';
import {Close} from '@material-ui/icons';

import { withStyles, Switch, Typography } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';

import { CLOSE_MODIFY_EVENT_MODAL, OPEN_CONFIRM_MODAL, SET_ALERT_MODAL_FUNCTION, OPEN_ALERT_MODAL } from '../../../../reducers/modal';
import { CREATE_EVENT_REQUEST, DELETE_EVENT_REQUEST, MODIFY_EVENT_REQUEST,
  SET_CHOOSED_EVENT_TITLE, SET_CHOOSED_EVENT_START, SET_CHOOSED_EVENT_END, SET_CHOOSED_EVENT_ALLDAY, SET_CHOOSED_EVENT_COLOR } from '../../../../reducers/calendar';

function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
    overflow:'auto'
  };
}


const customStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: '16px',
    borderRadius:'10px',
    maxWidth:'90%',
    maxHeight:'90%'
  },
  container: {
    // display: 'flex',
    flexWrap: 'wrap',
  },
  day:{
    textAlign: 'center',
    marginBottom:'10px'
  },
  text:{
    textAlign: "center",
    marginBottom: "10px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 230,
  },
  switchField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: 60,
  },
  inputDiv:{
    backgroundColor:'white',
    padding:'10px',
    borderRadius:'20px',
    marginBottom:'10px',
    width:'100%',
    border:'#66A091 1px solid'
  },
  buttonRight:{
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
    marginTop:'10px',
  },
  floatRight:{
    float:'right',
    color: 'lightgray',
  },
  switch:{
    marginTop: '-7px',
    
  },
  color: {
    width: '36px',
    height: '14px',
    borderRadius: '2px',
    background: '#89DDBF',
  },
  swatch: {
    padding: '5px',
    background: '#fff',
    borderRadius: '1px',
    boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
    display: 'inline-block',
    cursor: 'pointer',
    
  },
  popover: {
    position: 'right',
    zIndex: '1',
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
    
  },
}));

function ModifyModal(props) {

  const dispatch = useDispatch();
  const classes = customStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const {eventInfo} = useSelector((state) => state.calendar)
  const { modifyEventModal } = useSelector((state) => state.modal)

  const [title, setTitle] = useState(eventInfo.title)
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const [startDate, setStartDate] = useState(eventInfo.start);
  const startDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(startDate)
  };

  const [endDate, setEndDate] = useState(eventInfo.start);
  const endDateChange = (e) => {
    setEndDate(e.target.value);
    console.log('end:'+endDate)
  };
 const bool = eventInfo.allDay
  const [allDay, setAllDay] = useState({bool});
  const onChangeSwitch = () =>{
    console.log(eventInfo.allDay)
    setAllDay((prev) => !prev)
  }
  
  const [click, setClick] = useState(false)
  const onChangeClick = () =>{
      setClick(true);
  }
  const onChangeClose = () => {
      setClick(false);
  }
  const [color, setColor] = useState(eventInfo.backgroundColor)
  const onChangeColor = (color)=>{
    setColor(color.hex);
  }
  
  function changeTitle(e){
    dispatch({type: SET_CHOOSED_EVENT_TITLE, title:e.target.value})
  }
  function closeModifyEvent(){  
      dispatch({
        type: CLOSE_MODIFY_EVENT_MODAL
      })
    }

  function modifyEvent(){
    dispatch({
      type: MODIFY_EVENT_REQUEST,
      data:{
        title: title,
        color: color,
        start: startDate,
        end: endDate,
        allDay: allDay
      },
      id: eventInfo.id
    })
    closeModifyEvent()
  }

  function setModifyEvent(){
    if(validate()){
      
      dispatch({type: SET_ALERT_MODAL_FUNCTION, alertModalFunction: modifyEvent})
      
      dispatch({type: OPEN_ALERT_MODAL, message:'일정을 수정하시겠습니까?'})
      
    }
  }

  function deleteEvent(){
    dispatch({type: DELETE_EVENT_REQUEST, id:eventInfo.id })
    closeModifyEvent()
  }
  function setDeleteEvent(){
      dispatch({type: SET_ALERT_MODAL_FUNCTION, alertModalFunction: deleteEvent})
      dispatch({type: OPEN_ALERT_MODAL, message:'일정을 삭제하시겠습니까?'})
  }

  const validate = () =>{
    console.log('start: '+eventInfo.start)
      console.log('bool: '+bool)
    let titlesKorean = ['일정을','시작일을', '종료일을']
    let titlesEnglish =[eventInfo.title, eventInfo.start, endDate]
    for(let i=0;i<titlesKorean.length;i++){
      if(!titlesEnglish[i]){
        dispatch({
          type:OPEN_CONFIRM_MODAL,
          message:titlesKorean[i]+' 입력해주세요'
        })
        return false;
      }
    }
    return true;
  }
   const body = (
    <div style={modalStyle} className={classes.paper}>
    <div>
   <h2 id="simple-modal-title" style={{marginBottom: "10px", float:'left'}}>일정 수정</h2><Close onClick={closeModifyEvent} style={{float:'right'}}></Close>
   </div>
   <div>
   <input className={classes.inputDiv} defaultValue={eventInfo.title} onChange={changeTitle}></input>

    <div className={classes.inputDiv}>
      <div className={classes.inputDiv} style={{border:'none'}}>
        <span className={classes.text}>종일</span><div className={classes.floatRight}><Switch className={classes.switch} checked={allDay} onChange={onChangeSwitch}/></div>
      </div>
        {
          allDay ? <>
            <div className={classes.inputDiv} style={{border:'none'}}>
              <span className={classes.text} style={{marginTop:'100px'}}>시작일</span>
              <TextField
                  id="date"
                  type="date"
                  onChange={startDateChange}
                  defaultValue={eventInfo.start}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{float: 'right', marginTop: '-5px'}}
                  />
            </div>
            <div className={classes.inputDiv} style={{border:'none'}}>
              <span className={classes.text}>종료일</span>
              <TextField
                  id="date"
                  type="date"
                  onChange={endDateChange}
                  defaultValue={eventInfo.end}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{float: 'right', marginTop: '-5px'}}
                  />
            </div>
            </>: 
            <>
            <div className={classes.inputDiv} style={{border:'none'}}>
              <span className={classes.text}>시작일</span>
              <TextField
                  id="datetime-local"
                  type="datetime-local"
                  onChange={startDateChange}
                  defaultValue={eventInfo.start}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{float: 'right', marginTop: '-5px'}}
                  />
            </div>
            <div className={classes.inputDiv} style={{border:'none'}}>
              <span className={classes.text}>종료일</span>
              <TextField
                  id="datetime-local"
                  type="datetime-local"
                  onChange={endDateChange}
                  // defaultValue={eventInfo.end}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  style={{float: 'right', marginTop: '-5px'}}
                  />
            </div>
            </>
        }  
    </div>
    <div className={classes.inputDiv} style={{padding: '20px'}}>
   
      <span className={classes.text}> <LocalOfferTwoToneIcon width="100"/></span>
      {/* <div className={classes.floatRight}> */}
        <div className={ classes.swatch } onClick={ onChangeClick } onChange={onChangeColor} style={{float:'right'}}>
            <div className={ classes.color } style={{background: eventInfo.backgroundColor}}/>
            </div>
        { 
            click ? 
            <div className={ classes.popover } style={{display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',}}>
                <div className={ classes.cover } onClick={ onChangeClose }/>
                <CirclePicker defaultValue={ color } onChange={ onChangeColor }/>
            </div>: null 
        }
      {/* </div> */}
    
    </div>
  </div>
<div className={classes.buttonDiv}>
  <button className={classes.buttonRight +' btn'} onClick = {setModifyEvent}>수정</button>
  <button className={classes.buttonRight +' btn'} style={{backgroundColor: '#776D61'}} onClick={setDeleteEvent}>삭제</button>
</div>
</div>
  );
  
  return (
    <Modal
    open={modifyEventModal}
    onClose={closeModifyEvent}
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    >
      {body}
    </Modal>
  );


}

export default ModifyModal;