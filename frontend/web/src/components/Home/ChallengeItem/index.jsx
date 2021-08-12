import React, { useCallback, useRef, useState } from 'react';
import Wrapper from './styles'
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import { convertCertType } from '../../../config/config'
import Modal from '@material-ui/core/Modal';
import CertModal from '../../Challenge/CertModal';


const App = (props) => {
  const { challenge } = props
  const [modalOpen, setModalOpen] = useState(false)

  const onCertModal = useCallback(() => {
    setModalOpen(true)
  }, [])

  const closeCertModal = useCallback(() => {
    setModalOpen(false)
  }, [])

  return(
    <Wrapper>
      <Grid style={{textAlign: 'center'}}>
        <img src={challenge.Challenge?.img_addr ? challenge.Challenge?.img_addr : ''} style={{ maxWidth: '270px', maxHeight: '180px' }} />
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
            달성률 {100*challenge.certification_count/challenge.total_number_of_certification} %
          </span>
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={12} >
          <LinearProgress variant="determinate" value={100*challenge.certification_count/challenge.total_number_of_certification} />
        </Grid>
      </Grid>
      <Grid container spacing={0}>
        <Grid item xs={6} className='term confirm-btn btn' onClick={onCertModal} >인증하기</Grid>
        <Grid item xs={6} className='term confirm-btn btn'>상세보기</Grid>
        <Modal
          open={modalOpen}
          onClose={closeCertModal}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          <CertModal challenge={challenge} closeCertModal={closeCertModal} />
        </Modal>
      </Grid>
    </Wrapper>
  );
}
export default App;