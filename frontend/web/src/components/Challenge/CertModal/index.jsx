import React, { useCallback, useRef } from 'react'
import { Grid } from '@material-ui/core'
import { useDispatch, useSelector } from 'react-redux'
import { ColorButton } from '../../../common/Buttons'
import { CERTIFY_CHALLENGE_REQUEST, UPLOAD_CHALLENGE_IMAGE_REQUEST } from '../../../reducers/challenge'

const CertModal = (props) => {
  const { challenge, closeCertModal } = props
  const dispatch = useDispatch()
  const imageInput = useRef()

  const { challengeImagePath } = useSelector((state) => state.challenge)

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click()
  }, [imageInput.current])

  const onUploadImage = useCallback((e) => {
    console.log('image', e.target.files[0])

    const imageFormData = new FormData()
    imageFormData.append('image', e.target.files[0])

    dispatch({
      type: UPLOAD_CHALLENGE_IMAGE_REQUEST,
      data: imageFormData
    })

  }, [])

  const certifyChallenge = useCallback(() => {
    dispatch({
      type: CERTIFY_CHALLENGE_REQUEST,
      data: {
        img_addr: challengeImagePath,
        content: '인증합니다!',
        certification_datetime: Date.now(),
        challengeId: challenge.id // challengeParticipation id...
      }
    })
    closeCertModal()
  }, [])

  return (
    <div 
      style={{
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`,
        position: 'absolute',
        width: 400,
        backgroundColor: '#E5E3E3',
        border: '1px solid #66A091',
        // boxShadow: theme.shadows[5],
        padding: "40px",
        borderRadius:'10px',
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} >
          <img src={challengeImagePath ? challengeImagePath : ''} />
          <input type="file" name="image" hidden ref={imageInput} onChange={onUploadImage} />
        </Grid>
        <Grid item xs={12} sm={6} >
          <ColorButton onClick={onClickImageUpload} >인증 사진 업로드</ColorButton>
        </Grid>
        <Grid item xs={12} sm={6} >
          <ColorButton onClick={certifyChallenge} >인증하기!</ColorButton>
        </Grid>
      </Grid>
    </div>
  )
}

export default CertModal