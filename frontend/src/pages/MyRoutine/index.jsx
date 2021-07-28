import React, { useState } from 'react';
import RoutineItem from '../../components/Routine/RoutineItem/index'
import ChallengeItem from '../../components/Routine/ChallengeItem/index'
import AddRoutineButton from '../../components/Routine/AddRoutineButton/index'
import Layout from '../../layout/';
import Wrapper from './styles';
import RoutineModal from '../../components/Routine/RoutineModal/index';
import CreateRoutineModal from '../../components/Routine/CreateRoutineModal/index';
function App(){
    let [routineModal, setRoutineModal] = useState(false);
    let [createRoutineModal, setCreateRoutineModal] = useState(false);
    function openRoutineModal(){
        setRoutineModal(true);
    }
    function openCreateRoutineModal(){
        setCreateRoutineModal(true);
    }
    return(
        <Wrapper>
            <Layout>
                <div className='daily-menu'><h1>Daily</h1><AddRoutineButton onClick={openCreateRoutineModal}></AddRoutineButton></div>
                <hr/>
                <RoutineItem routineId='아침 루틴' onClick={openRoutineModal}></RoutineItem>
                <RoutineItem routineId='저녁 루틴' onClick={openRoutineModal}></RoutineItem>
                <h1>진행중인 챌린지</h1>
                <hr />
                <ChallengeItem challengeId='CS 지식공부'></ChallengeItem>
                <h1>완료</h1>
                <hr />
                <RoutineModal routineModal={routineModal} setRoutineModal={setRoutineModal}></RoutineModal>
                <CreateRoutineModal createRoutineModal={createRoutineModal} setCreateRoutineModal={setCreateRoutineModal}></CreateRoutineModal>
            </Layout>
        </Wrapper>
    );
}
export default App;