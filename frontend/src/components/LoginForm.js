import React, {
  useState,
  useCallback
} from 'react'
import {
  Form,
  Input,
  Button
} from 'antd'
import styled from 'styled-components'
import axios from 'axios'

const ButtonWrapper = styled.div`
  margin-top: 10px;
`

const FormWrapper = styled(Form)`
  width: 300px;
  background-color: #EEEEEE;
  padding: 10px;
`

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
    setEmail(e.target.value)
  }, [])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value)
  }, [])

  const onSubmitForm = useCallback(() => {
    console.log(email, password)
    axios.post('http://i5a201.p.ssafy.io:3000/auth/login', {email, password})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [email, password])

  return (
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <text>로그인 하시고</text>
        <br />
        <text>더 많은 서비스를 이용해 보세요~</text>
      </div>
      <div>
        <Input
          name="user-id"
          type="email"
          value={email}
          onChange={onChangeEmail}
          placeholder="전화번호, 사용자 이름 또는 이메일"
          required
        />
      </div>
      <div>
        <Input
          name="user-password"
          type="password"
          value={password}
          onChange={onChangePassword}
          placeholder="비밀번호"
          required
        />
      </div>
      <ButtonWrapper>
        <Button style={{ width: 200, backgroundColor: "#89DDBF"}} type="primary" htmlType="submit">로그인</Button>
      </ButtonWrapper>
    </FormWrapper>
  )
}

export default LoginForm