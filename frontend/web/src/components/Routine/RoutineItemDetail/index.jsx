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
        props.dispatch(setOrder({idx : props.num}));
    }
    return(
        <Wrapper>
            {
                routinizedHabit.length?
                <ReactDragList
                dataSource={routinizedHabit}
                row={(item, idx) => <RoutineModalItem num={props.num} itemIdx={idx}/>}
                handles = {false}
                onUpdate = {changeOrder}
                />
                :
                <div className="default-box">루틴 일정을 추가해주세요.</div>
            }
        </Wrapper>
    );
}

const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);