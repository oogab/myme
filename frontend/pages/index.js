import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
  const dispatch = useDispatch()
  const { me } = useSelector((state) => state.user)

  return (
    <AppLayout>
      <div className={styles.container}>
        <Head>
          <title>MYME</title>
          <meta name="description" content="MYME" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          {me ? <div>Hello {me.email}</div> : <div>Hello MYME</div>}
          <LoginForm />
        </main>
      </div>
    </AppLayout>
  )
}

export default Home