import React, { useState, useEffect } from 'react';
import { 
  Dialog,
  Slide,
  Grid,
  Container,
  Box
} from '@material-ui/core/';
import Layout from '../../layout/';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Wrapper from './styles';
import PersonIcon from '@material-ui/icons/Person';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { ColorButton } from '../../common/Buttons';
import { ColorChip } from '../../common/Chips'
import { useDispatch, useSelector } from 'react-redux';
import { convertCertType } from '../../config/config';
import { CLEAR_LOAD_CHALLENGE_DONE } from '../../reducers/challenge';

const ChallengeDetail = ({match}) => {
  const dispatch = useDispatch()
  const { singleChallenge } = useSelector((state) => state.challenge)
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <Layout>
      <Wrapper>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            {/* 대표이미지 */}
            <Grid item xs={12} className="titleImg" style={{ textAlign: 'center' }}>
              <img src={singleChallenge?.img_addr} alt={singleChallenge?.name} style={{width: '50%', maxWidth: 300 }} />
            </Grid>
            {/* 제목 */}
            <Grid item xs={12}>
              <h2>{singleChallenge?.name}</h2>
            </Grid>
            {/* 좋아요 */}
            
            {/* 태그 */}
            <Grid item xs={12}>
                <div className="chip">
                  <ColorChip className="term" label='분류'/>
                  <ColorChip className="term" label={singleChallenge?.period} />
                  <ColorChip className="term" label={convertCertType(singleChallenge?.certification_cycle)}  />
                </div>
            </Grid>
            {/* 설명 */}
            <Grid item xs={12} >
              <h3>{singleChallenge?.content}</h3>
            </Grid>
            <Grid item xs={12} >
              <div style={{ display:'flex', justifyContent: 'center' }}>
                <PersonIcon />참가인원 {singleChallenge?.ChallengeParticipations.length} 명
              </div>
            </Grid>
            <Grid item xs={12}>
              <FavoriteIcon/>좋아요 0 명
            </Grid>
            <Grid item xs={12}>
            <ColorButton variant="outlined" onClick={handleClickOpen}>
              참여하기!
            </ColorButton>
          </Grid>
        </Grid>
      </Wrapper>
    </Layout>
  );
}

export default ChallengeDetail