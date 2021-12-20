import React from 'react'
import PropTypes from 'prop-types'
import Helmet from "react-helmet"
import { GlobalStyle } from '../styled/styles'

const Layout = ({ children }) => {
  return (
    <>
      <Helmet htmlAttributes={{ lang: 'en' }}>
          <title>Sampsa Saari</title>
          <meta name="description" content="Web developer based in Oulu, Finland." />
      </Helmet>
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
