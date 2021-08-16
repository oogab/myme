import React, { useCallback, useEffect, useState } from 'react';
import Wrapper from './styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { convertCertType, convertDaysWeek } from '../../../config/config'
import Modal from '@material-ui/core/Modal';
import CertModal from '../CertModal';
import { Typography } from '@material-ui/core';

const App = (props) => {
  const { challenge, idx } = props
  const [modalOpen, setModalOpen] = useState(false)

  const onCertModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  const closeCertModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return(
    <Wrapper>
      <Grid item xs={12} >
        <Typography gutterBottom className='title' variant="h6" style={{ maxWidth: 250, textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>{challenge.Challenge?.name}</Typography>
        
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} >
          <div className='term'>
            {
              challenge.period % 7 === 0
                ? convertDaysWeek(challenge.period)
                : <> {challenge.period} 일 </>
            }
          </div>
        </Grid>
        <Grid item xs={6} >
          <div className='term'>
            {convertCertType(challenge.Challenge?.certification_cycle)}
          </div>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={8}>
          <span className='period'>
            {challenge.start_date}~{challenge.end_date}
          </span>
        </Grid>
        <Grid item xs={4} >
          <span className='title period' >
            🏃🏼‍♂️ {100*challenge.certification_count/challenge.total_number_of_certification} %
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} style={{ padding: '0 5px' }} >
          <LinearProgress variant="determinate" value={100*challenge.certification_count/challenge.total_number_of_certification} />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} onClick={()=>{props.changeChoosedChellenge(idx)}}>
          <div className='confirm-btn'>
            인증하기  
          </div>
        </Grid>
        <Grid item xs={6} >
          <div className='confirm-btn more-btn'>
            상세보기
          </div>
        </Grid>
      </Grid>
    </Wrapper>
  );
}
export default App;