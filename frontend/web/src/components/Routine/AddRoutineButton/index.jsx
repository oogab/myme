import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import { openCreateRoutineModal } from '../../../redux/modules/modalStore';
function App(props){
    function openCreateRoutine(){
        props.dispatch(openCreateRoutineModal());
    }
    return(
        <Wrapper onClick={openCreateRoutine}>
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