import React from 'react'
import styled from 'styled-components'
import Layout from '../templates/layout'
import Hero from '../components/hero'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

const IndexPage = () => {
  return (
    <>
      <Layout>
        <Container>
          <Hero />
        </Container>
      </Layout>
    </>
  )
}

export default IndexPage
