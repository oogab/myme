import React,{useState} from 'react';
import Wrapper from './styles'
import RoutineModalItem from '../RoutineModalItem/index'
import ReactDragList from 'react-drag-list'
import {connect, useSelector} from 'react-redux';

function App(props){
  const { myRoutines } = useSelector((state) => state.routine) 
  const { num } = props
    let routinizedHabit = myRoutines[num]?.routinizedHabit;

    //순서 변경 함수
    // function changeOrder(e){
    //     props.dispatch(setOrder({newIndex : e.newIndex , oldIndex : e.oldIndex, idx : props.num}));
    //     console.log(routinizedHabit);
    // }

    return(
      <Wrapper>
        {routinizedHabit
          ?
          <ReactDragList
            dataSource={routinizedHabit}
            row={(item, idx) => <RoutineModalItem key={item.id} num={num} itemIdx={idx}/>}
            handles = {false}
            // onUpdate = {changeOrder}
          />
          : null
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