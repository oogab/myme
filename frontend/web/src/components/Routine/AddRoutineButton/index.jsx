import React from 'react';
import Wrapper from './styles'
import {connect} from 'react-redux';
import { openCreateRoutineModal } from '../../../redux/modules/modalStore';
function App(props){
    function openCreateRoutine(){
        props.dispatch(openCreateRoutineModal());
    }
    return(
<<<<<<< HEAD
        <Wrapper onClick={openCreateRoutine} className='btn'>
=======
        <Wrapper onClick={openCreateRoutine}>
>>>>>>> 6856e7cc1b7367bcf4168499048c46e94d453b23
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