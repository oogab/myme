import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  Grid,
  IconButton,
  Typography,
  Divider,
  TextField,
} from '@material-ui/core';
import Wrapper from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_SIGN_UP_MODE, loginRequestAction } from '../../../reducers/user';

const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

const LoginForm = () => {
  let history = useHistory()
  const dispatch = useDispatch()
  const { isSignUp } = useSelector((state) => state.user)

  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [email])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [password])

  const [disabled, setDisabled] = useState(true)

  const onLogin = useCallback(() => {
    if (!password || !email) {
      alert('You need both email and password.');
      return;
    }

    if (!regExp.test(email)) {
      alert('The email format is invalid.');
      return;
    }

    dispatch(loginRequestAction({email, password}))
  }, [email, password])


  const onChangeSignupMode = useCallback(() => {
    dispatch({
      type: CHANGE_SIGN_UP_MODE
    })
  }, []) 


  useEffect(() => {
    if (email !== '' && password !== '') {
      setDisabled(false);
    }

    if (email === '' || password === '') {
      setDisabled(true);
    }
  }, [email, password]);

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
            id="outlined-required"
            label="이메일"
            className="text-field"
            defaultValue={email}
            variant="outlined"
            style={{background: 'white'}}
            fullWidth={true}
            onChange={onChangeEmail}
            // onFocus={event => {
            //   setIsShowKeyborad(true);
            // }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="outlined-password-input"
            label="비밀번호"
            className="text-field"
            type="password"
            autoComplete="current-password"
            defaultValue={password}
            variant="outlined"
            style={{background: 'white'}}
            fullWidth={true}
            onChange={onChangePassword}
            // onFocus={event => {
            //   setIsShowKeyborad(true);
            // }}
          />
        </Grid>
        <Grid item xs={12} className="grid-item">
          <Button
            variant="contained"
            disabled={disabled}
            fullWidth={true}
            color="primary"
            onClick={onLogin}
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
              // onClick={onClickHandler}
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
            onClick={onChangeSignupMode}
            className="grid2-item-button"
          >
            {`계정이 없으신가요?`}
          </Button>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default LoginForm