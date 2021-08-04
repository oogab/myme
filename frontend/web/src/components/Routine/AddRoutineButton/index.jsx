import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import { openCreateRoutineModal } from '../../../redux/modules/modalStore';
import {setModalInput, setChoosedRoutine} from '../../../redux/modules/routineStore';
function App(props){
    function openCreateRoutine(){
        props.dispatch(setChoosedRoutine(-1));
        props.dispatch(openCreateRoutineModal());
        props.dispatch(setModalInput(-1));
    }
    return(
        <Wrapper onClick={openCreateRoutine} className='btn'>
            + 루틴 생성
        </Wrapper>
    );
}
const mapStateToProps = (state) =>{
    return {
        state
    }
  }
export default connect(mapStateToProps)(App);