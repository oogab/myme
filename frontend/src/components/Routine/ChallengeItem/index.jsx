import React from 'react';
import Wrapper from './styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';

function App(props){
    return(
        <Wrapper>
            <h2 className='title'>{props.challengeId}</h2>
            <div>
            <span>21.07.19 ~ 21.08.02</span><span className="float-right">✔주 5일</span>
            </div>
            <h3>달성률</h3>
            <Grid container spacing={0}>
            <Grid item xs={9}>
                <LinearProgress variant="determinate" value={70}></LinearProgress>
            </Grid>
            <Grid item xs={3}><span className="float-right">70%</span></Grid>
            </Grid>
        </Wrapper>
    );
}
export default App;