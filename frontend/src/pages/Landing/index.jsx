import React, {useState, useCallback} from 'react'
import Layout from '../../layout';
import LoginForm from '../../components/LoginForm'
import { Form, Input, Checkbox, Button } from 'antd'
import axios from 'axios';


const Landing = () => {
  const [user, setUser] = useState(null)

  const [name, setName] = useState('')
  const onChangeName = useCallback((e) => {
      setName(e.target.value)
  }, [])

  const [email, setEmail] = useState('')
  const onChangeEmail = useCallback((e) => {
      setEmail(e.target.value)
  }, [])

  const [nickname, setNickname] = useState('')
  const onChangeNickname =  useCallback((e) => {
      setNickname(e.target.value)
  }, [])

  const [password, setPassword] = useState('')
  const onChangePassword = useCallback((e) => {
      setPassword(e.target.value)
  }, [])

  const [gender, setGender] = useState('')
  const onChangeGender = useCallback((e) => {
      setGender(e.target.value)
  }, [])

  const [age, setAge] = useState('')
  const onChangeAge = useCallback((e) => {
      setAge(e.target.value)
  }, [])

  const [address, setAddress] = useState('')
  const onChangeAddress = useCallback((e) => {
      setAddress(e.target.value)
  }, [])

  const [phoneNumber, setPhoneNumber] = useState('')
  const onChangePhoneNumber = useCallback((e) => {
      setPhoneNumber(e.target.value)
  }, [])

  const [passwordCheck, setPasswordCheck] = useState('')
  const [passwordError, setPasswordError] = useState(false)
  const onChangePasswordCheck = useCallback((e) => {
      setPasswordCheck(e.target.value)
      setPasswordError(e.target.value !== password)
  }, [password])

  const [term, setTerm] = useState('')
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
    console.log(name, email, nickname, password, gender, age, address, phoneNumber)
    axios.post('http://i5a201.p.ssafy.io:3000/auth/join', {name, email, nickname, password, gender, age, address, 'phone_number' : phoneNumber})
      .then(response => {
        console.log(response)
      })
      .catch(error => {
        console.error(error)
      })
}, [password, passwordCheck, term])

  return (
    <Layout>
      <Form onFinish={onSubmit}>
        <div>
          <label htmlFor="user-name">이름</label>
          <br />
          <Input name="user-name" type="name" value={name} required onChange={onChangeName} />
        </div>
        <div>
          <label htmlFor="user-email">이메일</label>
          <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호 확인</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {/* {passwordError && <ErrorMessage>비밀번호가 일치하지 않습니다.</ErrorMessage>} */}
        </div>
        <div>
          <label htmlFor="user-gender">성별</label>
          <br />
          <Input name="user-gender" type="text" value={gender} required onChange={onChangeGender} />
        </div>
        <div>
          <label htmlFor="user-age">나이</label>
          <br />
          <Input name="user-age" type="number" value={age} required onChange={onChangeAge} />
        </div>
        <div>
          <label htmlFor="user-address">주소</label>
          <br />
          <Input name="user-address" type="text" value={address} required onChange={onChangeAddress} />
        </div>
        <div>
          <label htmlFor="user-phoneNumber">전화번호</label>
          <br />
          <Input name="user-phoneNumber" type="text" value={phoneNumber} required onChange={onChangePhoneNumber} />
        </div>
        <div>
          <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>우크 말을 잘 들을 것을 동의합니다.</Checkbox>
          {/* {termError && <ErrorMessage>약관에 동의하셔야 합니다.</ErrorMessage>} */}
        </div>
        <div style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit" >가입하기</Button>
        </div>
      </Form>
      <LoginForm/>
    </Layout>
  );
};

export default Landing;