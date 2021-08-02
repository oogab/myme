import React, { useState, useCallback, useEffect } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import Router from 'next/router'
import AppLayout from './AppLayout'
import { SIGN_UP_REQUEST, IS_SING_UP_MODE } from '../reducers/user'
import { useDispatch, useSelector } from 'react-redux'
import Wrapper from './styles'
import { Button, Checkbox, Divider, Grid, TextField, Typography } from '@material-ui/core'

const ErrorMessage = styled.div`
  color: red;
`

const SignupForm = () => {
  const [disabled, setDisabled] = useState(true)

  const dispatch = useDispatch()
  const { signUpLoading, signUpDone, signUpError, me, isSignUp } = useSelector((state) => state.user)

  useEffect(() => {
    if (me && me.id) {
      Router.replace('/')
    }
  }, [me && me.id])

  useEffect(() => {
    if (signUpDone) {
      dispatch({
        type: IS_SING_UP_MODE,
        data: false,
      })
    }
  }, [signUpDone])

  useEffect(() => {
    if (signUpError) {
      alert(signUpError)
    }
  }, [signUpError])

  const [name, setName] = useState('')
  const onChangeName = useCallback((e) => {
    setName(e.target.value)
  }, [])

  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const [nickname, setNickname] = useState('')
  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value)
  }, [])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback((e) => {
    setPasswordCheck(e.target.value)
    setPasswordError(e.target.value !== password)
  }, [password])

  const [address, setAddress] = useState('')
  const onChangeAddress = useCallback((e) => {
    setAddress(e.target.value)
  }, [])

  const [term, setTerm] = useState(false)
  const [termError, setTermError] = useState(false)
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked)
    setTermError(false)
  }, [])

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true)
    }
    if (!term) {
      return setTermError(true)
    }
    console.log(name, email, nickname, password, address)
    dispatch({
      type: SIGN_UP_REQUEST,
      data: {name, email, nickname, password, address}
    })
  }, [password, passwordCheck, term])

  const onSignUp = useCallback(() => {
    dispatch({
      type: IS_SING_UP_MODE,
      data: false,
    })
  }, [])

  useEffect(() => {
    if (name === '' || email === '' || nickname === '' || password === '' || passwordCheck === '' || address === '' || term === false) {
      setDisabled(true)
    }
    if (name !== '' && email !== '' && nickname !== '' && password !== '' && passwordCheck !== '' && address !== '' && term === true) {
      setDisabled(false)
    }
  }, [name, email, nickname, password, passwordCheck, address, term])

  return (
    <>
      <Head>
        <title>회원가입 | MYME</title>
      </Head>
      <Wrapper>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={1}
        >
          <Typography align="center" className="sign-up1">
            가입하고 더 많은 서비스를 누려보세요!
          </Typography>
          <Grid item xs={12} className="sign-up-grid">
            <TextField 
              required
              label="이름"
              className="text-field"
              variant="outlined"
              fullWidth={true}
              onChange={onChangeName}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <TextField
              required
              label="이메일"
              className="text-field"
              variant="outlined"
              fullWidth={true}
              onChange={onChangeEmail}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <TextField
              required
              label="닉네임"
              className="text-field"
              variant="outlined"
              fullWidth={true}
              onChange={onChangeNickname}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <TextField
              required
              label="비밀번호"
              type="password"
              className="text-field"
              autoComplete="current-password"
              variant="outlined"
              fullWidth={true}
              onChange={onChangePassword}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <TextField
              required
              label="비밀번호 확인"
              type="password"
              className="text-field"
              autoComplete="current-password"
              variant="outlined"
              fullWidth={true}
              onChange={onChangePasswordCheck}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <TextField
              required
              label="주소"
              className="text-field"
              variant="outlined"
              fullWidth={true}
              onChange={onChangeAddress}
            />
          </Grid>
          <Grid item xs={12} className="sign-up-grid">
            <Checkbox
              name="user-term"
              checked={term}
              onChange={onChangeTerm}
            />
            MYME 약관에 동의합니다.
            {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>}
          </Grid>
          <Grid item xs={12} className="sign-up-grid-item3">
            <Button
              variant="contained"
              disabled={disabled}
              fullWidth={true}
              color="primary"
              onClick={onSubmit}
              style={{
                fontSize: 14,
                fontFamily: 'Noto Sans KR',
                fontWeight: 500,
              }}
            >
              회원가입
            </Button>
          </Grid>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={1}
            className="sign-up3-grid-item"
          >
            <Grid item xs={5}>
              <Divider />
            </Grid>

            <Grid item xs={2}>
              <Typography
                align="center"
                className="sign-up3-grid-item-typography"
              >
                or
              </Typography>
            </Grid>

            <Grid item xs={5}>
              <Divider />
            </Grid>
          </Grid>
          <Grid item xs={5}>
            <Typography align="center" className="sign-up4-grid-item-typography">
              {'계정이 있으신가요?'}
            </Typography>
          </Grid>
          <Grid item xs={1}>
            <Button
              fullWidth={true}
              onClick={onSignUp}
              className="sign-up4-grid-item-button"
            >
              {'login'}
            </Button>
          </Grid>
        </Grid>
      </Wrapper>
    </>
  )
}

export default SignupForm