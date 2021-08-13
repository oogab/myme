import React, {useState, useCallback} from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
  
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { CLOSE_MODIFY_EVENT_MODAL } from '../../../../reducers/modal';
import { CREATE_EVENT_REQUEST } from '../../../../reducers/calendar';
import { Button } from '@material-ui/core'
import { CirclePicker } from 'react-color';

//icons
import FirstPageTwoToneIcon from '@material-ui/icons/FirstPageTwoTone';
import LastPageTwoToneIcon from '@material-ui/icons/LastPageTwoTone';
import LocalOfferTwoToneIcon from '@material-ui/icons/LocalOfferTwoTone';

import { withStyles, Switch, Typography } from '@material-ui/core/';
import { teal } from '@material-ui/core/colors';


const TealSwitch = withStyles({
    switchBase: {
      color: teal[300],
      '&$checked': {
        color: teal[500],
      },
      '&$checked + $track': {
        backgroundColor: teal[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
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
      
        // position: 'right',
        // zIndex: '1',
      },
      cover: {
        position: 'fixed',
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
        
      },
}));

const ModifyEvent = (props) => {

  const dispatch = useDispatch()

    const { modifyEventModal } = useSelector((state) => state.modal)
    function closeModifyEvent(){
        dispatch({
          type: CLOSE_MODIFY_EVENT_MODAL
        })
    }

    const classes = useStyles()
  //캘린더에 일정 추가
  const today = new Date().toISOString().replace(/T.*$/, '');

  const [title, setTitle] = useState('')
  const onChangeTitle = useCallback((e) => {
    setTitle(e.target.value)
  }, [])

  const [startDate, setStartDate] = useState(today);
  const startDateChange = (e) => {
    setStartDate(e.target.value);
    console.log(startDate)
  };

  const [endDate, setEndDate] = useState(today);
  const endDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const [allDay, setAllDay] = useState(true);
  const onChangeSwitch = () =>{
    setAllDay((prev) => !prev)
  }
  
  const [click, setClick] = useState(false)
  const onChangeClick = () =>{
      setClick(true);
  }
  const onChangeClose = () => {
      setClick(false);
  }
  const [color, setColor] = useState('#89DDBF')
  const onChangeColor = (color)=>{
    setColor(color.hex);
  }

  const add = useCallback(() => {
    console.log(startDate)
    dispatch({
      type: CREATE_EVENT_REQUEST,
      data:{
        title,
        color,
        start : startDate,
        end : endDate,
        allDay
      }
    })
  },[title, color, startDate, endDate, allDay]);

    return(
              
        <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={modifyEventModal}
        onClose={closeModifyEvent}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={modifyEventModal}>
          <div className={classes.paper}>
            <h1 id="transition-modal-title">{today}</h1>
            <input type="text" className={classes.inputDiv} placeholder="일정 입력" width="200px" value={title} onChange={onChangeTitle}></input>
            <form className={classes.container} noValidate>
                
                <Typography className={classes.textField}>종일</Typography><TealSwitch className={classes.switchField} checked={allDay} onChange={onChangeSwitch}/>
                {
                    allDay ? <> 
                    <FirstPageTwoToneIcon className={classes.textField} width="100"/>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue={today}
                        onChange={startDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    
                    <LastPageTwoToneIcon className={classes.textField} width="100"/>
                    <TextField
                        id="date"
                        type="date"
                        defaultValue={today}
                        onChange={endDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /></>: 
                    <>
                    <FirstPageTwoToneIcon className={classes.textField} width="100"/>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue={today+'T00:00:00'}
                        onChange={startDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    />
                    
                    <LastPageTwoToneIcon className={classes.textField} width="100"/>
                    <TextField
                        id="datetime-local"
                        type="datetime-local"
                        defaultValue="2021-08-10T10:30:00"
                        onChange={endDateChange}
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                    /></>
                }
               
            </form>
            <div className={classes.container}>
            <LocalOfferTwoToneIcon className={classes.textField} width="100"/>
            <div className={classes.textField}>
            <div className={ classes.swatch } onClick={ onChangeClick } onChange={onChangeColor}>
                <div className={ classes.color } style={{background: color}}/>
            </div>
            { 
                click ? 
                <div className={ classes.popover }>
                    <div className={ classes.cover } onClick={ onChangeClose }/>
                    <CirclePicker defaultValue={ color } onChange={ onChangeColor } />
                </div> : null 
            }
            </div>
            </div>
            <div className={classes.buttonDiv}>
                <button className={classes.btn} onClick={add}>추가</button>
                <button className={classes.btn} style={{backgroundColor: '#b8b8b8'}} onClick={closeModifyEvent}>취소</button>
            </div>
          </div>
        </Fade>
      </Modal>

    )
}

const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(ModifyEvent)