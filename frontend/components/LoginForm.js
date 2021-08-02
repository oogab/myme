import React, { useState, useCallback, useEffect } from 'react'
import {
  Button,
  useMediaQuery,
  Grid,
  IconButton,
  Typography,
  Divider,
  TextField,
  Card,
  CardHeader,
  CardContent,
  Avatar,
  makeStyles
} from '@material-ui/core';
import Link from 'next/link'
import Wrapper from './styles';

import { useDispatch, useSelector } from 'react-redux'
import { IS_SING_UP_MODE, loginRequestAction } from '../reducers/user'

const LoginForm = () => {
  const dispatch = useDispatch()
  const { logInLoading, logInError, isSignUp } = useSelector((state) => state.user)
  const [disabled, setDisabled] = useState(true)
  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])
  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  useEffect(() => {
    if (logInError) {
      alert(logInError)
    }
  }, [logInError])

  useEffect(() => {
    if (email === '' || password === '') {
      setDisabled(true)
    }
    if (email !== '' && password !== '') {
      setDisabled(false)
    }
  }, [email, password])

  const onSubmitForm = useCallback(() => {
    dispatch(loginRequestAction({email, password}))
  }, [email, password])

  const onSignUp = useCallback(() => {
    dispatch({
      type: IS_SING_UP_MODE,
      data: true,
    })
  }, [])

  return (
    <Wrapper>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        className="grid"
      >
        <Grid item xs={12}>
          <TextField
            required
            label="이메일"
            className="text-field"
            value={email}
            variant="outlined"
            // style={{ backgroundColor: 'white' }}
            fullWidth={true}
            onChange={onChangeEmail}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            label="비밀번호"
            type="password"
            className="text-field"
            value={password}
            variant="outlined"
            // style={{ backgroundColor: 'white' }}
            fullWidth={true}
            onChange={onChangePassword}
          />
        </Grid>
        <Grid item xs={12} className="grid-item">
          <Button
            variant="contained"
            disabled={disabled}
            fullWidth={true}
            color="primary"
            onClick={onSubmitForm}
            className="grid-item-button"
          >
            login
          </Button>
        </Grid>
        <Grid item xs={12} className="grid-item">
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={0}
          >
            <Grid item xs={5}>
              <Divider />
            </Grid>

            <Grid item xs={2}>
              <Typography align="center" className="grid-item-typography1">
                or
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container direction="row" justifyContent="center" alignItems="center">
            <IconButton
              className="sign-in-butoon grid-item-icon-button"
            >
              {/* <Typography > */}
              <div className="SocialLoginImg">
                <img src="/images/naver.png" alt="" width="40px"/>
                <img src="/images/facebook.png" alt="" width="40px" />
                <img src="/images/google.png" alt="" width="40px" />
                <img src="/images/kakao.png" alt="" width="40px" />
              </div>
              {/* </Typography> */}
            </IconButton>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth={true}
            onClick={onSignUp}
            className="grid2-item-button"
          >
            {`계정이 없으신가요?`}
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  )
}

export default LoginForm