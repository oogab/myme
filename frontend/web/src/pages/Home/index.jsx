import React, { useEffect } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import RoutineListItem from '../../components/Home/RoutineListItem/index';

import DashboardIcon from '@material-ui/icons/Dashboard';
import ListAltIcon from '@material-ui/icons/ListAlt';

import { useDispatch, useSelector } from 'react-redux';
import { LOAD_MY_ROUTINES_REQUEST } from '../../reducers/routine';
import { LOAD_MY_CHALLENGES_REQUEST } from '../../reducers/challenge';
import { Grid } from '@material-ui/core';

const App = () => {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)
  const { myChallenges } = useSelector((state) => state.challenge)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_ROUTINES_REQUEST
    })
    dispatch({
      type: LOAD_MY_CHALLENGES_REQUEST
    })
    // dispatch({
    //   type: LOAD_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_NEW_CHALLENGES_REQUEST
    // })
    // dispatch({
    //   type: LOAD_REC_CHALLENGES_REQUEST
    // })
  }, [])

  return(
    <Layout>
      <Wrapper>
        <div className='menu' style={{ display: 'flex', alignItems: 'center' }} >
          <DashboardIcon color="primary" fontSize="large" style={{ marginRight: 10 }} />
          <h1>나의 챌린지</h1>
        </div>
        <hr/>
        <Grid container>
        {
          myChallenges.length !== 0
            ?
              myChallenges.map((challenge) => {
                return (
                  <Grid item xs={12} sm={6} md={4} lg={3} style={{ textAlign: 'center' }} >
                    <ChallengeItem key={challenge.id} challenge={challenge} />
                  </Grid>
                ) 
              })
            :
              <div>나에게 맞는 챌린지에 참여해보세요!</div>
        }
        </Grid>
        <div className='menu' style={{ display: 'flex', alignItems: 'center' }}>
          <ListAltIcon color="secondary" fontSize="large" style={{ marginRight: 10 }} />
          <h1>나의 루틴 목록</h1>
        </div>
        <hr/>
        {
          myRoutines.length !== 0
            ?
              myRoutines.map((routine) => {
                return <RoutineListItem key={routine.id} routine={routine} />
              })
            :
              <div>나만의 루틴을 계획하고 실천해봅시다!</div>
        }
      </Wrapper>
    </Layout>
  );
}

export default App