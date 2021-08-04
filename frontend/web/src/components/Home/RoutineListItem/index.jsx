import React from 'react';
import Wrapper from './styles'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    List,
    ListItem
  } from '@material-ui/core';
import RoutineItemCheck from '../RoutineItemCheck/index';
import {connect} from 'react-redux';
function App(props){
    return(
        <Wrapper>
            <Accordion className="panel" className='routine-list-item'>
                <AccordionSummary
                  className="panel-summary"
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <h2 className="title">{props.state.routineStore.routine[props.idx].name}</h2>
                </AccordionSummary>
                <AccordionDetails className='routine-list-item-detail'>
                  <List class='accordian-detail-list'>
                    {
                      props.state.routineStore.routine[props.idx].routinizedHabit.map((item, idx) =>(
                        <ListItem className='items'>
                      <RoutineItemCheck listIdx = {props.idx} itemIdx ={idx}/>
                      </ListItem>
                      ))
                    }
                  </List>
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