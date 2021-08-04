import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DayOfWeek from './DayOfWeek/index';
import DayTimeInput from './DayTimeInput/index';
import Switch from '@material-ui/core/Switch';
import {connect} from 'react-redux';
import {closeCreateRoutineModal} from '../../../redux/modules/modalStore';
import {addRoutine, setModalInputName, setModalInputAlarm, setModalInputActiveDay, modifyRoutine} from '../../../redux/modules/routineStore';
function getModalStyle() {
  return {
    top: `50%`,
    left: `50%`,
    transform: `translate(-50%, -50%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width:400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
  },
  day:{
    textAlign: 'center',
    marginBottom:'20px'
  },
  text:{
    textAlign: "center",
    marginBottom: "10px"
  },
  inputDiv:{
    backgroundColor:'white',
    padding:'10px',
    borderRadius:'20px',
    marginBottom:'20px',
    width:'100%',
    border:'#66A091 1px solid'
  },
  buttonLeft:{
    width: '47.5%',
    marginRight: '2.5%',
    border: 'none',
    padding: '5px',
    borderRadius: '20px',
    height:'40px',
    backgroundColor: '#776D61',
    color:'white',
    fontWeight:'bold'
  },
  buttonRight:{
    width: '47.5%',
    marginLeft: '2.5%',
    border: 'none',
    padding: '5px',
    borderRadius: '20px',
    height:'40px',
    backgroundColor: '#89DDBF',
    color:'white',
    fontWeight:'bold'
  },
  buttonDiv:{
    marginTop:'50px',
  },
  floatRight:{
    float:'right',
    color: 'lightgray',
  },
  switch:{
    marginTop: '-7px',
  }
}));

function getDefaultTimes(){
  let arr = new Array();
  for(let i=0;i<7;i++){
    arr.push('00:00');
  }
  return arr;
}
function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  const dayName = ['월','화','수','목','금','토','일'];

  //모달 닫는 함수
  const handleClose = () => {
    props.dispatch(closeCreateRoutineModal());
  };
  const changeDayClicked =(idx) =>{
    let tempClicked = props.state.routineStore.createRoutineInfo.activeDay[idx];
    tempClicked.activeDayOfWeek = !tempClicked.activeDayOfWeek;
    props.dispatch(setModalInputActiveDay({...tempClicked, "idx":idx}));
  };

  const changeName = (e) =>{
    props.dispatch(setModalInputName(e.target.value));
  }
  const changeAlarm = (e) =>{
    props.dispatch(setModalInputAlarm(e.target.checked));
  }
  const changeTimeInfo = (e, idx) =>{
    let tempClicked = props.state.routineStore.createRoutineInfo.activeDay[idx];
    tempClicked.startTime = e.target.value;
    props.dispatch(setModalInputActiveDay({...tempClicked, "idx":idx}));
  }
  
  const add = () =>{
    if(props.state.routineStore.choosedRoutine == -1){
      props.dispatch(addRoutine());
    }else{
      props.dispatch(modifyRoutine());
    }
    handleClose();
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      
          <h2 id="simple-modal-title" style={{marginBottom: "10px"}}>루틴 {props.state.routineStore.createRoutineInfo.rid==-1?'생성':'수정'}</h2>
              <input type="text" placeholder="루틴 이름 입력" className={classes.inputDiv} onChange={changeName} defaultValue={props.state.routineStore.createRoutineInfo.name}></input>
              <div className={classes.day}>
                {
                  dayName.map((str, idx) => (
                    <DayOfWeek dayName={str} clicked={props.state.routineStore.createRoutineInfo.activeDay[idx].activeDayOfWeek} onClick={()=>{changeDayClicked(idx);}}></DayOfWeek>
                  ))
                }
              </div>
              <div className={classes.inputDiv}>
                <h3 className={classes.text}>시작 시간을 선택해주세요.</h3>
                {
                  dayName.map((str, idx) => (
                    <DayTimeInput dayName={str} idx = {idx} clicked={props.state.routineStore.createRoutineInfo.activeDay[idx].activeDayOfWeek} timeInfo={props.state.routineStore.createRoutineInfo.activeDay[idx].startTime} change={changeTimeInfo}/>
                  ))
                }   
              </div>
              <div className={classes.inputDiv}>
                <span className={classes.text}>알림</span><div className={classes.floatRight}><Switch className={classes.switch} onChange={changeAlarm} defaultChecked={props.state.routineStore.createRoutineInfo.alarm}/></div>
              </div>
        <div className={classes.buttonDiv}>
          <button className={classes.buttonLeft +' btn'} onClick={handleClose}>취소</button>
          <button className={classes.buttonRight +' btn'} onClick = {add}>완료</button>
        </div>
    </div>
  );

  return (
    <Modal
        open={props.state.modalStore.createRoutineModal}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
  );
}


const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(SimpleModal);