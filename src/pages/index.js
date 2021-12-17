import React from 'react'
import styled from 'styled-components';
import Template from '../templates/template'
import { ReactLogo } from '../components/graphic';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
const Content = styled.div`
  text-align: center;
  padding: 1rem 2rem 10rem 2rem;
`

const Heading = styled.h1`
  padding-bottom: 2rem;
`

const C = styled.div`
  position: absolute;
  opacity: 0.2;
`

const X = styled.div`
  animation: x 30s linear infinite alternate;
  width: 100px;
  height: 100px;

  @keyframes x {
    100% {
      transform: translateX( calc(100vw - 100px) )
    }
  }
`

const Y = styled.div`
  width: 100px;
  height: 100px;
  animation: y 19s linear infinite alternate;

  @keyframes y {
    100% {
      transform: translateY( calc(100vh - 100px) )
    }
  }
`

const IndexPage = () => (
    <Template>
      <C>
        <X>
          <Y>
            <ReactLogo />
          </Y>
        </X>
      </C>
      <Container>
        <Content>
          <Heading>Hi! I'm Sampsa.</Heading>
          <p>I'm a Web developer based in Oulu, Finland.</p>
        </Content>
      </Container>
    </Template>
);

export default IndexPage;

