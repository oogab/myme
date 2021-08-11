import React from 'react';
import Wrapper from './styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { useDispatch } from 'react-redux';
import { convertCertType } from '../../../config/config'

const App = (props) => {
  const dispatch = useDispatch()
  const { challenge } = props
  const randomImageUrl = 'https://picsum.photos/200/'

  return(
    <Wrapper>
      <Grid>
        <img src={challenge.Challenge?.img_addr ? challenge.Challenge?.img_addr : randomImageUrl} style={{ maxWidth: '270px' }} />
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <h2 className='title'>{challenge.Challenge?.name}</h2>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} className='term'>{challenge.Challenge?.period}일</Grid>
        <Grid item xs={6} className='term'>{convertCertType(challenge.Challenge?.certification_cycle)}</Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <span style={{ padding: '5px' }}>
            {challenge.start_date}~{challenge.end_date}
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <span className='title'>
            달성률 {challenge.certification_count/challenge.total_number_of_certification} %
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} >
          <LinearProgress style={{ margin: '5px' }} variant="determinate" value={100*challenge.certification_count/challenge.total_number_of_certification} />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} className='term confirm-btn btn'>인증하기</Grid>
        <Grid item xs={6} className='term confirm-btn btn'>상세보기</Grid>
      </Grid>
    </Wrapper>
  );
}
export default App;