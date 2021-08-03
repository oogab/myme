import React from 'react';
import {connect} from 'react-redux';

import RoutineItem from '../../components/Routine/RoutineItem/index'
import AddRoutineButton from '../../components/Routine/AddRoutineButton/index'
import RoutineModal from '../../components/Routine/RoutineModal/index';
import CreateRoutineModal from '../../components/Routine/CreateRoutineModal/index';
import Layout from '../../layout/';
import Wrapper from './styles';
function App(props){
    return(
        <Layout>
        <Wrapper>
                <div className='menu daily-menu'><h1>Daily</h1><AddRoutineButton/></div>
                <hr/>
                {
                    props.state.routineStore.routine.map((item, idx)=>(<RoutineItem num={idx}></RoutineItem>))
                }
                <RoutineModal/>
                <CreateRoutineModal/>

        </Wrapper>
        </Layout>
    );
}

const mapStateToProps = (state) =>{
    return {
        state
    }
}
export default connect(mapStateToProps)(App);