import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {connect, useDispatch, useSelector} from 'react-redux';
import { CLOSE_ROUTINE_MODAL } from '../../../reducers/modal';
import { ADD_ROUTINE_ITEM } from '../../../reducers/routine';
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
    width: 400,
    backgroundColor: '#E5E3E3',
    border: '1px solid #66A091',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius:'10px',
  },
  routineItemList:{
    marginBottom:'60px',
  },
  textarea:{
    border:'#66A091 1px solid',
    fontFamily: 'auto',
    width: '100%',
    borderRadius: '50px',
    padding: '20px',
    height:'80px',
    resize:'none',
    outline:'none',
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
}));

function SimpleModal(props) {
  const { routineModal } = useSelector((state) => state.modal)
  const dispatch = useDispatch()
  let [title,setTitle] = useState('');

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);

  //모달 닫는 함수
  function closeRoutine(){
    dispatch({
      type: CLOSE_ROUTINE_MODAL
    })
  }

  //습관 추가 함수
  function addHabit(){
    dispatch({type:ADD_ROUTINE_ITEM, rhid:-1, hid:-1, order:-1, habitName:title})
  }

  //input에 써져있는 습관제목과 title 바인딩
  function changeTitle(e){
    setTitle(e.target.value);
  }

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">습관 추가하기</h2>
      
      <textarea className={classes.textarea} placeholder='습관 추가하기' onChange={changeTitle}></textarea>
      <div className={classes.buttonDiv}>
          <button className={classes.buttonLeft} onClick={closeRoutine}>취소</button>
          <button className={classes.buttonRight} onClick={addHabit}>저장</button>
          </div>
    </div>
  );

  return (
    <Modal
        open={routineModal}
        onClose={closeRoutine}
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