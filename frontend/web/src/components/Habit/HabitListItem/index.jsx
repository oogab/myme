import React from 'react';
import Wrapper from './styles'
import {Card, CardContent, Typography, CardActions, Grid, Button} from '@material-ui/core';
import {useSelector, useDispatch} from 'react-redux'
import {OPEN_MODIFY_HABIT_MODAL} from '../../../reducers/modal'
import {SET_MODIFY_HABIT_MODAL, DELETE_MY_HABIT_REQUEST} from '../../../reducers/habit'
function App(props){
  const dispatch = useDispatch()
  const { myHabits } = useSelector((state) => state.habit)
  function openModal(){
      dispatch({type:OPEN_MODIFY_HABIT_MODAL})
      dispatch({type:SET_MODIFY_HABIT_MODAL, idx:props.idx})
  }

  function deleteHabit(){
      dispatch({type: DELETE_MY_HABIT_REQUEST, idx: props.idx, id:myHabits[props.idx].id })
  }

  return(
      <Grid item md={3} className='habits'>
      <Wrapper>
        <Card>
            <CardContent>
                <Typography variant="h5" component="h2" className='text'>
                    {props.habit.name}
                </Typography>
                <Typography color="textSecondary" className='text'>
                    {props.habit.time_required}분
                </Typography>
                <Typography variant="body2" component="p" className='text'>
                    {props.habit.content}
                </Typography>
            </CardContent>
            <CardActions>
            <Button size="small" color="primary" onClick={openModal}>
                수정
            </Button>
            <Button size="small" color="primary" onClick={deleteHabit}>
                삭제
            </Button>
            </CardActions>
        </Card>
      </Wrapper>
      </Grid>
  );
}
export default App;