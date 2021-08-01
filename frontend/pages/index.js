import React from 'react'
import Head from 'next/head'
import AppLayout from '../components/AppLayout'
import styles from '../styles/Home.module.css'
import LoginForm from '../components/LoginForm'

const Home = () => {
  return (
    <AppLayout>
      <div className={styles.container}>
        <Head>
          <title>MYME</title>
          <meta name="description" content="MYME" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={styles.main}>
          Hello MYME
          <LoginForm />
        </main>
      </div>
    </AppLayout>
  )
}

export default Home