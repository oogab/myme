import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import {openRoutineModal, openCreateRoutineModal} from '../../../redux/modules/modalStore';
import { setChoosedRoutine, setModalInput,deleteRoutine } from '../../../redux/modules/routineStore';
import RoutineItemDetail from '../RoutineItemDetail/index';
import {Settings, Save, Delete,AddCircle} from '@material-ui/icons'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
  } from '@material-ui/core';

function App(props){
    function openRoutine(){
      props.dispatch(setChoosedRoutine(props.num));
        props.dispatch(openRoutineModal());
    }
    function openCreateRoutine(){
      props.dispatch(setChoosedRoutine(props.num));
      props.dispatch(openCreateRoutineModal());
      props.dispatch(setModalInput(props.num));
    }
    function deleteRoutines(){
      props.dispatch(setChoosedRoutine(props.num));
      props.dispatch(deleteRoutine());

    }
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className="title">{props.state.routineStore.routine[props.num].name}</h2>
                </AccordionSummary>
                <AccordionDetails className ='details'>
                  <RoutineItemDetail num = {props.num}/>
                  <div className='button-div'>
                    <Settings className="btn modify-btn" id='setting-btn' onClick={openCreateRoutine}></Settings>
                    <Delete className='btn modify-btn' id='delete-btn' onClick ={deleteRoutines}></Delete>
                    <Save className="btn modify-btn" id='save-btn'></Save>
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
