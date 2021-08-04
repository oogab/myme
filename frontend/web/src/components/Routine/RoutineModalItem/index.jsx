import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import {deleteRoutineItem} from '../../../redux/modules/routineStore';

function App(props){
    //삭제하는 함수
    function deleteToDoItem(){
        props.dispatch(deleteRoutineItem({routineIdx: props.num , routineItemIdx: props.itemIdx}));
    }
    return(
        <Wrapper>
            <span className="toDoItem">{props.state.routineStore.routine[props.num].routinizedHabit[props.itemIdx].habitName}</span><span className="minus btn" onClick={deleteToDoItem}>ㅡ</span>
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);