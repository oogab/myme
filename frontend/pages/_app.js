import React from 'react'
import PropTypes from 'prop-types'
import '../styles/globals.css'
// import '@material-ui/core'
// import '@material-ui/icons'

import wrapper from '../store/configureStore'

function MYME({ Component, pageProps }) {
  return <Component {...pageProps} />
}

MYME.propTypes = {
  Component: PropTypes.elementType.isRequired,
}

export default wrapper.withRedux(MYME)