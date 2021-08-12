import React,{useState, useEffect} from 'react';
import Wrapper from './styles'
import Grid from '@material-ui/core/Grid';
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import NextIcon from '@material-ui/icons/SkipNext'
import {useDispatch} from 'react-redux';
import {CHECK_ROUTINIZED_HABIT_REQUEST} from '../../../reducers/routine'
import {OPEN_CONFIRM_MODAL} from '../../../reducers/modal'
function App(props){
    const dispatch = useDispatch()

    const routinizedHabit = props.habit
    const habit = props.habit.Habit

    let [time, setTime] = useState(0)

    let [timeInterval,setTimeInterval] = useState(false)

    let min = Math.floor(time/60)
    let sec = time%60

    // let requiredTime = habit.time_required*60 //진짜 코드
    let requiredTime = 5 //테스트용 코드

    useEffect(()=>{
        function start(){
            return setTimeout(()=>setTime(time+1),1000)
        }
        if(!timeInterval) return undefined
        start()
        return ()=>clearTimeout(start)
    },[time, timeInterval])

    function run(){
        if(props.checked){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '오늘 이미 완료한 습관입니다.'
            })
            return
        }
        if(props.checked || isAlreadyComplete()){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '이미 필요 시간을 충족하였습니다.'
            })
            return
        }
        setTimeInterval(true)
        
    }

    function checkRoutinizedHabit(){
        if(props.checked){
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '오늘 이미 완료한 습관입니다.'
            })
            return
        }
        if(!isAlreadyComplete()) {
            dispatch({
                type: OPEN_CONFIRM_MODAL,
                message: '먼저 요구 시간을 채워주세요.'
            })
            return
        }
        dispatch({
            type:CHECK_ROUTINIZED_HABIT_REQUEST, 
            routineId: routinizedHabit.RoutineId, 
            habitId: routinizedHabit.HabitId, 
            routineIdx: props.routineIdx,
            routinizedHabitIdx: props.routinizedHabitIdx
        })
        setTimeInterval(false)
    }

    function isAlreadyComplete(){
        if(time< requiredTime) return false
        return true
    }

    return(
        <Wrapper className='progress-item'>
            <div>
                <Grid container>
                    <Grid item xs={4}>
                    {
                        !timeInterval?<PlayIcon className="btn progress-btn" onClick={run}></PlayIcon>:<PauseIcon className="progress-btn" onClick={()=>{setTimeInterval(false)}}></PauseIcon>
                    }
                    </Grid>
                    <Grid item xs={4}>
                        <CheckIcon onClick={checkRoutinizedHabit} className={isAlreadyComplete()?"btn progress-btn complete-btn":"btn progress-btn"} ></CheckIcon>
                    </Grid>
                    <Grid item xs={4}>
                        <NextIcon className="btn progress-btn"></NextIcon>
                    </Grid>
                
                </Grid>
                <div>
                {(min<10?'0'+min:min)+':'+(sec<10?'0'+sec:sec)}
                </div>
                <div>
                    <h3>Assist</h3>
                    <iframe src="https://www.youtube.com/embed/Cy-vnf2LGck" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    {/* <a href={habit.assist_link}>{habit.assist_content}</a> */}

                </div>
            </div>
        </Wrapper>
    );
}
export default App;