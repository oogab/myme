import React from 'react';
import Wrapper from './styles'
import RoutineItemDetail from '../RoutineItemDetail/index';
import {Settings, Save, Delete,AddCircle} from '@material-ui/icons'
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import { OPEN_ROUTINE_MODAL, OPEN_CREATE_ROUTINE_MODAL, SET_ALERT_MODAL_FUNCTION,OPEN_ALERT_MODAL} from '../../../reducers/modal';
import { SET_CHOOSED_ROUTINE, DELETE_ROUTINE_REQUEST, SET_MODAL_INPUT, SET_ORDER_REQUEST} from '../../../reducers/routine';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function App(props){
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)
    const { num } = props;
    function openRoutine(){
      dispatch({type: SET_CHOOSED_ROUTINE, idx:num});
      dispatch({
        type: OPEN_ROUTINE_MODAL
      });
    }
    function openCreateRoutine(){
      dispatch({type: OPEN_CREATE_ROUTINE_MODAL});
      dispatch({type: SET_MODAL_INPUT, idx: num});
    }
    function deleteRoutines(){
      dispatch({type: DELETE_ROUTINE_REQUEST, id:myRoutines[num].id, idx:num});
    }

    function setDeleteRoutines(){
      dispatch({type: SET_ALERT_MODAL_FUNCTION, alertModalFunction: deleteRoutines})
      dispatch({type: OPEN_ALERT_MODAL, message:'루틴을 삭제하시겠습니까?'})
    }

    function saveRoutines(){
      let tempRoutinesHabits = new Array();
      for(let i=0;i<myRoutines[num].RoutinizedHabits.length;i++){
        let tempHabit = Object.assign({},myRoutines[num].RoutinizedHabits[i])
        tempHabit.order= i
        tempRoutinesHabits.push(tempHabit)
      }
      dispatch({type:SET_ORDER_REQUEST, habits: tempRoutinesHabits, idx:num})

    }
    function setSaveRoutines(){
      console.log(myRoutines[num].RoutinizedHabits)
      dispatch({type: SET_ALERT_MODAL_FUNCTION, alertModalFunction: saveRoutines})
      dispatch({type: OPEN_ALERT_MODAL, message:'순서를 저장하시겠습니까?'})
    }
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h3 className="title">{myRoutines[num]?.name}</h3>
                </AccordionSummary>
                <AccordionDetails className ='details'>
                <DndProvider backend={HTML5Backend}>
                  <RoutineItemDetail num = {num} routinizedHabits={myRoutines[num].RoutinizedHabits}/>
                </DndProvider>
                  
                  <div className='button-div'>
                    <Settings className="btn modify-btn" id='setting-btn' onClick={openCreateRoutine}></Settings>
                    <Delete className='btn modify-btn' id='delete-btn' onClick ={setDeleteRoutines}></Delete>
                    <Save className="btn modify-btn" id='save-btn' onClick ={setSaveRoutines}></Save>
                    <AddCircle onClick={openRoutine} className='btn modify-btn' id='add-btn'>+</AddCircle>
                    </div>
                </AccordionDetails>
              </Accordion>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
  return {
      state
  }
}
export default connect(mapStateToProps)(App);
