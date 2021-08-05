import React from 'react';
import Wrapper from './styles'
import RoutineItemDetail from '../RoutineItemDetail/index';
import { connect, useDispatch, useSelector } from 'react-redux';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
} from '@material-ui/core';
import { OPEN_ROUTINE_MODAL } from '../../../reducers/modal';

const App = (props) => {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)
  const { num } = props

  function openRoutine(){
    // dispatch(setChoosedRoutine(num));
    dispatch({
      type: OPEN_ROUTINE_MODAL
    });
  }
  return(
    <Wrapper>
      <Accordion className="panel" className='routine-item'>
        <AccordionSummary
          className="panel-summary"
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h2 className="title">{myRoutines[num]?.name}</h2>
        </AccordionSummary>
        <AccordionDetails className ='details'>
          <RoutineItemDetail num = {props.num}/>
          <div className='button-div'>
            <button onClick={openRoutine}>+</button>
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
