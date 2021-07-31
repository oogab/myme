import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';

const AppLayout = ({ children }) => {
  const menuId = 'primary-search-account-menu';

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: "#89DDBF"}}>
        <Toolbar>
          <Link href='/'><a>MYME</a></Link>
          <Link href='/profile'><a>프로필</a></Link>
          <Link href='/signup'><a>회원가입</a></Link>
          <div>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              // onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {children}
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default AppLayout