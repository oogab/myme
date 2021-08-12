import React, { useEffect } from 'react';
import Layout from '../../layout/';
import Wrapper from './styles';
import ChallengeItem from '../../components/Home/ChallengeItem/index';
import RoutineListItem from '../../components/Home/RoutineListItem/index';
import { useDispatch, useSelector } from 'react-redux';
import { LOAD_TODAY_ROUTINES_REQUEST } from '../../reducers/routine';
import { LOAD_MY_CHALLENGES_REQUEST } from '../../reducers/challenge';
import {Card} from '@material-ui/core'

const App = () => {
  const dispatch = useDispatch()
  const { myRoutines } = useSelector((state) => state.routine)
  const { myChallenges } = useSelector((state) => state.challenge)

  useEffect(() => {
    dispatch({
      type: LOAD_TODAY_ROUTINES_REQUEST
    })
    dispatch({
      type: LOAD_MY_CHALLENGES_REQUEST
    })
  }, [])

  return(
    <Layout>
      <Wrapper>
        <div className='menu'><h2>나의 챌린지</h2></div>
        <hr/>
        {
          myChallenges.map((challenge) => {
            return <ChallengeItem key={challenge.id} challengeId={challenge.Challenge.name} />
          })
        }
        <div className='menu'><span className='menu-text'>Today's Routine</span>
        <div style={{float:'right'}}>
        <span className='menu-text' style={{color:'#776D61'}}>■</span><span>완료</span>
        <span className='menu-text' style={{color:'#89DDBF'}}>■</span><span>할일</span>
        </div>
        </div>
        <hr/>
        {
          myRoutines.length?
          <>
            {
              myRoutines.map((routine,idx) => {
                return <RoutineListItem key={idx} routine={routine} routineIdx={idx} />
              })
            }
          </>
          :
          <Card>
            <h4 style={{height: "50px",lineHeight: "50px", textAlign: "center"}}>오늘은 일정이 없어요!</h4>
          </Card>
        }
        
      </Wrapper>
    </Layout>
  );
}

export default App