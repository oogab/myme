import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import {openRoutineModal } from '../../../redux/modules/modalStore';
import { setChoosedRoutine } from '../../../redux/modules/routineStore';
import RoutineItemDetail from '../RoutineItemDetail/index';
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
                  <div className='button-div'><button onClick={openRoutine}>+</button></div>
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
