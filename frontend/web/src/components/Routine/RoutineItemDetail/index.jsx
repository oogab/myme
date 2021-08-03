import React,{useState} from 'react';
import Wrapper from './styles'
import RoutineModalItem from '../RoutineModalItem/index'
import ReactDragList from 'react-drag-list'
import { setOrder, setChoosedRoutine } from '../../../redux/modules/routineStore';
import {connect} from 'react-redux';

function App(props){
    let routinizedHabit = props.state.routineStore.routine[props.num].routinizedHabit;
    //순서 변경 함수
    function changeOrder(e){
        props.dispatch(setOrder({newIndex : e.newIndex , oldIndex : e.oldIndex, idx : props.num}));
        console.log(routinizedHabit);
    }
    return(
        <Wrapper>
            <ReactDragList
                dataSource={routinizedHabit}
                row={(item, idx) => <RoutineModalItem num={props.num} itemIdx={idx}/>}
                handles = {false}
                onUpdate = {changeOrder}
            />
        </Wrapper>
    );
}

const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);