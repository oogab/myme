import React from 'react';
import Wrapper from './styles'
import Grid from '@material-ui/core/Grid';
import PlayIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'
import CheckIcon from '@material-ui/icons/CheckCircleOutline'
import NextIcon from '@material-ui/icons/SkipNext'

function App(props){
    return(
        <Wrapper className='progress-item'>
            <Grid container spacing={0}>
                <Grid container item xs={8}>
                    <Grid item xs={4}>
                    {
<<<<<<< HEAD
                        true?<PlayIcon className="btn progress-btn"></PlayIcon>:<PauseIcon className="progress-btn"></PauseIcon>
                }
                    </Grid>
                    <Grid item xs={4}>
                        <CheckIcon className="btn progress-btn"></CheckIcon>
                    </Grid>
                    <Grid item xs={4}>
                        <NextIcon className="btn progress-btn"></NextIcon>
=======
                        true?<PlayIcon className="progress-btn"></PlayIcon>:<PauseIcon className="progress-btn"></PauseIcon>
                }
                    </Grid>
                    <Grid item xs={4}>
                        <CheckIcon className="progress-btn"></CheckIcon>
                    </Grid>
                    <Grid item xs={4}>
                        <NextIcon className="progress-btn"></NextIcon>
>>>>>>> 6856e7cc1b7367bcf4168499048c46e94d453b23
                    </Grid>
                </Grid>
                <Grid item xs={4} className='assist'>
                    <h2>Assist</h2>
                    <p>유튜브 링크 1</p>
                    <p>유튜브 링크 2</p>
                </Grid>
            </Grid>
        </Wrapper>
    );
}
export default App;