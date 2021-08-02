import React, { useEffect } from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'
import SignupForm from '../components/SignupForm'
import { useDispatch, useSelector } from 'react-redux'
import { LOAD_MY_INFO_REQUEST } from '../reducers/user'

const Home = () => {
  const dispatch = useDispatch()
  const { me, isSignUp } = useSelector((state) => state.user)

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    })
  })

  return (
    <AppLayout>
      <div className={styles.container}>
        <Head>
          <title>MYME</title>
          <meta name="description" content="MYME" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {me ? <div>Hello {me.nickname}</div> : <div>Hello MYME</div>}
          {isSignUp ? <SignupForm /> : <LoginForm />}
        </main>
      </div>
    </AppLayout>
  )
}

export default Home