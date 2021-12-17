import React from 'react'
import PropTypes from 'prop-types'
import { GlobalStyle } from '../styled/styles'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
        <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
