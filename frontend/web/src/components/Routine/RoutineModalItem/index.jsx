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
<<<<<<< HEAD
            <span className="toDoItem">{props.state.routineStore.routine[props.num].routinizedHabit[props.itemIdx].habitName}</span><span className="minus btn" onClick={deleteToDoItem}>ㅡ</span>
=======
            <span className="toDoItem">{props.state.routineStore.routine[props.num].routinizedHabit[props.itemIdx].habitName}</span><span className="minus" onClick={deleteToDoItem}>ㅡ</span>
>>>>>>> 6856e7cc1b7367bcf4168499048c46e94d453b23
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);